<template>
  <div class="menu-container">
    <a-menu
      v-model:openKeys="openKeys"
      v-model:selectedKeys="selectedKeys"
      @click="handleClick"
      mode="inline"
    >
      <template v-for="route in menuInfo" :key="route.id">
        <template v-if="route.children.length === 0">
          <a-menu-item :key="route.url">
            <template #icon v-if="route.icon">
              <component :is="route.icon"></component>
            </template>
            {{ route.name }}
          </a-menu-item>
        </template>
        <template v-else>
          <sub-menu :key="route.id" :menu-info="route"></sub-menu>
        </template>
      </template>
    </a-menu>
  </div>
</template>

<script lang="ts">
import { defineComponent, ref, watch } from 'vue';
import { useRoute, useRouter } from 'vue-router';
import SubMenu from './subMenu.vue';
export default defineComponent({
  name: 'navMenuView',
  components: {
    'sub-menu': SubMenu
  },
  props: {
    menuInfo: {
      type: Array,
      required: true
    }
  },
  setup() {
    // --- 属性 ---
    const route = useRoute();
    const router = useRouter();
    const openKeys = ref<any[]>([]);

    const selectedKeys = ref<any[]>([]);

    watch(
      () => route.path,
      (path) => {
        selectedKeys.value = [route.path];
        const keyList: any = path.slice(1).split('/');
        if (keyList.length === 1) return [''];
        for (let index = 0; index < path.length; index++) {
          if (index !== 0 && path[index] === '/') {
            openKeys.value.push(path.substr(0, index));
          }
        }
        openKeys.value.shift();
      },
      {
        immediate: true
      }
    );
    // const openKeys = computed(() => {
    //   const path = route.path;
    //   const keyList: any = path.slice(1).split('/');
    //   if (keyList.length === 1) return [''];
    //   const openKey = [];
    //   for (let index = 0; index < path.length; index++) {
    //     if (index !== 0 && path[index] === '/') {
    //       openKey.push(path.substr(0, index));
    //     }
    //   }
    //   openKey.shift();
    //   return openKey;
    // });

    // --- 方法 ---
    const handleClick = (e: Event) => {
      const path = (e as any).key;
      router.push({ path });
    };

    return {
      selectedKeys,
      openKeys,
      handleClick
    };
  }
});
</script>

<style lang="scss" scoped>
.menu-container {
  height: 100%;
  overflow: auto;
  box-shadow: 2px 0 8px 0 rgb(29 35 41 / 5%);
  .ant-menu {
    height: 100%;
  }
}
/*里面的代码可以根据自己需求去进行更改*/
/* 设置滚动条的样式 */
::-webkit-scrollbar {
  width: 6px;
}
/* 滚动槽 */
::-webkit-scrollbar-track {
  -webkit-box-shadow: rgba(0, 0, 0, 0.5);
  background: rgba(0, 0, 0, 0.2);
  border-radius: 10px;
}
/* 滚动条滑块 */
::-webkit-scrollbar-thumb {
  border-radius: 10px;
  background: rgba(0, 0, 0, 0.4);
  -webkit-box-shadow: rgba(0, 0, 0, 0.5);
}
::-webkit-scrollbar-thumb:window-inactive {
  background: rgba(0, 0, 0, 0.4);
}
</style>
