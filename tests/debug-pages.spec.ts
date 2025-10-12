import { test, expect } from '@playwright/test';

const TD_BASE = process.env.TD_URL   || 'http://localhost:3000';
const ADM_BASE = process.env.ADM_URL || 'http://localhost:3001';

test('debug tenant-dashboard home page', async ({ page }) => {
  await page.goto(TD_BASE + '/');
  
  // Wait a bit for content to load
  await page.waitForTimeout(2000);
  
  // Get page HTML structure
  const html = await page.content();
  console.log('=== TENANT-DASHBOARD HOME PAGE STRUCTURE ===');
  console.log('Title:', await page.title());
  console.log('Body content length:', (await page.textContent('body'))?.length);
  console.log('All elements:', await page.$$eval('*', els => els.map(el => el.tagName.toLowerCase())));
  
  // Take screenshot for visual inspection
  await page.screenshot({ path: 'debug-tenant-dashboard.png' });
});

test('debug admin home page', async ({ page }) => {
  await page.goto(ADM_BASE + '/');
  
  // Wait a bit for content to load
  await page.waitForTimeout(2000);
  
  // Get page HTML structure
  const html = await page.content();
  console.log('=== ADMIN HOME PAGE STRUCTURE ===');
  console.log('Title:', await page.title());
  console.log('Body content length:', (await page.textContent('body'))?.length);
  console.log('All elements:', await page.$$eval('*', els => els.map(el => el.tagName.toLowerCase())));
  
  // Take screenshot for visual inspection
  await page.screenshot({ path: 'debug-admin.png' });
});
