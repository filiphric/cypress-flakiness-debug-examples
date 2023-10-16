beforeEach(() => {
  cy.visit('/')
  cy.contains('Loading').should('not.exist')
  cy.injectAxe()
})

it('Checks accessibility of a page', () => {
  cy.checkA11y()
})
