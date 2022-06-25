import { PlaywrightTestConfig } from '@playwright/test';
import viteConfig from './vite.config';

// FIXME: config can be async
// see https://main.vitejs.dev/config/#async-config
const PORT = viteConfig.server.port || 3000;
const baseURL = `http://localhost:${PORT}`;

const config: PlaywrightTestConfig = {
  webServer: {
    command: 'pnpm dev',
    timeout: 120 * 1000,
    url: baseURL,
    reuseExistingServer: !process.env.CI,
  },
  use: {
    baseURL,
  },
  testDir: './tests',
};

export default config;
