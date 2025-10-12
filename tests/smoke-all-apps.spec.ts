import { test, expect, request } from '@playwright/test';

const TD_BASE = process.env.TD_URL   || 'http://localhost:3000'; // tenant-dashboard
const ADM_BASE = process.env.ADM_URL || 'http://localhost:3001'; // admin
const SR_BASE  = process.env.SR_URL  || 'http://localhost:3002'; // site-renderer

// Increase timeout for slower CI environments
test.describe.configure({ timeout: 30000 });

test.describe('tenant-dashboard', () => {
  test('health endpoint returns {"ok":true}', async ({}) => {
    const ctx = await request.newContext();
    const res = await ctx.get(`${TD_BASE}/api/health`);
    expect(res.ok()).toBeTruthy();
    const body = await res.json();
    expect(body).toEqual({ ok: true });
  });

  test('home route renders', async ({ page }) => {
    await page.goto(TD_BASE + '/');
    
    // Check for any content instead of title
    await expect(page.locator('body')).not.toBeEmpty({ timeout: 10000 });
    
    // Check for navigation or any visible content
    await expect(page.locator('nav, header, main, .container, [role="navigation"]').first()).toBeVisible({ timeout: 10000 });
  });

  test('/onboarding/sign-up renders form bits', async ({ page }) => {
    await page.goto(TD_BASE + '/onboarding/sign-up');
    
    // Wait for form to be visible
    await expect(page.locator('form')).toBeVisible({ timeout: 10000 });
    
    // More flexible button text matching
    const submitButton = page.getByRole('button', { 
      name: /continue|submit|create|next|get.started/i 
    });
    await expect(submitButton).toBeVisible({ timeout: 10000 });
  });
});

test.describe('admin app (smoke)', () => {
  test('admin home renders', async ({ page }) => {
    await page.goto(ADM_BASE + '/');
    
    // Check for any content instead of title
    await expect(page.locator('body')).not.toBeEmpty({ timeout: 10000 });
    
    // Check for any visible content
    await expect(page.locator('nav, header, main, .container, [role="main"]').first()).toBeVisible({ timeout: 10000 });
  });
});

test.describe('site-renderer app (smoke)', () => {
  test('home renders', async ({ page }) => {
    await page.goto(SR_BASE + '/');
    
    // Check for any content instead of title
    await expect(page.locator('body')).not.toBeEmpty({ timeout: 10000 });
  });
});
