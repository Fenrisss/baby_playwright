const { test, expect } = require('@playwright/test');
const {LocationPage} = require("../pages/locations_page");
const {AuthorizationPage} = require("../pages/auth_page");


describe('Locations cases', () => {
    // let browser;
    // let page;

    before(async () => {
        // browser = await chromium.launch();
        // page = await browser.newPage();

        // Perform the authorization here
        // await page.goto('https://example.com/login');
        // await page.fill('#username', 'myusername');
        // await page.fill('#password', 'mypassword');
        // await page.click('#login-button');
        //
        // // Wait for the login to complete
        // await page.waitForNavigation();
        const loginPage = new AuthorizationPage(page);
        await loginPage.goto();
        await loginPage.login('nerdjahn@gmail.com', '123456');
        await expect(page.locator("//*[@id='main']/div[1]//div[2]/div[1]/h5")).toHaveText("Личный кабинет");




    });

    it('should display the home page', async () => {
        const locationPage = new LocationPage(page);
        await locationPage.gotosettings();
    });


});






