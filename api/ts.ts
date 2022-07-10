import type { VercelRequest, VercelResponse } from "@vercel/node";

export default (req: VercelRequest, res: VercelResponse) => {
    var name;
    if (req.query.name === undefined) {
        name = req.body.name;
    }
    else {
        name = req.query.name;
    }
    res.send(`Hello ${name}`+"\n")
        .send(req.method)
        .status(200)
        .end();
}