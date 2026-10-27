// @ts-check
const {test, expect} = require('@playwright/test');
const {LoginPage} = require('../pages/LoginPage');
const users = require('../data/user');
const constants = require('../data/constants');

/**
 @type{LoginPage}
 */
let loginPage;
test.beforeEach(async ({ page }) => { 
  loginPage = new LoginPage(page);
  await loginPage.open();
});
// Test cae 1 login scenario
test('User can login with valid Scenario @smoke' , async({page}) => {
  
  await loginPage.login(users.standard_user.username, users.standard_user.password);
  await expect(page).toHaveURL(constants.urls.inventory);
  await expect(page.locator('.title')).toHaveText(constants.texts.productsTitle);

});