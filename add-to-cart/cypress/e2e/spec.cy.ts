it('adds a product to cart', () => {
  cy.visit('/')
  cy.wait(1000)
  cy.contains('Add to Cart').click()
  cy.contains('Product added to cart!').should('be.visible')
})
