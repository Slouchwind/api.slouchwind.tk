import type { VercelRequest, VercelResponse } from "@vercel/node";

export default (req: VercelRequest, res: VercelResponse) => {
    const { name } = req.query;
    res.send(`Hello ${name}`);
    res.status(200).end();
}