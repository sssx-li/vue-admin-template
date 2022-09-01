import { Module } from 'vuex';

import router from '@/router';
import localCache from '@/utils/catch';

import { IUserState } from './types';
import { IRootState } from '@/store/types';
import { login } from '@/service/api/user';
import { tokenKey } from '@/common';
import { IAccount } from '@/service/api/user/types';

async function loginUserAction(commit: any, resData: any) {
  const { token } = resData;
  localCache.setCatch(tokenKey, token);
  commit('changeToken', token);
  router.push('/');
}

const userModel: Module<IUserState, IRootState> = {
  namespaced: true,
  state() {
    return {
      token: ''
    };
  },
  getters: {},
  mutations: {
    changeToken(state, token: string) {
      state.token = token;
    }
  },
  actions: {
    async accountLoginAction({ commit }, payload: IAccount) {
      const res = await login(payload);
      loginUserAction(commit, res.data);
    },
    loadLocalLogin({ commit }) {
      const token = localCache.getCache(tokenKey);
      token && commit('changeToken', token);
    }
  }
};

export default userModel;
