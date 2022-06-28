export default function handler(req, res) {
    const { who = "World" } = req.query;
    res.setHeader("Access-Control-Allow-Origin", "*");
    return res.json({ text: `Hello ${who}!` });
}