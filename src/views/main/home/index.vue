<template>
  <section class="message-content">
    <a-button type="primary" @click="handleMessage">点我提示消息</a-button>
    <a-button @click="handleConfirm">点我触发Confirm弹窗</a-button>
  </section>
  <section class="form-content">
    <h3>基础表单：</h3>
    <SyForm v-bind="formConfig" v-model="formState" @onSubmit="onSubmit" ref="syFormRef"></SyForm>
  </section>
</template>

<script lang="ts">
import { defineComponent, ref } from 'vue';
import { message } from 'ant-design-vue';

import { useConfirm } from '@/hooks/useConfirm';

import { SyForm } from '@/baseUI';
import { formConfig } from './config/config.form';
import dayjs from 'dayjs';
import weekOfYear from 'dayjs/plugin/weekOfYear';
dayjs.extend(weekOfYear);
export default defineComponent({
  name: 'homeView',
  components: {
    SyForm
  },
  setup() {
    const handleMessage = () => {
      message.success('这是一条成功的消息');
    };
    const confirm = useConfirm();
    const handleConfirm = async () => {
      await confirm();
      message.success('成功');
    };
    // 表单
    const syFormRef = ref<InstanceType<typeof SyForm>>();
    const formState = ref<any>({});
    const onSubmit = () => {
      syFormRef.value
        ?.validate()
        .then(() => {
          message.success('成功');
          console.log('formState', formState.value);
        })
        .catch(() => {});
    };
    return {
      handleMessage,
      handleConfirm,
      syFormRef,
      formState,
      formConfig,
      onSubmit
    };
  }
});
</script>

<style lang="scss" scoped>
.message-content {
  .ant-btn {
    margin-right: 10px;
  }
}
.form-content {
  margin: 14px;
}
</style>
