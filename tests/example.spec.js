// @ts-check
import { test, expect } from '@playwright/test';

test('has title', async ({ page }) => {
  await page.goto('https://playwright.dev/');

  // Expect a title "to contain" a substring.
  await expect(page).toHaveTitle(/Playwright/);
});

test('get started link', async ({ page }) => {
  await page.goto('https://playwright.dev/');

  // Click the get started link.
  await page.getByRole('link', { name: 'Get started' }).click();

  // Expects page to have a heading with the name of Installation.
  await expect(page.getByRole('heading', { name: 'Installation' })).toBeVisible();
});

test('test', async ({ page }) => {
  await page.goto('https://demo.playwright.dev/todomvc/#/');
  await page.getByRole('textbox', { name: 'What needs to be done?' }).click();
  await page.getByRole('textbox', { name: 'What needs to be done?' }).click();
  await page.getByRole('heading', { name: 'todos' }).click();
  await page.locator('html').click();
  await page.locator('html').click();
  await page.getByText('Double-click to edit a todo').click();
  await page.getByText('Created by Remo H. Jansen').click();
  await page.goto('https://demo.playwright.dev/todomvc/#/');
  await page.getByText('This is just a demo of').click();
  await expect(page.getByRole('heading')).toContainText('todos');
});