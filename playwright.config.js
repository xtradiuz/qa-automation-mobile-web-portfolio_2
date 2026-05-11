// @ts-check
const { defineConfig, devices } = require('@playwright/test');

module.exports = defineConfig({
  testDir: './tests',
  fullyParallel: true,

  forbidOnly: !!process.env.CI,
  retries: process.env.CI ? 2 : 0,
  workers: process.env.CI ? 2 : undefined,

  reporter: [
    ['html'],
    ['list']
  ],

  use: {
    baseURL: 'https://automationexercise.com',
    trace: 'on-first-retry',
    screenshot: 'only-on-failure',
    video: 'retain-on-failure',
  },

  projects: [
    {
      name: 'desktop-chrome',
      use: {
        ...devices['Desktop Chrome'],
      },
    },

    {
      name: 'desktop-firefox',
      use: {
        ...devices['Desktop Firefox'],
      },
    },

    {
      name: 'mobile-chrome-pixel-7',
      use: {
        ...devices['Pixel 7'],
      },
    },

    {
      name: 'mobile-safari-iphone-14',
      use: {
        ...devices['iPhone 14'],
      },
    },
  ],
});