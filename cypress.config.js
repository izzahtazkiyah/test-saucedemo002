const { defineConfig } = require("cypress");

module.exports = defineConfig({
  e2e: {
    baseUrl: 'https://www.saucedemo.com/',
    env: {
      lockedUser: 'locked_out_user'
    },
    setupNodeEvents(on, config) {
      // implement node event listeners here
    },
    defaultCommandTimeout: 4000,
    screenshotOnRunFailure: false,
    chromeWebSecurity: false
  },
});