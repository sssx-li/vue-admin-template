<template>
  <el-card class="sy-card" :shadow="shadow" :bodyStyle="bodyStyle">
    <template #header v-if="showHeader">
      <div class="card-header">
        <span class="left-content">
          <slot name="left">
            {{ title }}
          </slot>
        </span>
        <span class="right-content">
          <slot name="right"></slot>
        </span>
      </div>
    </template>
    <div class="card-content">
      <slot></slot>
    </div>
  </el-card>
</template>

<script setup lang="ts" name="syCard">
withDefaults(
  defineProps<{
    title?: string;
    shadow?: 'always' | 'hover' | 'never';
    bodyStyle?: object;
    showHeader?: boolean;
  }>(),
  {
    showHeader: true
  }
);
</script>

<style lang="scss" scoped>
.sy-card {
  .card-header {
    display: flex;
    justify-content: space-between;
    align-items: center;
    .left-content {
      flex: 1;
    }
    .right-content {
      margin-left: 10px;
    }
  }
}
</style>
