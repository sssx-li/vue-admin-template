<template>
  <el-menu
    active-text-color="#0a60bd"
    background-color="#001529"
    class="menu-container"
    :default-active="defaultActive"
    text-color="#b7bdc3"
  >
    <template v-for="menu in menuList" :key="menu.path">
      <el-menu-item
        :index="menu.path"
        v-if="!menu.meta.isHidden && (!menu.children || menu.children.length === 0)"
        @click="handleClickMenu(menu)"
      >
        <el-icon v-if="menu.meta.icon">
          <component :is="menu.meta.icon" />
        </el-icon>
        <span>{{ menu.meta.title }}</span>
      </el-menu-item>
      <sub-menu :menuInfo="menu" @handleClickMenu="handleClickMenu" v-else />
    </template>
  </el-menu>
</template>

<script lang="ts">
import { useRoute, useRouter } from 'vue-router';
import { computed, defineComponent } from 'vue';
import SubMenu from './subMenu.vue';
import { useUserStore } from '@/store/user';
export default defineComponent({
  name: 'menuComp',
  components: {
    SubMenu
  },
  setup() {
    // --- 属性 ---
    const store = useUserStore();
    const route = useRoute();
    const router = useRouter();
    const defaultActive = computed(() => route.path);
    const menuList: any = computed(() => store.userMenus);

    // --- 方法 ---
    const handleClickMenu = (menu: any) => {
      router.push({ path: menu.path });
    };
    return {
      defaultActive,
      menuList,
      handleClickMenu
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
  :deep(.el-menu-item.is-active) {
    color: #fff !important;
    background-color: #0a60bd !important;
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
