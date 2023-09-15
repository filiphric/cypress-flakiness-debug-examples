import { NextApiRequest, NextApiResponse } from 'next';

// eslint-disable-next-line import/no-anonymous-default-export
export default (req: NextApiRequest, res: NextApiResponse) => {
    if (req.body.email === 'firstname.lastname@example.com') {
        res.json({ success: true });  
    } else {
        res.status(400)
        res.json({
          message: 'Email was not found'
        })
        res.send(400)
    }
};
