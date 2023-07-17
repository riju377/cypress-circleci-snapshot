// Decide whether you want do screenshot testing or not
let takeSnapshot = true;

describe('Home Page', () => {
    beforeEach(() => {
      // Visit the home page before each test
      cy.visit('http://localhost:3000/')
    })
  
    it('should contain expected texts', () => {
      if(takeSnapshot) cy.compareSnapshot('second', 0.0)
      cy.visit('http://localhost:3000/home')
      if(takeSnapshot) cy.compareSnapshot('third',0.0)
    })
  })