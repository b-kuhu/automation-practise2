const {I} = inject();

class registerUser{

    locators = {
        myAccount:"#menu-item-50",
        email:'//input[@id="reg_email"]',
        password:'//input[@id="reg_password"]',
        register:"//input[@name='register']",
        home:'//a[@title="Automation Practice Site"]',
        error:'//ul[@class="woocommerce-error"]'
    }

}
module.exports= new registerUser(this);