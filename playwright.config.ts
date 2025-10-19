import { defineConfig } from '@playwright/test';

export default defineConfig({
  use: { baseURL: 'http://127.0.0.1:3000' },
  webServer: {
    command: 'pnpm -C apps/site-renderer build && pnpm -C apps/site-renderer exec node .next/standalone/server.js',
    url: 'http://127.0.0.1:3000',
    timeout: 120_000,
    reuseExistingServer: !process.env.CI,
  },
});
