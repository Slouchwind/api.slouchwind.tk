const fs = require("fs");

export default function handler(req, res) {
    const { name } = req.query;
    res.status(200).send(fs.readFileSync("../293a4339059e60b5_1_post.jpeg"));
}