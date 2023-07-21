it('adds a product to cart', () => {
  cy.visit('/')
  cy.contains('Add to Cart').click()
  cy.contains('Product added to cart!').should('be.visible')
})
