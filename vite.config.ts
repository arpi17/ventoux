/// <reference types="vitest" />

import { defineConfig, loadEnv } from 'vite';
import { configDefaults } from 'vitest/config';
import vue from '@vitejs/plugin-vue';
import Components from 'unplugin-vue-components/vite';
import Pages from 'vite-plugin-pages';
import Unocss from 'unocss/vite';

// https://vitejs.dev/config/
export default defineConfig(({ mode }) => {
  // Only loads env vars prefixed with `VITE_`
  const env = loadEnv(mode, process.cwd());
  const port = Number(env.VITE_PORT) || 5173;

  return {
    server: {
      port,
    },
    plugins: [vue(), Components(), Pages(), Unocss()],

    // Vitest config
    // @see https://vitest.dev/guide/#configuring-vitest
    // FIXME: the types are not correct
    test: {
      environment: 'happy-dom',
      exclude: [...configDefaults.exclude, 'e2e/*'],
    },
  };
});
