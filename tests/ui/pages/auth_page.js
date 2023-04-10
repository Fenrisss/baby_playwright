const { expect } = require('@playwright/test');
const selectors = require("../selectors/auth_selectors")


exports.AuthorizationPage = class AuthorizationPage {
    constructor(page) {
        this.page = page;
    };
    async goto() {
        await this.page.goto('https://staging.zymran.com/');
    };
    async login(email, password) {
        await this.page.getByText(selectors.buttons.login).click();
        await this.page.locator(selectors.fields.email).type(email);
        await this.page.locator(selectors.fields.password).type(password);
        await this.page.locator(selectors.buttons.continue).click();
    };


};

