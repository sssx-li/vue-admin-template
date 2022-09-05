<template>
  <div class="home-container">
    <!-- 使用方式详情请看README.md -->
    <h2 class="title">Icon使用方式：</h2>
    <!-- 1：el自带icon -->
    <h3 class="title">1. el自带icon</h3>
    <section class="content">
      <!-- 组件式 -->
      <el-icon :size="20" style="color: #f60">
        <Avatar />
      </el-icon>
      <!-- 使用vue自带component组件,适用于动态icon，如菜单栏icon渲染 -->
      <el-icon :size="20">
        <component :is="`Menu`" />
      </el-icon>
    </section>
    <!-- 2. 自定义svg(必须存放在src/assets/svgs目录下)  -->
    <h3 class="title">2. 自定义svg</h3>
    <section class="content">
      <el-icon :size="20">
        <icon-custom-logo />
      </el-icon>
    </section>
    <!-- 3. 使用 iconify图标库-->
    <h3 class="title">3. iconify图标库</h3>
    <section class="content">
      <icon-ph-alien />
      <icon-ph-anchor-bold />
      <icon-mdi-account-plus />
    </section>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue';

export default defineComponent({
  name: 'homeView',
  setup() {
    return {};
  }
});
</script>

<style lang="scss" scoped>
.home-container {
  .title {
    margin: 0 0 10px;
  }
  .content {
    margin-bottom: 20px;
  }
}
</style>
