<template>
  <div class="layout-header-container">
    <div class="left-icon">
      <el-icon size="20px">
        <component @click="changeCollapse" :is="isCollapse ? `Expand` : 'Fold'" />
      </el-icon>
    </div>
    <el-dropdown class="right-action-info" @command="handleCommand">
      <span class="el-dropdown-link">
        <el-avatar icon="UserFilled" :size="34" />
        <span class="nickname">超级管理员</span>
      </span>
      <template #dropdown>
        <el-dropdown-menu>
          <el-dropdown-item icon="Avatar">用户信息</el-dropdown-item>
          <el-dropdown-item divided icon="CircleClose" command="logout">退出登录</el-dropdown-item>
        </el-dropdown-menu>
      </template>
    </el-dropdown>
  </div>
</template>

<script setup lang="ts">
import { useConfirm } from '@/hooks';
import localCache from '@/utils/localCache';

const props = defineProps<{ isCollapse: boolean }>();
const emit = defineEmits(['update:isCollapse']);

const router = useRouter();
const confirm = useConfirm();
const handleCommand = async (key: string) => {
  if (key === 'logout') {
    await confirm({
      title: '提示',
      type: 'warning',
      content: '确定要退出登录吗？'
    });
    localCache.clearCache();
    router.push({ path: '/login', replace: true });
  }
};
const changeCollapse = () => {
  emit('update:isCollapse', !props.isCollapse);
};
</script>

<style lang="scss" scoped>
.layout-header-container {
  display: flex;
  height: 50px;
  line-height: 50;
  color: #000;
  justify-content: space-between;
  .left-icon {
    flex: 0 0 20px;
    display: flex;
    align-items: center;
    cursor: pointer;
  }
  .right-action-info {
    display: flex;
    align-items: center;
    flex: 0 0 120px;
  }
  .el-dropdown-link {
    display: flex;
    align-items: center;
    cursor: pointer;
  }
  .nickname {
    margin-left: 10px;
    color: #000;
  }
}
</style>
