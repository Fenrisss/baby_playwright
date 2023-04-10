const { test, expect } = require('@playwright/test');
const {AuthorizationPage} = require("../pages/auth_page");


test('should authorize a user with given creds', async ({page}) => {
    const loginPage = new AuthorizationPage(page);
    await loginPage.goto();
    await loginPage.login('nerdjahn@gmail.com', '123456');
    await expect(page.locator("//*[@id='main']/div[1]//div[2]/div[1]/h5")).toHaveText("Личный кабинет");

});










//
// test.beforeEach(async ({ page }) => {
//     await page.goto('https://staging.zymran.com/');
//
//
// });
//
//
// test('check authorization', async({page}) =>  {
//     await AuthorizeUser("nerdjahn@gmail.com","123456");
// });