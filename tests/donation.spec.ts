import { test, expect } from '@playwright/test';
const testURL = 'https://qa-interview-test-org-467719.churchcenter.com/giving'

test('donation page assertions', async ({ page }) => {
  await page.goto(testURL);

  // Expect a title "to contain" the substring "Donate - QA Interview Test Org".
  await expect(page).toHaveTitle(/Donate - QA Interview Test Org/);

});

test('top navigation', async ({ page }) => {
  await page.goto(testURL);
  
  // Expects page to have a heading with the name of Installation.
  await expect(page.getByRole('link', { name: 'Log in' })).toBeVisible();
  await expect(page.getByRole('link', { name: 'Home' })).toBeVisible();
  await expect(page.getByRole('link', { name: 'Give' })).toBeVisible();
  await expect(page.getByRole('link', { name: 'Interview Test Org' })).toBeVisible();
  await page.getByRole('link', { name: 'Interview Test Org'} ).screenshot({path: 'testingLogo.png'})
});
