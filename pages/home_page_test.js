const { I } = inject();

class homePage{

  locators = {
    shop:"#menu-item-40",
    home:'//img[@title="Automation Practice Site"]',
    slider:'//img[@data-x="50"]',
    arrival:'//img[@width="300"]',
    selenium:'//img[@title="Selenium Ruby"]',
    description:'//a[@href="#tab-description"]',
    javascript:'//img[@title="Mastering JavaScript"]',
    addToBasket:'//button',
    viewCart:'//a[@title="View your shopping cart"]',
    price:'//td[@data-title="Price"]',
    applyCoupon:'//input[@value="Apply Coupon"]',
    removeFromBasket:'//a[@title="Remove this item"]'
  } 
}

module.exports = new homePage(this);