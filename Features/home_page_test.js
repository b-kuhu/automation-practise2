const assert = require('assert');
Feature('home page');

Scenario('home page with three sliders only', async({ I }) => {
    I.amOnPage('/');
    I.click('#menu-item-40');
    I.waitForNavigation();
    I.click('//img[@title="Automation Practice Site"]');
    I.waitForNavigation();
    let numOfSliders = await I.grabNumberOfVisibleElements('//img[@data-x="50"]');
    console.log(numOfSliders==3);
    await assert.equal(numOfSliders,3);    
});
Scenario('home page with three arrivals only',async({I})=>{
    I.amOnPage('/');
    I.click('#menu-item-40');
    I.waitForNavigation();
    I.click('//img[@title="Automation Practice Site"]');
    let numOfArrivals = await I.grabNumberOfVisibleElements('//img[@width="300"]');
    await assert.equal(numOfArrivals,3);
})
Scenario('Images in arrivals should navigate and check description',async({I})=>{
    I.amOnPage('/');
    I.click('#menu-item-40');
    I.waitForNavigation();
    I.click('//img[@title="Automation Practice Site"]');
    I.waitForNavigation();
    let numOfArrivals = await I.grabNumberOfVisibleElements('//img[@width="300"]');
    console.log(numOfArrivals==3);
    await assert.equal(numOfArrivals,3);
    I.click('//img[@title="Selenium Ruby"]');
    I.waitForNavigation();
    I.see('ADD TO BASKET');
    I.see('DESCRIPTION');
    I.click('//a[@href="#tab-description"]');
    I.see('Product Description');
})
Scenario('Arrivals-Add to basket-Coupon value < 450',async({I})=>{
    I.amOnPage('/');
    I.click('#menu-item-40');
    I.waitForNavigation();
    I.click('//img[@title="Automation Practice Site"]');
    I.waitForNavigation();
    let numOfArrivals = await I.grabNumberOfVisibleElements('//img[@width="300"]');
    console.log(numOfArrivals==3);
    await assert.equal(numOfArrivals,3);
    I.click('//img[@title="Mastering JavaScript"]');
    I.waitForNavigation();
    I.see('ADD TO BASKET');
    I.click('//button');
    I.waitForNavigation();
    I.click('//a[@title="View your shopping cart"]');
    I.waitForNavigation();
    const price = await I.grabAttributeFrom('//td[@data-title="Price"]');
    I.fillField('Coupon code','krishnasakinala');
    if(price>450){
       I.click('//input[@value="Apply Coupon"]');
       I.see('Coupon code applied successfully.');
    } 
})
Scenario('Home-Arrivals-Add to Basket-Items-Remove book',async({I})=>{
        I.amOnPage('/');
        I.click('#menu-item-40');
        I.waitForNavigation();
        I.click('//img[@title="Automation Practice Site"]');
        I.waitForNavigation();
        let numOfArrivals = await I.grabNumberOfVisibleElements('//img[@width="300"]');
        console.log(numOfArrivals==3);
        I.click('//img[@title="Mastering JavaScript"]');
        I.waitForNavigation();
        I.see('ADD TO BASKET');
        I.click('//button');
        I.waitForNavigation();
        I.click('//a[@title="View your shopping cart"]');
        I.waitForNavigation();
        I.click('//a[@title="Remove this item"]');
        I.waitForText('Mastering JavaScript removed.');
})
