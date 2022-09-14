import { RouteRecordRaw } from 'vue-router';

const aboutRoute: RouteRecordRaw = {
  path: '/main/about',
  name: 'about',
  redirect: '/main/about/first',
  meta: {
    title: '关于',
    icon: 'Promotion',
    sort: 2
  },
  children: [
    {
      path: '/main/about/first',
      name: 'aboutFirst',
      component: () => import('@/views/main/about/index.vue'),
      meta: {
        title: '关于1-1',
        icon: 'Menu',
        isHidden: true
      }
    },
    {
      path: '/main/about/secound',
      name: 'aboutSecound',
      component: () => import('@/views/main/about/secound.vue'),
      meta: {
        title: '关于1-2',
        icon: 'Menu'
      }
    }
  ]
};
export default aboutRoute;
