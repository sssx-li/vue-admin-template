import Request from '@/service';

import { IAccount, ILoginResult } from '../types/user';
import { IDataModel } from '../types/axios';
import localCache from '@/utils/localCache';
import { User } from '@/service/api';
import { tokenKey } from '@/common';

// 登录
export function login(data: IAccount) {
  return Request.request<IDataModel<ILoginResult>>({
    url: User.LOGIN,
    method: 'POST',
    data,
    interceptors: {
      responseInterceptor: (res) => {
        const {
          code,
          data: { token }
        } = res;
        if (code === 0) {
          localCache.setCatch(tokenKey, token);
        }
        return res;
      }
    }
  });
}

// 获取用户信息
export function getUserInfo() {
  return Request.get({
    url: User.USER
  });
}

export function getUserMenu() {
  return Request.get({
    url: User.USEMENU
  });
}
