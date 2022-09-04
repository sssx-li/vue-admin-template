import { Module } from 'vuex';

import router from '@/router';
import localCache from '@/utils/catch';

import { IUserState } from './types';
import { IRootState } from '@/store/types';
import { login } from '@/service/api/user';
import { tokenKey } from '@/common';
import { IAccount } from '@/service/api/user/types';
import { mapMenusToRoutes } from '@/utils/mapMenus';

const userModel: Module<IUserState, IRootState> = {
  namespaced: true,
  state() {
    return {
      token: '',
      userMenus: []
    };
  },
  getters: {},
  mutations: {
    changeToken(state, token: string) {
      state.token = token;
    },
    changeUserMenus(state, userMenus: any) {
      const routes = mapMenusToRoutes(userMenus);
      state.userMenus = routes;
      console.log('routes', routes);
      routes.length > 0 &&
        routes.forEach((route) => {
          router.addRoute('main', route);
        });
    }
  },
  actions: {
    async loginAction({ commit }, payload: IAccount) {
      const res = await login(payload);
      const { token } = res.data;
      localCache.setCatch(tokenKey, token);
      commit('changeToken', token);
      router.push('/');
    },
    loadLocalLogin({ commit }) {
      const token = localCache.getCache(tokenKey);
      const userMenus = localCache.getCache('userMenus');
      token && commit('changeToken', token);
      commit('changeUserMenus', userMenus);
    }
  }
};

export default userModel;
