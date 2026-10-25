import { When, Then } from '@cucumber/cucumber';
import { expect, Locator, Page } from '@playwright/test';

// @TC2790524 - Initiate Event button state after Event #1 approval
// Written in Playwright style. "this.page" must come from your World / Hooks class.
// Every line marked ">>> CHANGE" needs your real value or locator.

let currentButton: Locator;

When(
  'Maker logs in and selects a deal with deal status {string}',
  async function (dealStatus: string) {
    const page: Page = this.page;

    // >>> CHANGE 1: real application URL
    await page.goto('https://your-app-url');
    // >>> CHANGE 2: real login locators and Maker credentials
    await page.fill('#username', 'maker_user');
    await page.fill('#password', 'maker_password');
    await page.click('#loginButton');

    // >>> CHANGE 3: real locator of the deal row in the deal list
    await page.locator('tr', { hasText: dealStatus }).first().click();
  }
);

Then('user is on the {string} tab', async function (tabName: string) {
  const page: Page = this.page;
  // >>> CHANGE 4: real locator of the active tab
  const activeTab = page.locator('[role="tab"][aria-selected="true"]', { hasText: tabName });
  await expect(activeTab).toBeVisible();
});

When('user locates the {string} button', async function (buttonName: string) {
  const page: Page = this.page;
  // >>> CHANGE 5: real locator of the button (change only if it is not a <button> tag)
  currentButton = page.getByRole('button', { name: buttonName });
  await currentButton.waitFor({ state: 'attached' });
});

Then('the {string} button is visible', async function (buttonName: string) {
  await expect(currentButton, `${buttonName} should be visible`).toBeVisible();
});

Then('the {string} button is enabled', async function (buttonName: string) {
  await expect(currentButton, `${buttonName} should be enabled`).toBeEnabled();
});
