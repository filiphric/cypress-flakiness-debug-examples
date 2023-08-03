it('Logs in the user', () => {
  cy.visit('/')
  cy.get('input').type('firstname.lastname@example.com')
  cy.get('button').click()
  cy.contains('You are logged in!').should('be.visible')
})
