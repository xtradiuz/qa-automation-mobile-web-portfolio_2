const {test, expect} = require ('@playwright/test');

test('Homepage loads successfully on mobile', async ({page}) => {
    await page.goto('/');

    await expect(page).toHaveTitle(/Automation Exercise/);
    await expect(page.locator('body')).toContainText('AutomationExercise');    
});