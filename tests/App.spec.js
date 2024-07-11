const { test, expect } = require('@playwright/test');

test('submits form and displays response', async ({ page }) => {
  await page.goto('http://localhost:3000');

  await page.fill('textarea', 'Test input');
  await page.click('button:has-text("Submit")');

  const response = await page.locator('text=Test response');
  await expect(response).toBeVisible();
});
