import { createApp } from 'vue';
import 'normalize.css';
import '@/assets/styles/index.scss';

import App from './App.vue';
import router from './router';
import store from './store';

import { globalRegister } from '@/global/index';

createApp(App).use(globalRegister).use(store).use(router).mount('#app');
