const { expect } = require('@playwright/test');
const selectors = require("../selectors/locations_selectors")
const api_locations = require("../../api/locations_api")


exports.LocationPage = class LocationPage {
    constructor(page) {
        this.page = page;
    };
    async gotosettings() {
        await this.page.locator(selectors.buttons.settings).click();
    };

    async createlocation() {
        await this.page.locator(selectors.buttons.locations).click();
        await this.page.locator(selectors.buttons.add).click();
        await this.page.locator(selectors.fields.name).type('Дархан');
        await this.page.locator(selectors.fields.email).type('golub050191@gmail.com');
        await this.page.locator(selectors.fields.phone).type('8 (707) 891 1922');
        await this.page.mouse.dblclick(500, 500);
        await expect(this.page.locator("[name='country']")).toHaveValue('Kazakhstan', {timeout: 30000});
        await this.page.locator(selectors.fields.postcode).type('1234234');
        await this.page.locator(selectors.fields.directionHint).type('You take one step left');
        await this.page.locator(selectors.fields.house_number).type('72');
        await this.page.locator(selectors.buttons.submit).click();
        await this.page.screenshot({ path: 'fullpage.png', fullPage: true });
    };

    async deleteLocations(token) {
        let locationIDs = await api_locations.user_locations_GET(token);
        console.log("the addresses with the following ids are deleted: " + locationIDs);
        await api_locations.user_address_DELETE(token, locationIDs)
    };

    async getToken() {
        const myValue = await this.page.evaluate(() => {
            return window.localStorage.getItem('user');

        });
        const obj = JSON.parse(myValue);
        let token = obj.token;
        return token;
        console.log(token);
    }

};
