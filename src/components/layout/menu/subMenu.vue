<template>
  <a-sub-menu :key="menuInfo.url">
    <template #icon v-if="menuInfo.icon">
      <component :is="menuInfo.icon"></component>
    </template>
    <template #title>{{ menuInfo.name }}</template>
    <template v-for="item in menuInfo.children" :key="item.url">
      <template v-if="!item.children || item.children.length === 0">
        <a-menu-item :key="item.url">
          <template #icon v-if="item.icon">
            <component :is="item.icon"></component>
          </template>
          {{ item.name }}
        </a-menu-item>
      </template>
      <template v-else>
        <sub-menu :menu-info="item" :key="item.url" />
      </template>
    </template>
  </a-sub-menu>
</template>

<script lang="ts">
import { defineComponent } from 'vue';

export default defineComponent({
  name: 'SubMenu',
  props: {
    menuInfo: {
      type: Object,
      default: () => ({})
    }
  }
});
</script>

<style lang="scss" scoped></style>
