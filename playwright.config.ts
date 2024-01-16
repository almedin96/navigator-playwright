import { defineConfig } from '@playwright/test';

export default defineConfig({
  timeout: 20 * 1000,
  globalSetup: require.resolve('./global-setup.ts'),
  use: {
    screenshot: 'only-on-failure',
  },
});
