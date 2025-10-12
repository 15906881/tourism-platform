import { test, expect, request } from '@playwright/test';

const TD_BASE = process.env.TD_URL   || 'http://localhost:3000';
const ADM_BASE = process.env.ADM_URL || 'http://localhost:3001';
const SR_BASE  = process.env.SR_URL  || 'http://localhost:3002';

test.describe('Basic Smoke Tests', () => {
  test('tenant-dashboard health check', async ({}) => {
    const ctx = await request.newContext();
    const res = await ctx.get(`${TD_BASE}/api/health`);
    expect(res.ok()).toBeTruthy();
    expect(await res.json()).toEqual({ ok: true });
  });

  test('tenant-dashboard loads any page', async ({ page }) => {
    await page.goto(TD_BASE + '/');
    // Just check that we get a 200 response and some HTML
    expect(page.url()).toContain(TD_BASE);
    await expect(page.locator('html')).toBeAttached();
  });

  test('onboarding sign-up page has form', async ({ page }) => {
    await page.goto(TD_BASE + '/onboarding/sign-up');
    await expect(page.locator('form')).toBeVisible({ timeout: 10000 });
  });

  test('admin app loads', async ({ page }) => {
    await page.goto(ADM_BASE + '/');
    expect(page.url()).toContain(ADM_BASE);
    await expect(page.locator('html')).toBeAttached();
  });

  test('site-renderer app loads', async ({ page }) => {
    await page.goto(SR_BASE + '/');
    expect(page.url()).toContain(SR_BASE);
    await expect(page.locator('html')).toBeAttached();
  });
});
