module.exports = (req, res) => {
    var { who } = req.query;
    res.status(200).json({ text: `Hello ${who}!` });

    try {
        req.body;
    } catch (error) {
        return res.status(400).json({ error: "400 error" });
    }
};