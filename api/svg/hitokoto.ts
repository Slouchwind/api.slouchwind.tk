import type { VercelRequest, VercelResponse } from '@vercel/node';
import axios from 'axios';

export default (request: VercelRequest, response: VercelResponse) => {
    response.setHeader('Content-Type', 'image/svg+xml');
    const { fill = '#000', c = 'i' } = request.query;
    let reqC = '';
    if (typeof c === 'string') reqC = `c=${c}`;
    if (c instanceof Array) reqC = c.map(v => `c=${v}`).join('&');
    console.log({ c, reqC });

    axios(`https://v1.hitokoto.cn/?${reqC}`).then(r => {
        const fetchRes = r.data;
        const { hitokoto } = fetchRes;
        response.status(200).send(`<svg xmlns="http://www.w3.org/2000/svg" version="1.1" width="${hitokoto.length * 20}px" height="20px">
    <text x="0" y="15" fill="${fill}">${hitokoto}</text>
</svg>`);
    });
};