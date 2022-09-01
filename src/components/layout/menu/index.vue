<template>
  <el-menu
    active-text-color="#0a60bd"
    background-color="#001529"
    class="menu-container"
    default-active="2"
    text-color="#b7bdc3"
  >
    <el-menu-item index="2">
      <span>Navigator Two</span>
    </el-menu-item>
    <el-sub-menu index="1">
      <template #title>
        <span>Navigator One</span>
      </template>
      <el-menu-item index="1-1">item one</el-menu-item>
    </el-sub-menu>
  </el-menu>
</template>

<script lang="ts">
import { defineComponent } from 'vue';

export default defineComponent({
  name: 'menuComp',
  setup() {
    return {};
  }
});
</script>

<style lang="scss" scoped>
.menu-container {
  height: 100%;
  .el-menu {
    border-right: none;
  }
  .el-sub-menu {
    background-color: #001529 !important;
    // 二级菜单 ( 默认背景 )
    .el-menu-item {
      padding-left: 50px !important;
      background-color: #0c2135 !important;
    }
  }
  :deep(.el-sub-menu__title) {
    background-color: #001529 !important;
  }
  .el-menu-item:hover {
    color: #fff !important; // 菜单
  }
  .el-menu-item.is-active {
    color: #fff !important;
    background-color: #0a60bd !important;
  }
}
</style>
