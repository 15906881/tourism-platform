import { test, expect } from '@playwright/test';
import AxeBuilder from '@axe-core/playwright';

test.describe('Smoke Tests', () => {
  test('admin app loads and is accessible', async ({ page }) => {
    await page.goto(process.env.BASE_URL_ADMIN!);
    await expect(page).toHaveTitle(/Admin/);
    
    // Accessibility check
    const results = await new AxeBuilder({ page }).analyze();
    expect(results.violations).toEqual([]);
  });

  test('health endpoints respond', async ({ request }) => {
    const response = await request.get(`${process.env.BASE_URL_ADMIN}/api/healthz`);
    expect(response.status()).toBe(200);
  });

  test('tenant dashboard loads', async ({ page }) => {
    await page.goto(process.env.BASE_URL_TENANT_DASHBOARD!);
    await expect(page).toHaveTitle(/Dashboard/);
  });
});
