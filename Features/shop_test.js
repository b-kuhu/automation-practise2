Feature('shop');

Scenario('Filter by price functionality',({I})=>{
    I.amOnPage('/');
})
Scenario('Sort by popularity', ({ I }) => {
    I.amOnPage('/');
    I.click('#menu-item-40');
    I.waitForNavigation();
    I.selectOption('//select[@name="orderby"]','Sort by popularity');
});
Scenario('Add to basket-View basket',async({I})=>{
    I.amOnPage('/');
    I.click('#menu-item-40');
    I.waitForNavigation();
    I.click('//a[@data-product_id="180"]');
    I.click('//a[@title="View Basket"]');
    I.waitForNavigation();
    I.see('Subtotal');
    I.see('Total');
    I.click('(//a[@href])[14]');
    I.waitForNavigation();
    I.see('Billing Details');
    I.see('Additional Information');
    I.fillField('//input[@id="billing_first_name"]','Kuhu');
    I.fillField('//input[@id="billing_last_name"]','Bhatnagar');
    I.fillField('//input[@id="billing_email"]','kuhu@gmail.com');
    I.fillField('//input[@id="billing_phone"]','9876543210');
    I.fillField('//input[@name="billing_address_1"]','Turab Nagar');
    I.fillField('//input[@name="billing_city"]','Ghaziabad');
    I.fillField('//input[@name="billing_postcode"]','201001');
    I.click('//input[@id="payment_method_cod"]');
    I.click('//input[@id="place_order"]');
    I.waitForNavigation();
    I.see('Order Details');
});

Scenario('Add to basket-View basket through item link',async({I})=>{
    I.amOnPage('/');
    I.click('#menu-item-40');
    I.waitForNavigation();
    I.click('//a[@data-product_id="180"]');
    I.click('//li[@id="menu-item-251"]');
    I.waitForNavigation();
    I.see('Subtotal');
    I.see('Total');
    I.click('(//a[@href])[14]');
    I.waitForNavigation();
    I.see('Billing Details');
    I.see('Additional Information');
    I.fillField('//input[@id="billing_first_name"]','Kuhu');
    I.fillField('//input[@id="billing_last_name"]','Bhatnagar');
    I.fillField('//input[@id="billing_email"]','kuhu@gmail.com');
    I.fillField('//input[@id="billing_phone"]','9876543210');
    I.fillField('//input[@name="billing_address_1"]','Turab Nagar');
    I.fillField('//input[@name="billing_city"]','Ghaziabad');
    I.fillField('//input[@name="billing_postcode"]','201001');
    I.click('//input[@id="payment_method_cod"]');
    I.click('//input[@id="place_order"]');
    I.waitForNavigation();
    I.see('Order Details');
});