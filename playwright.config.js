import { defineConfig } from '@playwright/test';
export default defineConfig({
  use: {
    headless: true,
    baseURL: 'https://ovago.com/en-us/',
  },
});
