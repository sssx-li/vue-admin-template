import { createRouter, createWebHashHistory, RouteRecordRaw } from 'vue-router';
import { mainStaticRoutes } from './modules';
import localCache from '@/utils/catch';
import { tokenKey } from '@/common';

const routes: Array<RouteRecordRaw> = [
  {
    path: '/',
    redirect: '/main'
  },
  {
    path: '/main',
    name: 'main',
    component: () =>
      import(/* webpackChunkName: "main" */ '@/views/main/index.vue'),
    children: [...mainStaticRoutes]
  },
  {
    path: '/login',
    name: 'login',
    component: () =>
      import(/* webpackChunkName: "login" */ '@/views/login/index.vue')
  },
  {
    path: '/:pathMatch(.*)',
    name: '404',
    component: () => import('@/views/404.vue')
  }
];
const router = createRouter({
  history: createWebHashHistory(),
  routes
});

router.beforeEach((to) => {
  const token = localCache.getCache(tokenKey);
  const isToLogin = to.path === '/login';
  if (token) {
    isToLogin && router.push('/');
  } else {
    !isToLogin && router.push('/login');
  }
  if (to.path === '/main') {
    // return firstMenu.url;
  }
});

export default router;
