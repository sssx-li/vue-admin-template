import { createRouter, createWebHistory, RouteRecordRaw } from 'vue-router';
import mainStaticRoute from './modules';
import localCache from '@/utils/localCache';
import { tokenKey } from '@/common';
import { useStore } from '@/store';

const routes: Array<RouteRecordRaw> = [
  {
    path: '/',
    redirect: '/main'
  },
  {
    path: '/main',
    name: 'main',
    component: () => import(/* webpackChunkName: "main" */ '@/views/main/index.vue'),
    children: [...mainStaticRoute]
  },
  {
    path: '/login',
    name: 'login',
    component: () => import(/* webpackChunkName: "login" */ '@/views/login/index.vue')
  },
  {
    path: '/:pathMatch(.*)',
    name: '404',
    component: () => import('@/views/404.vue')
  }
];
const router = createRouter({
  history: createWebHistory(),
  routes
});

router.beforeEach((to, from, next) => {
  const token = localCache.getCache(tokenKey);
  const isToLogin = to.path === '/login';
  if (token) {
    if (isToLogin) {
      next({ path: '/' });
    } else if (to.path === '/main') {
      const store = useStore();
      next({ path: store.user.firstMenuPath });
    } else {
      next();
    }
  } else {
    if (!isToLogin) {
      next({ path: '/login' });
    } else {
      next();
    }
  }
});

export default router;
