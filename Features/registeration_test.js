const assert=require('assert');
const registerUser = require('../pages/registeration_test.js');
Feature('registeration');

Scenario('registeration sign in', ({ I }) => {
    I.amOnPage("/");
    I.click(registerUser.locators.myAccount);
    I.waitForNavigation();
    I.fillField(registerUser.locators.email,'deepbhat@gmail.com');
    I.fillField(registerUser.locators.password,'Sushbhat*28');
    I.click(registerUser.locators.register);
    I.waitForNavigation();
    I.see('Hello deepbhat');
    I.click(registerUser.locators.home);
    I.waitForNavigation();
    I.seeCurrentUrlEquals('https://practice.automationtesting.in/');
});

Scenario('registeration with empty Email-id', async({ I }) => {
    I.amOnPage("/");
    I.click(registerUser.locators.myAccount);
    I.waitForNavigation();
    I.fillField(registerUser.locators.password,'Sushbhat*28');
    I.click(registerUser.locators.register);
    I.wait(3);
    const result =  await I.grabTextFrom(registerUser.locators.error);
    console.log(result);
    assert.equal('Error: Please provide a valid email address.',result)
});

Scenario('registeration with empty password', async({ I }) => {
    I.amOnPage("/");
    I.click(registerUser.locators.myAccount);
    I.waitForNavigation();
    I.fillField(registerUser.locators.email,'kuhub@gmail.com');
    I.click(registerUser.locators.register);
    I.wait(3);
    const result =  await I.grabTextFrom(registerUser.locators.error);
    console.log(result);
    assert.equal('Error: Please enter an account password.',result)
});

Scenario('registeration with empty email and password', async({ I }) => {
    I.amOnPage("/");
    I.click(registerUser.locators.myAccount);
    I.waitForNavigation();
    I.click(registerUser.locators.register);
    I.wait(3);
    const result =  await I.grabTextFrom(registerUser.locators.error);
    console.log(result);
    assert.equal('Error: Please provide a valid email address.',result)
});
