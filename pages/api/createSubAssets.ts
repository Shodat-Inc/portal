import fsPromises from 'fs/promises';
import path from 'path';
const dataFilePath = path.join(process.cwd(), 'json/subassets.json')

export default async function handler(req:any, res:any) {
    try {
        if (req.method !== 'POST') {
            res.status(405).send({ message: 'Only POST requests allowed' })
            return
        }
        // Read the existing data from the JSON file
        const jsonData:any = await fsPromises.readFile(dataFilePath);
        const objectData = JSON.parse(jsonData);

        // Get the data from the request body
        const { assetName, assetDescription, propertyValue1, propertyValue2, propertyValue3, parentAssetName } = req.body;

        // Add the new data to the object
        const newData = {
            assetName, 
            assetDescription, 
            propertyValue1, 
            propertyValue2, 
            propertyValue3, 
            parentAssetName
        };
        objectData.push(newData);

        // Convert the object back to a JSON string
        const updatedData = JSON.stringify(objectData);

        // Write the updated data to the JSON file
        await fsPromises.writeFile(dataFilePath, updatedData);

        // Send a success response
        res.status(200).json({ message: 'Data stored successfully' });
    } catch (error) {
        console.error(error);
        // Send an error response
        res.status(500).json({ message: 'Error storing data' });
    }
};