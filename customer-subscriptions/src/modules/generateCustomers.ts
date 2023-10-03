import { faker } from '@faker-js/faker';
import { Subscription } from '@/interfaces/subscription';

export const generateCustomers = () => {
  
  let customers: Subscription[] = []
  let customerCount = Math.floor(Math.random() * 6) + 1

  for (let index = 0; index < customerCount; index++) {

    let firstName = faker.person.firstName()
    let lastName = faker.person.lastName()
    let status = ['active', 'inactive', 'trial'] as const

   customers.push({
      id: faker.string.uuid(),
      fullName: `${firstName} ${lastName}`,
      email: faker.internet.exampleEmail({firstName, lastName}),
      status: status[Math.floor(Math.random() * 3)]
    })
    
  }

  return customers

}