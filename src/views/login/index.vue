<template>
  <div class="login-container">
    <button @click="handleLogin">login</button>
  </div>
</template>

<script setup lang="ts" name="loginView">
import { IAccount } from '@/service/types/user';
import { useStore } from '@/store';

const store = useStore();
const loginForm = ref<IAccount>({
  username: '',
  password: ''
});
const handleLogin = async () => {
  await store.user.loginAction(loginForm.value);
};
</script>

<style lang="scss" scoped></style>
