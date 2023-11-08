const { test, expect } = require('@playwright/test');
const {AuthorizationPage} = require("../pages/auth_page");
const {LocationPage} = require("../pages/locations_page");


test.use({
    permissions: ['geolocation'],
});

test('should authorize a user with given creds', async ({page}) => {
    const loginPage = new AuthorizationPage(page);
    await loginPage.goto();
    await loginPage.login('nerdjahn@gmail.com', '123456');
});


test('should create a location', async ({page}) => {
    const locationPage = new LocationPage(page);
    const loginPage = new AuthorizationPage(page);
    await loginPage.goto();
    await loginPage.login('nerdjahn@gmail.com', '123456');
    await locationPage.gotosettings();
    await locationPage.createlocation();
    let token = await locationPage.getToken();
    await locationPage.deleteLocations(token);
})

