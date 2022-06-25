/// <reference types="vitest" />

import { defineConfig } from 'vite';
import vue from '@vitejs/plugin-vue';
import Components from 'unplugin-vue-components/vite';
import Pages from 'vite-plugin-pages';
import Unocss from 'unocss/vite';

// https://vitejs.dev/config/
export default defineConfig({
  server: {
    port: 5173,
  },
  plugins: [vue(), Components(), Pages(), Unocss()],

  // Vitest config
  // @see https://vitest.dev/guide/#configuring-vitest
  // FIXME: types don't work with Vite 3
  test: {
    environment: 'happy-dom',
  },
});
