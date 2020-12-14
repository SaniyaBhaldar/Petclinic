import { Given, When, Then } from "cucumber";
import { LoginPageObjects } from "../pageObjects/LoginPageObjects";
import { HomePageObjects } from "../pageObjects/HomePageObjects";
import { browser, by, element, ElementFinder, protractor } from "protractor"
import TestData from "../TestData/userData";
import { PetTypesPageObjects } from "../pageObjects/PetTypesPageObjects";


const chai = require("chai").use(require("chai-as-promised"));
const expect = chai.expect;

var { setDefaultTimeout } = require('cucumber');
setDefaultTimeout(70 * 1000);

let HomeObj = new HomePageObjects();
let logObj = new LoginPageObjects();
let petTypesObj = new PetTypesPageObjects();

When('User clicks on PetTypes tab', async function () {
    await HomeObj.PetTypes.click();
    await console.log("User clicks");
});

Then('Pet Types title should be displayed', async function () {
    let pageTitle = await petTypesObj.pageTitle.getText();
    await console.log(" PageTitle as : " + pageTitle);
    await expect("Pet Types").to.equal(pageTitle);
});

Given('User is on PetTypes tab page', async function () {
    await petTypesObj.pageTitle.isDisplayed().then(async function (result) {
        await expect(true).to.equal(result);
    });
    });

    Then('name field should be displayed', function () {

    });

    Then('On Pet Types page Add & Home button texts should be displayed', function () {

    });


/*Given('User is on Petclinic home page', async function () {
    await logObj.WelcomeMsg.isDisplayed().then(async function (result) {
        await expect(true).to.equal(result);
    });
});


When('User clicks on PetTypes tab', {timeout: 2 * 5000}, async function () {
    await HomeObj.PetTypes.click();
    await console.log("User clicks");

});

Then('Pet types title should be displayed',{timeout: 5 * 5000}, function () {

    let pageTitle = petTypesObj.pageTitle.getText();
    console.log(" PageTitle as : " + pageTitle);
    expect("Pet Types").to.equal(pageTitle);
    browser.sleep(5000);

});

Then('name field should be displayed',{timeout: 5 * 5000},async function () {

    let nameField = await petTypesObj.Name.getText();
    await console.log(" Name Field : " + nameField);
    await expect("Name").to.equal(nameField);
    browser.sleep(5000);

});



Then('On Pet Types page Add & Home button texts should be displayed', async function () {

    let addButton = await petTypesObj.addButton.getText();
    let HomeButton = await petTypesObj.HomeButton.getText();
    await console.log(" Add Button : " + addButton);
    await console.log(" Home Button : " + HomeButton);
    await expect("Add").to.equal(addButton);
    await expect("Home").to.equal(HomeButton);


});
*/

