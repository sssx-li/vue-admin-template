<template>
  <div class="home">
    <el-icon :size="20">
      <Avatar />
    </el-icon>
    <el-button type="primary">立即登录</el-button>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue';

export default defineComponent({
  name: 'HomeView'
});
</script>
