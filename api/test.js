const fs = require("fs");

export default function handler(req, res) {
    const { name } = req.query;
    (async () => {
        let buffer = fs.readFileSync("../2.jpeg")
        res.status(200).send(buffer);
    })();
}