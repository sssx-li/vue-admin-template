import 'normalize.css';
import '@/assets/styles/index.scss';
import { createPinia } from 'pinia';

import App from './App.vue';
import router from './router';
const pinia = createPinia();
import { globalRegister } from '@/registers/index';
import { useStore } from './store';

async function mount() {
  const app = createApp(App);
  app.use(pinia);
  const store = useStore();
  await store.user.loadLocalLogin();

  app.use(router);
  app.use(globalRegister);
  app.mount('#app');
}

mount();
