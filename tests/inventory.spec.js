const {test, expect} = require('@playwright/test');
const {LoginPage} = require('../pages/LoginPage');
const constants = require('../data/constants');
const { Inventory } = require('../pages/inventory');

/**
 @type{Inventory}
 */
let inventory;
test.beforeEach(async ({ page }) => {

    loginPage = new LoginPage(page);
  inventory = new Inventory(page);
  await inventory.page.goto(constants.urls.inventory);
});

test('cart badge', async ({ page }) => {
 
  await inventory.addProductToCart(constants.texts.sauceLabsBackpackText);
  await inventory.addProductToCart(constants.texts.sauceLabsBikeLightText);
}); 