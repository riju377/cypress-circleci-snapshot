describe('Home Page', () => {
    beforeEach(() => {
      // Visit the home page before each test
      cy.visit('http://localhost:3000/')
    })
  
    it('should contain expected texts', () => {
      if(true) cy.compareSnapshot('second')
      cy.visit('http://localhost:3000/home')
      if(true) cy.compareSnapshot('third')
    })
  })