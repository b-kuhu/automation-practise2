var assert = require('assert');
Feature('login');

// Scenario('validate user', async ({ I }) => {
// I.amOnPage('/');
// I.click('#menu-item-50');
// I.waitForNavigation();
// I.fillField('//input[@id="username"]','kuhu@gmail.com');
// I.fillField('//input[@id="password"]','12345');
// I.click('//input[@name="login"]');
// I.wait(3);
// const result =  await I.grabTextFrom('(//li)[7]');
// console.log(result);
// console.log(assert.equal('Error: the password you entered for the username kuhu@gmail.com is incorrect. Lost your password?',result));

// });

Scenario('test Home Page',async ({I})=>{
    I.amOnPage('https://practice.automationtesting.in/');
    I.click('#menu-item-40');
    I.waitForNavigation();
    I.selectOption('//select[@name="orderby"]','Sort by popularity');
    
})