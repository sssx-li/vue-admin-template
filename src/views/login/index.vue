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
        <el-button type="primary" class="login-btn" size="large" @click="loginAction">
          立即登录
        </el-button>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent, reactive, ref } from 'vue';
import { rules } from './config/config';
import type { FormInstance } from 'element-plus';
import { useStore } from '@/store';
export default defineComponent({
  name: 'loginView',
  setup() {
    // --- 属性 ---
    const store = useStore();
    const loginForm = reactive({
      username: '',
      password: ''
    });
    const loginRuleFormRef = ref<FormInstance>();

    // --- 方法 ---
    const loginAction = async () => {
      await loginRuleFormRef.value?.validate((valid) => {
        if (!valid) return;
        store.dispatch('user/loginAction', { ...loginForm });
      });
    };
    return {
      loginForm,
      loginRuleFormRef,
      rules,
      loginAction
    };
  }
});
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
