<template>
  <div class="login-container">
    <button @click="hancleClick">login</button>
  </div>
</template>

<script lang="ts">
import { useStore } from '@/store';
import { defineComponent, reactive } from 'vue';

export default defineComponent({
  name: 'loginView',
  setup() {
    const store = useStore();
    const loginForm = reactive({
      username: 'admin',
      password: 'admin'
    });
    // --- 方法 ---
    const hancleClick = () => {
      store.dispatch('user/loginAction', { ...loginForm });
    };
    return {
      hancleClick
    };
  }
});
</script>

<style lang="scss" scoped></style>
