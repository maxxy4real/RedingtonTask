import { test, expect } from '@playwright/test';

test('has title', async ({ page }) => {
  await page.goto('http://localhost:3000/');

  // Expect a title "to contain" a substring.
  await expect(page).toHaveTitle(/Create Next App/);
});

test('documentation button', async ({ page }) => {
  await page.goto('http://localhost:3000');

  // Click the docs link
  await page.getByRole('link', { name: 'Read our docs' }).click();

  // Expects page to have a heading with the name of Introduction.
  await expect(page.getByRole('heading', { name: 'Introduction' })).toBeVisible();
});
