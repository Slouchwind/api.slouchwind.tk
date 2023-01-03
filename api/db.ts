import { VercelRequest, VercelResponse } from '@vercel/node';
import { MongoClient } from 'mongodb';

const MONGODB_URL = `mongodb+srv://slouch_data_user:${process.env.MONGODB_PASSWORD}@cluster0.7jecg4x.mongodb.net/?retryWrites=true&w=majority`;
export default async (req: VercelRequest, res: VercelResponse) => {
    const client = new MongoClient(MONGODB_URL);
    await client.connect();
    client.db('test').collection('abc');
}