describe('Home Page', () => {
    beforeEach(() => {
      // Visit the home page before each test
      cy.visit('http://localhost:3000/')
    })
  
    it('should contain expected texts', () => {
      cy.compareSnapshot('second')
      // cy.percySnapshot('Second')
      cy.visit('http://localhost:3000/home')
      cy.compareSnapshot('third')
    })
  })