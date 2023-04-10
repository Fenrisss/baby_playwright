const { expect } = require('@playwright/test');
const selectors = require("../selectors/auth_selectors")


exports.LocationPage = class LocationPage {
    constructor(page) {
        this.page = page;
    };
    async gotosettings() {
        await this.page.locator('a[href="/settings"]').click();
    };
    async create(email, password) {
        await this.page.getByText(selectors.buttons.login).click();
        await this.page.locator(selectors.fields.email).type(email);
        await this.page.locator(selectors.fields.password).type(password);
        await this.page.locator(selectors.buttons.continue).click();
    };


};
