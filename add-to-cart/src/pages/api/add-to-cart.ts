import { NextApiRequest, NextApiResponse } from 'next';

export default (req: NextApiRequest, res: NextApiResponse) => {
    if (req.body.qty) {
        res.json({ success: true });  
    } else {
        res.status(400)
        res.send(400)
    }
};
