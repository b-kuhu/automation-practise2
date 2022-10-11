// const assert = require('assert');
// const homePage = require('../pages/home_page_test.js');

// Feature('home page');

// Scenario('home page with three sliders only', async({ I }) => {
//     I.amOnPage('/');
//     I.click(homePage.locators.shop);
//     I.waitForNavigation();
//     I.click(homePage.locators.home);
//     I.waitForNavigation();
//     let numOfSliders = await I.grabNumberOfVisibleElements(homePage.locators.slider);
//     console.log(numOfSliders==3);
//     await assert.equal(numOfSliders,3);    
// });
// Scenario('home page with three arrivals only',async({I})=>{
//     I.amOnPage('/');
//     I.click(homePage.locators.shop);
//     I.waitForNavigation();
//     I.click(homePage.locators.home);
//     let numOfArrivals = await I.grabNumberOfVisibleElements(homePage.locators.arrival);
//     await assert.equal(numOfArrivals,3);
// })
// Scenario('Images in arrivals should navigate and check description',async({I})=>{
//     I.amOnPage('/');
//     I.click(homePage.locators.shop);
//     I.waitForNavigation();
//     I.click(homePage.locators.home);
//     let numOfArrivals = await I.grabNumberOfVisibleElements(homePage.locators.arrival);
//     await assert.equal(numOfArrivals,3);
//     I.click(homePage.locators.selenium);
//     I.waitForNavigation();
//     I.see('ADD TO BASKET');
//     I.see('DESCRIPTION');
//     I.click(homePage.locators.description);
//     I.see('Product Description');
// })
// Scenario('Arrivals-Add to basket-Coupon value < 450',async({I})=>{
//     I.amOnPage('/');
//     I.click(homePage.locators.shop);
//     I.waitForNavigation();
//     I.click(homePage.locators.home);
//     I.waitForNavigation();
//     let numOfArrivals = await I.grabNumberOfVisibleElements(homePage.locators.arrival);
//     console.log(numOfArrivals==3);
//     await assert.equal(numOfArrivals,3);
//     I.click(homePage.locators.javascript);
//     I.waitForNavigation();
//     I.see('ADD TO BASKET');
//     I.click(homePage.locators.addToBasket);
//     I.waitForNavigation();
//     I.click(homePage.locators.viewCart);
//     I.waitForNavigation();
//     const price = await I.grabAttributeFrom(homePage.locators.price);
//     I.fillField('Coupon code','krishnasakinala');
//     if(price>450){
//        I.click(homePage.locators.applyCoupon);
//        I.see('Coupon code applied successfully.');
//     } 
// })
// Scenario('Home-Arrivals-Add to Basket-Items-Remove book',async({I})=>{
//         I.amOnPage('/');
//         I.click(homePage.locators.shop);
//         I.waitForNavigation();
//         I.click(homePage.locators.home);
//         I.waitForNavigation();
//         let numOfArrivals = await I.grabNumberOfVisibleElements(homePage.locators.arrival);
//         console.log(numOfArrivals==3);
//         I.click(homePage.locators.javascript);
//         I.waitForNavigation();
//         I.see('ADD TO BASKET');
//         I.click(homePage.locators.addToBasket);
//         I.waitForNavigation();
//         I.click(homePage.locators.viewCart);
//         I.waitForNavigation();
//         I.click(homePage.locators.removeFromBasket);
//         I.waitForText('Mastering JavaScript removed.');
// })
