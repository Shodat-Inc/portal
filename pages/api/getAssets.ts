// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from 'next'
import { Users } from '../../user';
import fsPromises from 'fs/promises';
import path from 'path';

const dataFilePath = path.join(process.cwd(), 'json/assets.json')

export default async function handler(req, res) {
    try {
        // if (req.method !== 'POST') {
        //     res.status(405).send({ message: 'Only POST requests allowed' })
        //     return
        // }

        const jsonData = await fsPromises.readFile(dataFilePath);
        const objectData = JSON.parse(jsonData);

        const { assetName } = req.body;

        res.status(200).json(objectData);

    } catch (error) {
        res.status(405).send({ message: `{error.message}` })
        return
    }
};