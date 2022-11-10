const { Given, When, Then } = require('@wdio/cucumber-framework');

const LoginPage = require('../pageobjects/login.page');
const SecurePage = require('../pageobjects/secure.page');
const AddRemoveElementsPage = require('../pageobjects/add_remove_elements.page');
const CheckboxesPage = require('../pageobjects/checkboxes.page');
const DropdownPage = require('../pageobjects/dropdown.page');

const assert = require('assert');
const { notEqual } = require('assert');

const pages = {
    login: LoginPage,
    addRemoveElements: AddRemoveElementsPage,
    checkboxes: CheckboxesPage,
    dropdown: DropdownPage
}

Given(/^I am on the (\w+) page$/, async (page) => {
    await pages[page].open()
});

When(/^I login with (\w+) and (.+)$/, async (username, password) => {
    await LoginPage.login(username, password);
});

When(/^I login with (\w+) username/, async (username) => {
    await LoginPage.loginOnleUN(username);
});

When(/^I login with (\w+) password/, async (password) => {
    await LoginPage.loginOnleP(password);
});

When("I click on Login button", async () => {
    await LoginPage.loginclk();
});

When("I click on the Add Element button", async () => {
    await AddRemoveElementsPage.addElementclk();
});

When("I double click on the Add Element button", async () => {
    await AddRemoveElementsPage.addElementDobleclk();
});

When("I click on the Delete button", async () => {
    await AddRemoveElementsPage.deleteclk();
});

When("I double click on the Delete button", async () => {
    await AddRemoveElementsPage.deleteDobleclk();
});

Then(/^I should see a flash message saying (.*)$/, async (message) => {
    await expect(SecurePage.flashAlert).toBeExisting();
    await expect(SecurePage.flashAlert).toHaveTextContaining(message);
});

Then("I should see a flash message {string}", async (message) => {
    await expect(SecurePage.flashAlert).toBeExisting();
    await expect(SecurePage.flashAlert).toHaveTextContaining(message);
});

Then("I should see the Delete button", async () => {
    await AddRemoveElementsPage.deleteElementIsClk();
});

Then("I should not see the Delete button", async () => {
    assert.equal(await AddRemoveElementsPage.deleteElementIsClk(), undefined);
});

/*
    Checkboxes Page
*/

Then("I should see start checked checkboxes", async () => {
    await expect(await CheckboxesPage.checkbox2).toBeChecked();
});

When("I click on the checkbox1", async () => {
    await CheckboxesPage.checkbox1clk();
});

When("I click on the checkbox2", async () => {
    await CheckboxesPage.checkbox2clk();
});

Then("I should see checked checkbox1", async () => {
    await expect(await CheckboxesPage.checkbox1).toBeChecked();
});

Then("I should see checked checkbox1 and checkbox2", async () => {
    await expect(await CheckboxesPage.checkbox1).toBeChecked();
    await expect(await CheckboxesPage.checkbox2).toBeChecked();
});

/*
    Dropdown Page
*/
When("I select options 1", async () => {
    await DropdownPage.Op1Selected();
});

When("I select options 2", async () => {
    await DropdownPage.Op2Selected();
});

Then("I should see selected options", async () => {
    await DropdownPage.checkOp1Selected();
    await DropdownPage.checkOp2Selected();
});

Then("I should see selected options 1", async () => {
    await DropdownPage.Op1Selected();
});

Then("I should see selected options 2", async () => {
    await DropdownPage.Op2Selected();
});