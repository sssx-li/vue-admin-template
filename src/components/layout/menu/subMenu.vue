<template>
  <el-sub-menu :index="menuInfo.path">
    <template #title>
      <el-icon :size="20" v-if="menuInfo.meta.icon">
        <component :is="menuInfo.meta.icon"></component>
      </el-icon>
      <span>{{ menuInfo.meta.title }}</span>
    </template>
    <!-- 遍历item -->
    <template v-for="menu in menuInfo.children" :key="menu.path">
      <el-menu-item
        :index="menu.path"
        @click="handleMenuItemClick(menu)"
        v-if="!menu.children || menu.children === 0"
      >
        <el-icon :size="20" v-if="menu.meta.icon">
          <component :is="menu.meta.icon"></component>
        </el-icon>
        <span>{{ menu.meta.title }}</span>
      </el-menu-item>
      <sub-menu :menuInfo="menu" v-else />
    </template>
  </el-sub-menu>
</template>

<script lang="ts">
import { defineComponent } from 'vue';

export default defineComponent({
  name: 'subMenu',
  props: {
    menuInfo: {
      type: Object,
      required: true
    }
  },
  emits: ['handleClickMenu'],
  setup(props, { emit }) {
    const handleMenuItemClick = (menu: any) => {
      emit('handleClickMenu', menu);
    };
    return {
      handleMenuItemClick
    };
  }
});
</script>

<style lang="scss" scoped></style>
