<template>
  <div class="login-container">
    <button @click="handleLogin">login</button>
  </div>
</template>

<script setup lang="ts" name="loginView">
import { useUserStore } from '@/store/user';
import { IAccount } from '@/service/types/user';

const store = useUserStore();
const loginForm = ref<IAccount>({
  username: '',
  password: ''
});
const handleLogin = async () => {
  await store.loginAction(loginForm.value);
};
</script>

<style lang="scss" scoped></style>
