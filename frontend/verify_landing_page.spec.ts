import { test, expect } from '@playwright/test';

test('verify landing page', async ({ page }) => {
  await page.goto('http://localhost:3000');
  await expect(page).toHaveTitle(/Kartaro/);
  await page.screenshot({ path: 'frontend/tests-results/landing_page.png' });
});
