import { createApp } from 'vue';
import { createRouter, createWebHistory } from 'vue-router';
import { createHead } from '@vueuse/head';
import App from './App.vue';
import routes from '~pages';
import 'uno.css';

// Router
// https://router.vuejs.org/guide/#javascript
const router = createRouter({
  history: createWebHistory(),
  routes,
});

// Head manager
// https://github.com/vueuse/head#usage
const head = createHead();

// Creating the Vue Application
// https://vuejs.org/guide/essentials/application.html#creating-a-vue-application
createApp(App).use(router).use(head).mount('#app');
