const { test, expect } = require('@playwright/test');
const {AuthorizationPage} = require("../pages/auth_page");
const {LocationPage} = require("../pages/locations_page");


let token;
test.use({
    permissions: ['geolocation'],
    // geolocation: { longitude: 43.2220, latitude: 76.8512 },

});

test('should authorize a user with given creds', async ({page}) => {
    const loginPage = new AuthorizationPage(page);
    await loginPage.goto();
    await loginPage.login('nerdjahn@gmail.com', '123456');
    await expect(page.locator("//*[@id='main']/div[1]//div[2]/div[1]/h5")).toHaveText("Личный кабинет");
    const myValue = await page.evaluate(() => {
        return window.localStorage.getItem('user');

    });
    const obj = JSON.parse(myValue);
    token = obj.token;
    console.log(token);
});


test('should create a location', async ({page}) => {
    const locationPage = new LocationPage(page);
    const loginPage = new AuthorizationPage(page);
    await loginPage.goto();
    await loginPage.login('nerdjahn@gmail.com', '123456');
    await expect(page.locator("//*[@id='main']/div[1]//div[2]/div[1]/h5")).toHaveText("Личный кабинет");
    await locationPage.gotosettings();
    await locationPage.createlocation();
    console.log(token)
    // await locationPage.deleteLocations(token)
})

