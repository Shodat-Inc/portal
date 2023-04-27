import fsPromises from 'fs/promises';
import path from 'path';

const dataFilePath = path.join(process.cwd(), 'json/subassets.json')

export default async function handler(req:any, res:any) {
    try {
        const jsonData:any = await fsPromises.readFile(dataFilePath);
        const objectData = JSON.parse(jsonData);
        res.status(200).json(objectData);

    } catch (error) {
        res.status(405).send({ message: `{error.message}` })
        return
    }
};