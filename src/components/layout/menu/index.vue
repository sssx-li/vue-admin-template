<template>
  <el-menu
    active-text-color="#0a60bd"
    background-color="#001529"
    class="menu-container"
    default-active="/main/home"
    text-color="#b7bdc3"
  >
    <template v-for="menu in menuList" :key="menu.path">
      <el-menu-item
        :index="menu.path"
        v-if="!menu.children || menu.children.length === 0"
      >
        <el-icon><component :is="menu.meta.icon" /></el-icon>
        <span>{{ menu.meta.title }}</span>
      </el-menu-item>
      <sub-menu :menuInfo="menu" v-else />
    </template>
  </el-menu>
</template>

<script lang="ts">
import { useStore } from '@/store';
import { computed, defineComponent } from 'vue';
import SubMenu from './subMenu.vue';
export default defineComponent({
  name: 'menuComp',
  components: {
    SubMenu
  },
  setup() {
    const store = useStore();
    const menuList = computed(() => {
      console.log('store.state.user.userMenus', store.state.user.userMenus);
      return store.state.user.userMenus;
    });
    return {
      menuList
    };
  }
});
</script>

<style lang="scss" scoped>
.menu-container {
  height: 100%;
  width: 100%;
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
.el-menu {
  border-right: none;
}
</style>
