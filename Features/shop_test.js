const shopItem = require('../pages/shop_test');
Feature('shop');


Scenario('Sort by popularity', ({ I }) => {
    I.amOnPage('/');
    I.click(shopItem.locators.shop);
    I.waitForNavigation();
    I.selectOption(shopItem.locators.orderby,'Sort by popularity');
});
Scenario('Add to basket-View basket',async({I})=>{
    I.amOnPage('/');
    I.click(shopItem.locators.shop);
    I.waitForNavigation();
    I.click(shopItem.locators.addToBasket);
    I.click(shopItem.locators.viewBasket);
    I.waitForNavigation();
    I.see('Subtotal');
    I.see('Total');
    I.click(shopItem.locators.proceedToCheckout);
    I.waitForNavigation();
    I.see('Billing Details');
    I.see('Additional Information');
    I.fillField(shopItem.locators.firstname,'Kuhu');
    I.fillField(shopItem.locators.lastname,'Bhatnagar');
    I.fillField(shopItem.locators.email,'kuhu@gmail.com');
    I.fillField(shopItem.locators.phone,'9876543210');
    I.fillField(shopItem.locators.address,'Turab Nagar');
    I.fillField(shopItem.locators.city,'Ghaziabad');
    I.fillField(shopItem.locators.postcode,'201001');
    I.click(shopItem.locators.paymentMethod);
    I.click(shopItem.locators.placeOrder);
    I.waitForNavigation();
    I.see('Order Details');
});

Scenario('Add to basket-View basket through item link',async({I})=>{
    I.amOnPage('/');
    I.click(shopItem.locators.shop);
    I.waitForNavigation();
    I.click(shopItem.locators.addToBasket);
    I.click(shopItem.locators.viewBasket);
    I.waitForNavigation();
    I.see('Subtotal');
    I.see('Total');
    I.click(shopItem.locators.proceedToCheckout);
    I.waitForNavigation();
    I.see('Billing Details');
    I.see('Additional Information');
    I.fillField(shopItem.locators.firstname,'Kuhu');
    I.fillField(shopItem.locators.lastname,'Bhatnagar');
    I.fillField(shopItem.locators.email,'kuhu@gmail.com');
    I.fillField(shopItem.locators.phone,'9876543210');
    I.fillField(shopItem.locators.address,'Turab Nagar');
    I.fillField(shopItem.locators.city,'Ghaziabad');
    I.fillField(shopItem.locators.postcode,'201001');
    I.click(shopItem.locators.paymentMethod);
    I.click(shopItem.locators.placeOrder);
    I.waitForNavigation();
    I.see('Order Details');
});