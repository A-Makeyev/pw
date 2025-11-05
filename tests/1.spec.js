import { test } from '@playwright/test';
import LoginPage from '../pages/login';


test('Login', async ({ page }) => {
  const loginPage = new LoginPage(page);
  await loginPage.goto();
  await loginPage.login(process.env.STANDARD_USER, process.env.PASSWORD);
});

test('Get /', async ({ page }) => {
  const response = await page.request.get('https://jsonplaceholder.typicode.com/todos/1');
  console.log(await response.text());

  const postResponse = await page.request.post('https://jsonplaceholder.typicode.com/posts', {
    data: {
      title: 'foo',
      body: 'bar',
      userId: 1,
    },
  });
  console.log(await postResponse.text());
});
