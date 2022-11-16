import { createApp } from 'vue';
import 'normalize.css';
import '@/assets/styles/index.scss';

import App from './App.vue';
import router from './router';
import store from './store';
import { globalRegister } from '@/registers/index';
import { useUserStore } from './store/user';

async function mount() {
  const app = createApp(App);
  app.use(store);
  const userStore = useUserStore();
  await userStore.loadLocalLogin();

  app.use(router);
  app.use(globalRegister);
  app.mount('#app');
}

mount();
