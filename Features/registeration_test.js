// const assert=require('assert');
// Feature('registeration');

// Scenario('registeration sign in', ({ I }) => {
//     I.amOnPage("/");
//     I.click("#menu-item-50");
//     I.waitForNavigation();
//     I.fillField('//input[@id="reg_email"]','deepbhat@gmail.com');
//     I.fillField('//input[@id="reg_password"]','Sushbhat*28');
//     I.click("//input[@name='register']");
//     I.waitForNavigation();
//     I.see('Hello deepbhat');
//     I.click('//a[@title="Automation Practice Site"]');
//     I.waitForNavigation();
//     I.seeCurrentUrlEquals('https://practice.automationtesting.in/');
// });

// Scenario('registeration with empty Email-id', async({ I }) => {
//     I.amOnPage("/");
//     I.click("#menu-item-50");
//     I.waitForNavigation();
//     I.fillField('//input[@id="reg_password"]','Sushbhat*28');
//     I.click("//input[@name='register']");
//     I.wait(3);
//     const result =  await I.grabTextFrom('(//li)[7]');
//     console.log(result);
//     assert.equal('Error: Please provide a valid email address.',result)
// });

// Scenario('registeration with empty password', async({ I }) => {
//     I.amOnPage("/");
//     I.click("#menu-item-50");
//     I.waitForNavigation();
//     I.fillField('//input[@id="reg_email"]','kuhub@gmail.com');
//     I.click("//input[@name='register']");
//     I.wait(3);
//     const result =  await I.grabTextFrom('(//li)[7]');
//     console.log(result);
//     assert.equal('Error: Please enter an account password.',result)
// });

// Scenario('registeration with empty email and password', async({ I }) => {
//     I.amOnPage("/");
//     I.click("#menu-item-50");
//     I.waitForNavigation();
//     I.click("//input[@name='register']");
//     I.wait(3);
//     const result =  await I.grabTextFrom('(//li)[7]');
//     console.log(result);
//     assert.equal('Error: Please provide a valid email address.',result)
// });
