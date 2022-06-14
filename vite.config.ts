/// <reference types="vitest" />

import { defineConfig } from 'vite';
import vue from '@vitejs/plugin-vue';
import Components from 'unplugin-vue-components/vite';
import Unocss from 'unocss/vite';

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [vue(), Components(), Unocss()],

  // Vitest config
  // @see https://vitest.dev/guide/#configuring-vitest
  test: {
    environment: 'happy-dom',
  },
});
