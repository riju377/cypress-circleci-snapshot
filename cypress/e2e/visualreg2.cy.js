// Decide whether you want do screenshot testing or not
let takeSnapshot = true;

describe('Home Page', () => {
    beforeEach(() => {
      // Visit the home page before each test
      cy.visit('http://localhost:3000/')
    })
  
    it('should contain expected texts', () => {
      if(takeSnapshot) cy.compareSnapshot('second')
      cy.visit('http://localhost:3000/home')
      if(takeSnapshot) cy.compareSnapshot('third')
    })
  })