// var assert = require("assert");
// Feature("login");

// Scenario("Login with valid username and password", async ({ I }) => {
//   I.amOnPage("/");
//   I.click("#menu-item-50");
//   I.waitForNavigation();
//   I.fillField('//input[@id="username"]', "kuhu@gmail.com");
//   I.fillField('//input[@id="password"]', "Kuhubhat*28");
//   I.click('//input[@name="login"]');
//   I.wait(3);
// });

// Scenario(
//   "Login with incorrect username and incorrect password",
//   async ({ I }) => {
//     I.amOnPage("/");
//     I.click("#menu-item-50");
//     I.waitForNavigation();
//     I.fillField('//input[@id="username"]', "kb@gmail.com");
//     I.fillField('//input[@id="password"]', "12345");
//     I.click('//input[@name="login"]');
//     I.waitForNavigation();
//     const result =  await I.grabTextFrom('(//li)[7]');
//     console.log(result);
//     assert.equal('Error: the password you entered for the username kb@gmail.com is incorrect. Lost your password?',result);
//   }
// );

// Scenario("Login with correct username and empty password",async({I})=>{
//     I.amOnPage("/");
//     I.click("#menu-item-50");
//     I.waitForNavigation();
//     I.fillField('//input[@id="username"]', "kb@gmail.com");
//     I.click('//input[@name="login"]');
//     I.waitForNavigation();
//     const result =  await I.grabTextFrom('(//li)[7]');
//     console.log(result);
//     assert.equal('Error: Password is required.',result);

// });

// Scenario("Login with empty username and valid password",async({I})=>{
//     I.amOnPage("/");
//     I.click("#menu-item-50");
//     I.waitForNavigation();
//     I.fillField('//input[@id="password"]', "Kuhubhat*28");
//     I.click('//input[@name="login"]');
//     I.waitForNavigation();
//     const result =  await I.grabTextFrom('(//li)[7]');
//     console.log(result);
//     console.log(assert.equal('Error: Username is required.',result));
// })

// Scenario("Login with empty username and empty password",async({I})=>{
//     I.amOnPage("/");
//     I.click("#menu-item-50");
//     I.waitForNavigation();
//     I.click('//input[@name="login"]');
//     const result =  await I.grabTextFrom('(//li)[7]');
//     console.log(result);
//     console.log(assert.equal('Error: Username is required.',result));
// })

// Scenario("Login password should be masked",async({I})=>{
//     I.amOnPage("/");
//     I.click("#menu-item-50");
//     I.waitForNavigation();
//     I.fillField('//input[@id="username"]', "kuhu@gmail.com");
//     I.fillField('//input[@id="password"]', secret("Kuhubhat*28"));
//     I.click('//input[@name="login"]');
//     I.waitForNavigation();
//     I.see('Hello');
// })

// Scenario("Login handles case sensitive", async ({ I }) => {
//   I.amOnPage("/");
//   I.click("#menu-item-50");
//   I.waitForNavigation();
//   I.fillField('//input[@id="username"]', "KUHU@gmail.com");
//   I.fillField('//input[@id="password"]', secret("KuhuBHAT*28"));
//   I.click('//input[@name="login"]');
//   I.waitForNavigation();
//   const result = await I.grabTextFrom("(//li)[7]");
//   console.log(result);
//   assert.equal(
//     'Error: the password you entered for the username KUHU@gmail.com is incorrect. Lost your password?',
//       result); 
// });


