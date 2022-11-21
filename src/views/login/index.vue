<template>
  <div class="login-container">
    <SyCard class="login-card">
      <h2 class="login-title">{{ globalConfig.title }}</h2>
      <SyForm
        :show-form-footer="false"
        v-bind="formConfig"
        v-model="loginForm"
        ref="loginFormRef"
      />
      <a-button
        @click="handleLogin"
        class="submit-btn"
        size="large"
        type="primary"
        :loading="loading"
      >
        登录
      </a-button>
    </SyCard>
  </div>
</template>

<script setup lang="ts">
import { SyCard, SyForm } from '@/baseUI';
import { formConfig } from './config/config.form';
import { IAccount } from '@/service/types/user';
import { globalConfig } from '@/config';
import { useStore } from '@/store';

const store = useStore();
const loginForm = ref<IAccount>({
  username: '',
  password: ''
});
const loading = ref(false);
const loginFormRef = ref();
const handleLogin = async () => {
  await loginFormRef.value.validate();
  loading.value = true;
  await store.user.loginAction(loginForm.value);
  loading.value = false;
};
</script>

<style lang="scss" scoped>
.login-container {
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  background: #f0f2f5;
  .login-card {
    padding: 20px 40px;
    box-shadow: 0 0px 10px 2px rgba(0, 0, 0, 0.1) !important;
    .login-title {
      text-align: center;
      font-size: 28px;
      margin-bottom: 50px;
    }
  }
  .submit-btn {
    width: 100%;
  }
}
</style>
