const { setHeadlessWhen, setCommonPlugins } = require('@codeceptjs/configure');
// turn on headless mode when running with HEADLESS=true environment variable
// export HEADLESS=true && npx codeceptjs run
setHeadlessWhen(process.env.HEADLESS);

// enable all common plugins https://github.com/codeceptjs/configure#setcommonplugins
setCommonPlugins();

/** @type {CodeceptJS.MainConfig} */
exports.config = {
  tests: './Features/*_test.js',
  output: './output',
  helpers: {
    Puppeteer: {
      url: 'http://practice.automationtesting.in/',
      show: true,
      windowSize: '1200x900'
    }
  },
  include: {
    I: './steps_file.js',
    homePage:'./pages/home_page_test.js',
    loginPage:'./pages/login_test.js',
    registerPage:'./pages/registeration_test.js',
    shopPage:'./pages/shop_test.js'

  },
  name: 'automation-practise'
}