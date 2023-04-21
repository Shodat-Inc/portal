// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from 'next'
import { Users } from '../../user';


export default function handler(req, res) {
    try {
        if (req.method !== 'POST') {
            res.status(405).send({ message: 'Only POST requests allowed' })
            return
        }
        const body = JSON.parse(JSON.stringify(req.body))
        const user = Users.find((user) => user.email === body.email && user.password === parseInt(body.password));
        if (!user) {
            res.status(404).send({ message: 'User does not exit!' })
            return
        }

        res.status(200).json(user);
    } catch (error) {
        res.status(405).send({ message: `{error.message}` })
        return
    }
};


// type Data = {
//         id: number,
//         username: string,
//         password: string,
//         userId: number,
//         userRole: string
// }

// export default function handler(
//     req: NextApiRequest,
//     res: NextApiResponse<Data>
// ) {
//     const { method } = req;
//     // res.status(200).json({ name: 'John Doe new111 ' })

//     switch (method) {
//         case "GET":
//             res.status(200).json(users);
//             break;
//         case "POST":
//             const { todo, completed } = req.body;
//             users.push({
//                 // id: users.length + 1,
//                 username,
//                 password,
//             });
//             res.status(200).json(users);
//             break;
//         default:
//             res.setHeader("Allow", ["GET", "POST"]);
//             res.status(405).end(`Method ${method} Not Allowed`);
//             break;
//     }
// }
