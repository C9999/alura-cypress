const { defineConfig } = require("cypress");
reporter: 'mochawesome',
  
module.exports = defineConfig({
  e2e: {
    setupNodeEvents(on, config) {
      // implement node event listeners here
    },
  },
});
