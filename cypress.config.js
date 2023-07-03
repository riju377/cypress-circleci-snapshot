// const {defineConfig} = require("cypress");

// module.exports = defineConfig({
//   video:false,
//   e2e: {
//     setupNodeEvents(on, config) {
//       const getCompareSnapshotsPlugin = require('cypress-image-diff-js/dist/plugin')
//       getCompareSnapshotsPlugin(on, config);
//     },
//   },
// });

const { defineConfig } = require('cypress');

module.exports = defineConfig({
  video: false,
  screenshotOnRunFailure: false,
  e2e: {
    baseUrl: 'http://localhost:3000',
    setupNodeEvents(on, config) {
      return require('./cypress/plugins/index.js')(on, config);
    }
  }
});