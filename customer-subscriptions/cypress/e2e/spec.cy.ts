it('Logs in the user', () => {
  let randomItem = Math.floor(Math.random() * 7)

  cy.visit('/')
  cy.get('[data-cy=customer-item]').eq(randomItem).click()
  cy.contains('Activate Subscription').click()
  cy.contains('Subscription was activated').should('be.visible')
})
