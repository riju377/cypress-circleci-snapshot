describe('Home Page', () => {
  beforeEach(() => {
    // Visit the home page before each test
    cy.visit('http://localhost:3000/home')
  })

  it('should contain expected texts', () => {
    // Assert that the home page contains the expected texts
    cy.contains('particular paragraph really shouldnt be the first sentence')
    cy.contains('transition')
    // cy.toMatchImageSnapshot();
    cy.compareSnapshot();
  })
})

// import { addMatchImageSnapshotCommand } from 'cypress-image-snapshot/command';

// // Add the matchImageSnapshot command to Cypress
// addMatchImageSnapshotCommand();

// // Example test
// describe('Example Test', () => {
//   it('Should compare images and save new image', () => {
//     cy.visit('http://localhost:3000/home');

//     // Capture a screenshot and compare it to the baseline image
//     cy.matchImageSnapshot();

//     // Check if a diff image was generated
//     cy.task('hasDiffImage').then((hasDiffImage) => {
//       if (hasDiffImage) {
//         // Retrieve the file path of the current and baseline images
//         cy.task('getSnapshotFilePath').then((snapshotFilePath) => {
//           const currentImageFilePath = snapshotFilePath.current;
//           const baselineImageFilePath = snapshotFilePath.baseline;

//           // Read the content of the baseline image file
//           cy.readFile(baselineImageFilePath).then((baselineImageContent) => {
//             // Save the current image and the baseline image together
//             cy.writeFile(currentImageFilePath, baselineImageContent, 'base64');
//           });
//         });
//       }
//     });
//   });
// });
