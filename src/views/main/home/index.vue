<template>
  <div class="home-container">
    <h2>Home</h2>
    <icon-custom-logo width="30px" height="30px" />
    <icon-ph-alien />
    <icon-ph-anchor-bold />
    <icon-mdi-account-plus />
    <br />
    <button @click="handleLogout">logout</button>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import localCache from '@/utils/catch';

export default defineComponent({
  name: 'homeView',
  setup() {
    const handleLogout = () => {
      localCache.clearCache();
      window.location.reload();
    };
    return {
      handleLogout
    };
  }
});
</script>

<style lang="scss" scoped></style>
