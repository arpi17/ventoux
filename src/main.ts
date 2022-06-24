import { createApp } from 'vue';
import { createRouter, createWebHistory } from 'vue-router';
import { createHead } from '@vueuse/head';
import App from './App.vue';
import routes from '~pages';
import 'uno.css';

const router = createRouter({
  history: createWebHistory(),
  routes,
});

const head = createHead();

createApp(App).use(router).use(head).mount('#app');
