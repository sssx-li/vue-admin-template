<template>
  <div class="main-container">
    <router-view></router-view>
  </div>
</template>

<script setup lang="ts"></script>

<style lang="scss" scoped>
.main-container {
  height: 100%;
  .el-header {
    background: #fff;
  }
  .el-aside {
    background: #001529;
  }
  .main-content {
    height: calc(100% - 50px);
  }
  .el-main {
    background: #f0f2f5;
  }
}
</style>
