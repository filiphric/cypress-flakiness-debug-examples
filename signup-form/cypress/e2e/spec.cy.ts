import { faker } from '@faker-js/faker';

Cypress.Keyboard.defaults({
  keystrokeDelay: 0
})

const credentials = {
  firstName: faker.person.firstName(),
  lastName: faker.person.lastName(),
  jobTitle: faker.person.jobTitle(),
  bio: faker.person.bio(),
  email: faker.internet.email(),
  password: faker.internet.password(),
}

it('Signup with random data', () => {
  cy.visit('/') 
  cy.get('[name=firstName]').type(credentials.firstName)
  cy.get('[name=lastName]').type(credentials.lastName)
  cy.get('[name=jobTitle]').type(credentials.jobTitle)
  cy.get('[name=bio]').type(credentials.bio)
  cy.get('[name=email]').type(credentials.email)
  cy.get('[name=password]').type(credentials.password)
  cy.get('form').submit()
})
