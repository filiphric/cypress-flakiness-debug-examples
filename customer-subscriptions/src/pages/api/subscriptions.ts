import { generateCustomers } from '@/modules/generateCustomers';
import { NextApiRequest, NextApiResponse } from 'next';

// eslint-disable-next-line import/no-anonymous-default-export
export default (req: NextApiRequest, res: NextApiResponse) => {
  const customers = generateCustomers()
  res.json(customers);  
};
