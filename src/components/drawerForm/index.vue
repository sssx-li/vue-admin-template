<template>
  <SyDrawer
    v-model:visible="defVisible"
    :title="title"
    :loading="loading"
    @close="close"
    @onSubmit="onSubmit"
    ref="drawerRef"
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
  </SyDrawer>
</template>

<script lang="ts">
import { defineComponent, ref } from 'vue';

import { SyDrawer, SyForm } from '@/baseUI';

export default defineComponent({
  name: 'drawerForm',
  components: {
    SyDrawer,
    SyForm
  },
  props: {
    title: String,
    visible: Boolean,
    show: Boolean,
    formConfig: {
      type: Object,
      required: true
    },
    row: {
      type: Object,
      default: () => {}
    }
  },
  emits: ['onSubmit', 'update:visible', 'update:show', 'onClose'],
  setup(props, { emit, expose }) {
    const drawerRef = ref();
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
    const handleCloseDrawer = () => {
      loading.value = false;
      drawerRef.value.close();
    };

    expose({
      handleCloseDrawer,
      loading
    });

    return {
      ...props,
      otherSloteNameList,
      loading,
      formState,
      drawerRef,
      formCompRef,
      defVisible,
      onSubmit,
      close,
      handleCloseDrawer
    };
  }
});
</script>

<style lang="scss" scoped></style>
