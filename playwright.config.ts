import { PlaywrightTestConfig } from '@playwright/test';

const port = process.env.VITE_PORT || 5173;
const baseURL = `http://localhost:${port}`;

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
  testDir: './e2e',
};

export default config;
