/*
 * @Author: lizhiquan
 * @Date: 2022-08-23 23:29:48
 * @LastEditors: lizhiquan
 * @LastEditTime: 2022-08-23 23:33:10
 * @FilePath: \vue-admin-template\src\global\index.ts
 * @Description:
 *
 * Copyright (c) 2022 by lizhiquan 842048365@qq.com, All Rights Reserved.
 */
import type { App } from 'vue';
import properties from './properties';
import directives from './directives';
import icons from './icons';

export function globalRegister(app: App): void {
  app.use(properties);
  app.use(icons);
  app.use(directives);
}
