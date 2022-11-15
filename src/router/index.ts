import { createRouter, createWebHistory, RouteRecordRaw, RouteMeta } from 'vue-router';
import NProgress from 'nprogress';
import 'nprogress/nprogress.css';
NProgress.configure({ showSpinner: false });
import mainStaticRoute from './modules';
import localCache from '@/utils/localCache';
import { tokenKey } from '@/common';
import { useUserStore } from '@/store/user';

interface IMeta extends RouteMeta {
  isHidden: boolean;
}

export interface RouterItem {
  path?: string;
  component?: any;
  meta?: IMeta;
  name?: string;
  redirect?: string;
  children?: RouterItem[];
}

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
  NProgress.start();
  const token = localCache.getCache(tokenKey);
  const isToLogin = to.path === '/login';
  if (token) {
    if (isToLogin) {
      next({ path: '/' });
    } else if (to.path === '/main') {
      const store = useUserStore();
      next({ path: store.firstMenuPath });
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

router.beforeEach(() => {
  NProgress.done();
});

export default router;
