const {defineConfig} = require("cypress");

module.exports = defineConfig({
  video:false,
  // env: {
  //   preserveOriginalScreenshot: true
  // },
  e2e: {
    setupNodeEvents(on, config) {
      const getCompareSnapshotsPlugin = require('cypress-image-diff-js/dist/plugin')
      getCompareSnapshotsPlugin(on, config);
    },
  }
});
