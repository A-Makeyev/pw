import { expect } from '@playwright/test';

export default class LoginPage {
    constructor(page) {
        this.page = page;
        this.usernameInput = page.locator('#user-name');
        this.passwordInput = page.locator('#password');
        this.loginButton = page.locator('#login-button');
        this.productTitle = page.locator('//span[@class="title" and text()="Products"]');
    }

    async goto() {
        await this.page.goto('/');
    }

    async login(username, password) {
        await this.usernameInput.fill(username);
        await this.passwordInput.fill(password);
        await this.loginButton.click();
        await expect(this.productTitle).toBeVisible();
    }
}