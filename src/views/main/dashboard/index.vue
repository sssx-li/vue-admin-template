<template>
  <div class="dashboard-container">
    <h2>Home</h2>
    <icon-sy-logo width="30px" height="30px" />
    <icon-ph-alien />
    <icon-ph-anchor-bold />
    <icon-mdi-account-plus />
    <br />
    <button @click="handleLogout">logout</button>
  </div>
</template>

<script setup lang="ts" name="dashboard">
import localCache from '@/utils/localCache';
const handleLogout = () => {
  localCache.clearCache();
  window.location.reload();
};
</script>

<style lang="scss" scoped></style>
