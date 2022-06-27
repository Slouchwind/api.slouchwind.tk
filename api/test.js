const fs = require("fs");

module.exports = (req, res) => {
    const { name } = req.query;
    res.status(200).send("5");
}