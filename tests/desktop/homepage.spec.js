const {test, expect} = require('@playwright/test');

test('homepage loads successfully on desktop', async ({page}) => {
    await page.goto('/');

    await expect(page).toHaveTitle(/Automation Exercise/);
    await expect(page.locator('body')).toContainText('Full-Fledged practice website');
});