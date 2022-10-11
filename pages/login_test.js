const {I}= inject();

class loginUser {

    locators= {
        myAccount:"#menu-item-50",
        email:'//input[@id="username"]',
        password:'//input[@id="password"]',
        login:'//input[@name="login"]',
        error:'//ul[@class="woocommerce-error"]'
    }
    
}
module.exports = new loginUser(this);