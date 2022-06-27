const fs = require("fs");

module.exports = (req, res) => {
    const { name } = req.query;
    fs.writeFileSync("5.svg", `<svg xmlns="http://www.w3.org/2000/svg" version="1.1">
    <text x="0" y="15" fill="red">I love SVG</text>
  </svg>`);
    res.status(200).send("5");
}