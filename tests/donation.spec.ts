import { test, expect } from '@playwright/test';
const testURL = 'https://qa-interview-test-org-467719.churchcenter.com/giving'

test('donation page assertions', async ({ page }) => {
  await page.goto(testURL);

  // Expect a title "to contain" the substring "Donate - QA Interview Test Org".
  await expect(page).toHaveTitle("Donate - QA Interview");

});

test('top navigation', async ({ page }) => {
  await page.goto(testURL);
  
  // Expects page to have a heading with the name of Installation.
  await expect(page.getByRole('link', { name: 'Log in' })).toBeVisible();
  await expect(page.getByRole('link', { name: 'Home' })).toBeVisible();
  await expect(page.getByRole('link', { name: 'Give' })).toBeVisible();
  await expect(page.getByRole('link', { name: 'QA Interview' })).toBeVisible();
  
});
test('give One time', async ({ page }) => {
  await page.goto(testURL);
  await expect(page.getByRole('heading', { name: 'Give'})).toBeVisible();
 
  await page.getByPlaceholder('0').click();
  await page.getByPlaceholder('0').fill('100');
  await page.getByLabel('Frequency').selectOption('One time');
  await page.getByPlaceholder('Email').click();
  await page.getByPlaceholder('Email').fill('patterson@gmail.com');
  await page.getByPlaceholder('First name').click();
  await page.getByPlaceholder('First name').fill('Lindsay')
  await page.getByPlaceholder('Last name').click();
  await page.getByPlaceholder('Last name').fill('Abdou')
  await page.getByRole('button', { name: 'Continue' }).click();
  const stripeFrame = page.frameLocator('iframe').first();
  await page.getByRole('combobox').nth(1).selectOption('visa');
  
  await stripeFrame.getByPlaceholder('1234 1234 1234 1234').fill('4242 4242 4242 4242');
  
  await stripeFrame.getByPlaceholder('MM / YY').fill('12/26');
  await stripeFrame.getByPlaceholder('CVC').fill('345');
  await stripeFrame.getByPlaceholder('12345').fill('12345');

  await page.getByRole('button', { name: 'Give $100 now' }).click();

  await page.waitForURL('https://qa-interview-test-org-467719.churchcenter.com/giving')
  


 
  await page.getByRole('link', { name: 'Add a Mailing Address' }).click();


  // await page.frameLocator('iframe[name="__privateStripeFrame79920"]').getByPlaceholder('1234 1234 1234').click();
  // await page.frameLocator('iframe[name="__privateStripeFrame79920"]').getByPlaceholder('1234 1234 1234').fill('4242 4242 4242 4242');
  // await page.locator(':has-text("p-Input-input")').fill('4242 4242 4242 4242');

  // await page.getByLabel('weekday for donation').selectOption('1');
  // await page.getByLabel('My first donation will be:').selectOption('2024-04-08');
  
  // await page.frameLocator('iframe[name="__privateStripeFrame79920"]').getByPlaceholder('MM / YY').click();
  // await page.frameLocator('iframe[name="__privateStripeFrame79920"]').getByPlaceholder('MM / YY').fill('12 / 26');
  // await page.frameLocator('iframe[name="__privateStripeFrame79920"]').getByPlaceholder('CVC').click();
  // await page.frameLocator('iframe[name="__privateStripeFrame79920"]').getByPlaceholder('CVC').fill('534');
  // await page.frameLocator('iframe[name="__privateStripeFrame79920"]').getByPlaceholder('12345').click();
  // await page.frameLocator('iframe[name="__privateStripeFrame79920"]').getByPlaceholder('12345').fill('12345');
  // await page.getByRole('button', { name: 'Give $100 now' }).click();
  // await page.getByRole('heading', { name: 'Thank you!' }).click();
  
})
