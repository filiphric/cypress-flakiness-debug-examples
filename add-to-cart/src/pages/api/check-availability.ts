import { NextApiRequest, NextApiResponse } from 'next';

export default (req: NextApiRequest, res: NextApiResponse) => {

  const timeout = Math.floor(Math.random() * 2000)
    
  setTimeout(() => {
    res.json({ available: true, qty: 1 });
  }, timeout)
  
};
