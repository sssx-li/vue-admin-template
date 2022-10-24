<template>
  <div class="login-container">
    <div class="login-content">
      <h2 class="login-title">后台管理系统</h2>
      <el-form
        :model="loginForm"
        :rules="rules"
        size="large"
        class="login-account"
        ref="loginRuleFormRef"
      >
        <el-form-item prop="username">
          <el-input v-model="loginForm.username" />
        </el-form-item>
        <el-form-item prop="password">
          <el-input v-model="loginForm.password" show-password />
        </el-form-item>
      </el-form>
      <div class="login-footer">
        <el-button type="primary" class="login-btn" size="large" @click="handleLogin">
          立即登录
        </el-button>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts" name="login">
import { rules } from './config/config';
import type { FormInstance } from 'element-plus';
import { useUserStore } from '@/store/user';
import { IAccount } from '@/service/types/user';

const store = useUserStore();
const loginForm = ref<IAccount>({
  username: '',
  password: ''
});
const loginRuleFormRef = ref<FormInstance>();

const handleLogin = async () => {
  await loginRuleFormRef.value?.validate((valid) => {
    if (!valid) return;
    store.loginAction(loginForm.value);
  });
};
</script>

<style lang="scss" scoped>
.login-container {
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100%;
  width: 100%;
}
.login-content {
  width: 410px;
  padding: 20px;
  box-sizing: border-box;
  border: 1px solid #ccc;
  border-radius: 14px;
  display: flex;
  flex-direction: column;
  .login-title {
    margin: 0 0 18px;
    text-align: center;
  }
  .login-footer {
    .login-btn {
      width: 100%;
    }
  }
}
</style>
