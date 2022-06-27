export default function handler(req, res) {
    const { name } = req.query;
    res.status(200).send('<svg xmlns="http:\/\/www.w3.org/2000/svg" version="1.1" height="24.0" width="605"><text x="0" y="20" fill="#FF0000" font-size="20">你指尖跃动的电光，是我此生不变的信仰，唯我超电磁炮永世长存。</text></svg>');
}