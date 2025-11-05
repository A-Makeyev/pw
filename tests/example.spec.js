import { test, expect } from '@playwright/test';
import LoginPage from '../pages/login';


test('get started link', async ({ page }) => {
  const loginPage = new LoginPage(page);
  await loginPage.goto();
  await loginPage.login(process.env.STANDARD_USER, process.env.PASSWORD);
});
