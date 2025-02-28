import { defineConfig } from "@playwright/test";

export default defineConfig({
  testDir: "./tests/features", // <<< Указываем путь к .feature файлам
  testMatch: "**/*.feature", // <<< Указываем Playwright искать .feature файлы
  use: { headless: false, viewport: { width: 1280, height: 720 } },
  projects: [
    { name: "chromium", use: { browserName: "chromium" } },
    {
      name: "mobile",
      use: { browserName: "chromium", viewport: { width: 375, height: 812 } },
    },
  ],
  reporter: [["html", { open: "never" }]], // <<< Добавляем отчет о тестах
});
