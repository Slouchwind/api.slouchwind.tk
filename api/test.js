export default function handler(req, res) {
    const { who = "World" } = req.query;
    return res.json({ text: `Hello ${who}!` });
}