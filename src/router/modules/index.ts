import { RouteRecordRaw } from 'vue-router';

const mainStaticRoute: RouteRecordRaw[] = [
  {
    path: '/main/dashboard',
    name: 'dashboard',
    meta: { title: '首页', icon: 'HomeFilled', sort: 1 },
    component: () => import('@/views/main/dashboard/index.vue')
  }
];

export default mainStaticRoute;
