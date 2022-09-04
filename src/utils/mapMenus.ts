import { mainStaticRoutes } from '@/router/modules';

import { RouteRecord } from 'vue-router';
export function mapMenusToRoutes(userMenus: any[]): RouteRecord[] {
  const routes: any[] = [];
  // 加载所有菜单路由
  const permiseRoutes: RouteRecord[] = [];
  const routeFiles = require.context(`../router/modules/main`, true, /\.ts$/);
  routeFiles.keys().forEach((key) => {
    const route = require(`../router/modules/main` + key.split('.')[1]).default;
    permiseRoutes.push(...route);
  });
  // 根据权限菜单获取routes
  const getPermiseRoutes = (menus: any[]) => {
    for (const menu of menus) {
      //
    }
  };
  console.log('permiseRoutes', permiseRoutes);

  // 静态路由(白名单路由) 与 权限路由集合
  const filterRoutes = [...permiseRoutes, ...mainStaticRoutes];
  Object.assign(routes, filterRoutes);
  routes.sort((a, b) => a.meta.sort - b.meta.sort);
  return routes;
}
