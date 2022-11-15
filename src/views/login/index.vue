<template>
  <div class="login-container">
    <div class="login-content">
      <h2 class="title">{{ globalConfig.title }}</h2>
      <el-form :model="loginForm" :rules="rules" size="large" ref="loginRuleFormRef">
        <el-form-item prop="username">
          <el-input v-model="loginForm.username" />
        </el-form-item>
        <el-form-item prop="password">
          <el-input v-model="loginForm.password" show-password />
        </el-form-item>
        <el-form-item>
          <el-button
            type="primary"
            :loading="loading"
            class="submit-btn"
            size="large"
            @click="handleLogin"
          >
            立即登录
          </el-button>
        </el-form-item>
      </el-form>
    </div>
  </div>
</template>

<script setup lang="ts" name="login">
import type { FormInstance, FormRules } from 'element-plus';
import { useUserStore } from '@/store/user';
import { IAccount } from '@/service/types/user';
import { globalConfig } from '@/config';

const rules = reactive<FormRules>({
  username: [
    {
      required: true,
      message: '请输入账号',
      trigger: 'blur'
    },
    { min: 3, max: 5, message: '3-5', trigger: 'blur' }
  ],
  password: [
    {
      required: true,
      message: '请输入密码',
      trigger: 'blur'
    }
  ]
});
const store = useUserStore();
const loading = ref(false);
const loginForm = ref<IAccount>({
  username: '',
  password: ''
});
const loginRuleFormRef = ref<FormInstance>();
const handleLogin = async () => {
  await loginRuleFormRef.value?.validate();
  loading.value = true;
  await store.loginAction(loginForm.value);
  loading.value = false;
};
</script>

<style lang="scss" scoped>
.login-container {
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  .login-content {
    border: 1px solid #ccc;
    border-radius: 14px;
    width: 500px;
    padding: 40px;
    .title {
      margin-bottom: 30px;
      text-align: center;
    }
  }
  .submit-btn {
    width: 100%;
  }
}
</style>
