// describe('Visual regression tests', () => {
//     it('Should match previous screenshot "about Page"', () => {
//       cy.visit('/home');
//       cy.matchImageSnapshot();
//     });
//   });

describe('Home Page', () => {
  beforeEach(() => {
    // Visit the home page before each test
    cy.visit('http://localhost:3000/home')
  })

  it('should contain expected texts', () => {
    // Assert that the home page contains the expected texts
    cy.contains('particular paragraph really shouldnt be the first sentence')
    cy.contains('transition')
    // cy.contains('Contact us')
  })
})
