<template>
  <SyModal
    v-model:visible="defVisible"
    :title="title"
    :destroyOnClose="destroyOnClose"
    :footer="footer"
    :okText="okText"
    :okType="okType"
    :width="width"
    @onSubmit="onSubmit"
    @close="close"
    ref="dialogRef"
  >
    <SyForm ref="formCompRef" v-bind="formConfig" v-model="formState" @onSubmit="onSubmit">
      <template #footer>
        <slot />
      </template>
      <!-- other 类型插槽 -->
      <template
        v-for="item in otherSloteNameList"
        :key="item.field"
        #[`other-${item.field}`]="scope"
      >
        <slot :name="`other-${item.field}`" :content="scope.content"></slot>
      </template>
    </SyForm>
  </SyModal>
</template>

<script lang="ts">
import { defineComponent, ref } from 'vue';

import { SyModal, SyForm } from '@/baseUI';

export default defineComponent({
  name: 'dialogForm',
  components: {
    SyModal,
    SyForm
  },
  props: {
    visible: Boolean,
    show: Boolean,
    title: String,
    destroyOnClose: Boolean,
    footer: [String, Object],
    okText: String,
    okType: String,
    width: [Number, String],
    formConfig: {
      type: Object,
      required: true
    },
    row: {
      type: Object,
      default: () => {}
    }
  },
  emits: ['update:visible', 'update:show', 'onSubmit', 'onClose'],
  setup(props, { emit, expose }) {
    const dialogRef = ref();
    const loading = ref(false);
    const defVisible = ref(props.visible);
    // 表单数据处理
    const formState = ref<any>({});
    const formCompRef = ref<InstanceType<typeof SyForm>>();
    // 初始化表单数据
    Object.assign(formState.value, { ...props.row });
    // other 类型插槽
    let otherSloteNameList = JSON.parse(JSON.stringify(props.formConfig.formItems || []));
    otherSloteNameList = props.formConfig.formItems.filter((item: any) => {
      return item.type === 'other';
    });

    const close = () => {
      formState.value = {};
      emit('update:visible', false);
      emit('update:show', false);
      emit('onClose');
    };
    const onSubmit = () => {
      formCompRef.value
        ?.validate()
        .then(() => {
          loading.value = true;
          emit('onSubmit', formState.value);
        })
        .catch(() => {});
    };

    const handleCloseDialog = () => {
      loading.value = false;
      dialogRef.value.close();
    };

    expose({
      handleCloseDialog
    });

    return {
      ...props,
      loading,
      otherSloteNameList,
      formState,
      dialogRef,
      formCompRef,
      defVisible,
      onSubmit,
      close,
      handleCloseDialog
    };
  }
});
</script>

<style lang="scss" scoped></style>
