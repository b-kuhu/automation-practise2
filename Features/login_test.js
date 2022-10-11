var assert = require("assert");
const loginUser = require('../pages/login_test.js');
Feature("login");

Scenario("Login with valid username and password", async ({ I }) => {
  I.amOnPage("/");
  I.click(loginUser.locators.myAccount);
  I.waitForNavigation();
  I.fillField(loginUser.locators.email, "kuhu@gmail.com");
  I.fillField(loginUser.locators.password, "Kuhubhat*28");
  I.click(loginUser.locators.login);
  I.wait(3);
});

Scenario(
  "Login with incorrect username and incorrect password",
  async ({ I }) => {
    I.amOnPage("/");
    I.click(loginUser.locators.myAccount);
    I.waitForNavigation();
    I.fillField(loginUser.locators.email, "kb@gmail.com");
    I.fillField(loginUser.locators.password, "12345");
    I.click(loginUser.locators.login);
    I.waitForNavigation();
    const result =  await I.grabTextFrom(loginUser.locators.error);
    console.log(result);
    assert.equal('Error: the password you entered for the username kb@gmail.com is incorrect. Lost your password?',result);
  }
);

Scenario("Login with correct username and empty password",async({I})=>{
    I.amOnPage("/");
    I.click(loginUser.locators.myAccount);
    I.waitForNavigation();
    I.fillField(loginUser.locators.email, "kb@gmail.com");
    I.click(loginUser.locators.login);
    I.waitForNavigation();
    const result =  await I.grabTextFrom(loginUser.locators.error);
    console.log(result);
    assert.equal('Error: Password is required.',result);

});

Scenario("Login with empty username and valid password",async({I})=>{
    I.amOnPage("/");
    I.click(loginUser.locators.myAccount);
    I.waitForNavigation();
    I.fillField(loginUser.locators.password, "Kuhubhat*28");
    I.click(loginUser.locators.login);
    I.waitForNavigation();
    const result =  await I.grabTextFrom(loginUser.locators.error);
    console.log(result);
    console.log(assert.equal('Error: Username is required.',result));
})

Scenario("Login with empty username and empty password",async({I})=>{
    I.amOnPage("/");
    I.click(loginUser.locators.myAccount);
    I.waitForNavigation();
    I.click(loginUser.locators.login);
    const result =  await I.grabTextFrom(loginUser.locators.error);
    console.log(result);
    console.log(assert.equal('Error: Username is required.',result));
})

Scenario("Login password should be masked",async({I})=>{
    I.amOnPage("/");
    I.click(loginUser.locators.myAccount);
    I.waitForNavigation();
    I.fillField(loginUser.locators.email, "kuhu@gmail.com");
    I.fillField(loginUser.locators.password, secret("Kuhubhat*28"));
    I.click(loginUser.locators.login);
    I.waitForNavigation();
    I.see('Hello');
})

Scenario("Login handles case sensitive", async ({ I }) => {
  I.amOnPage("/");
  I.click(loginUser.locators.myAccount);
  I.waitForNavigation();
  I.fillField(loginUser.locators.email, "KUHU@gmail.com");
  I.fillField(loginUser.locators.password, secret("KuhuBHAT*28"));
  I.click(loginUser.locators.login);
  I.waitForNavigation();
  const result = await I.grabTextFrom(loginUser.locators.error);
  console.log(result);
  assert.equal(
    'Error: the password you entered for the username KUHU@gmail.com is incorrect. Lost your password?',
      result); 
});


