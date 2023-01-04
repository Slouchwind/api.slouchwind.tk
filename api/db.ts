import { VercelRequest, VercelResponse } from '@vercel/node';
import { MongoClient } from 'mongodb';

const MONGODB_URL = `mongodb+srv://slouch_data_user:${process.env.MONGODB_PASSWORD}@cluster0.7jecg4x.mongodb.net/?retryWrites=true&w=majority`;
export default async (req: VercelRequest, res: VercelResponse) => {
    let client = new MongoClient(MONGODB_URL);
    client = await client.connect();
    console.log(client);
    res.status(200).send('done');
}