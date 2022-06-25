import { test, expect } from '@playwright/test';

test('basic navigation', async ({ page }) => {
  await page.goto('/');
  await page.locator('a[href="/dashboard"]').click();

  expect(page.url()).toContain('/dashboard');
});
