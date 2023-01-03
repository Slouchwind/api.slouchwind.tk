import fetch from 'node-fetch';
import type { VercelRequest, VercelResponse } from '@vercel/node';

interface hitokotoRes {
    hitokoto: string;
}
export default async (request: VercelRequest, response: VercelResponse) => {
    const { fill = '#000', c = 'i' } = request.query;
    let reqC: string;
    if (c instanceof String) reqC = `c=${c}`;
    if (c instanceof Array) reqC = c.map(v => `c=${v}`).join('');
    fetch(`https://v1.hitokoto.cn/?${c}`).then<hitokotoRes | Object>(r => r.json()).then((fetchRes: any) => {
        const { hitokoto } = fetchRes;
        response.status(200).send(`
        <svg xmlns="http://www.w3.org/2000/svg" version="1.1" width="${hitokoto.length * 20}px" height="20px">
            <text x="0" y="15" fill="${fill}">${hitokoto}</text>
        </svg>
        `);
    });
};