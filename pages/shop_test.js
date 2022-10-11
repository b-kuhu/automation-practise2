const {I} = inject();

class shopItem{

 locators={
    shop:'#menu-item-40',
    orderby:'//select[@name="orderby"]',
    addToBasket:'//a[@data-product_id="180"]',
    viewBasket:'//a[@title="View Basket"]',
    proceedToCheckout:'//div[@class="wc-proceed-to-checkout"]',
    firstname:'//input[@id="billing_first_name"]',
    lastname:'//input[@id="billing_last_name"]',
    email:'//input[@id="billing_email"]',
    phone:'//input[@id="billing_phone"]',
    address:'//input[@name="billing_address_1"]',
    city:'//input[@name="billing_city"]',
    postcode:'//input[@name="billing_postcode"]',
    paymentMethod:'//input[@id="payment_method_cod"]',
    placeOrder:'//input[@id="place_order"]'
 }
}

module.exports = new shopItem(this);