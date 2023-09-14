const { defineConfig } = require("cypress");

module.exports = defineConfig({
  e2e: {
    setupNodeEvents(on, config) {
      // implement node event listeners here
    },
  },


  e2e: {
    baseUrl: 'https://reqres.in/', 
    excludeSpecPattern: "e2e/**/*.js",
    specPattern: "cypress/apiTestCases/*.js",
    "pageLoadTimeout":80000,
    //"retries": 1
  
  },
});
