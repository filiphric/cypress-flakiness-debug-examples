it('Logs in the user', () => {
  cy.visit('/')
  cy.get('[data-cy=login-module]').should('be.visible')
  cy.get('input').type('firstname.lastname@example.com')
  cy.get('button').click()
  cy.contains('You are logged in!').should('be.visible')
})
