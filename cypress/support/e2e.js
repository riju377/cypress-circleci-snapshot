// import '@percy/cypress'

const compareSnapshotCommand = require('cypress-image-diff-js/dist/command');
compareSnapshotCommand();

// after(() => {
//     cy.task("generateReport");
//   });