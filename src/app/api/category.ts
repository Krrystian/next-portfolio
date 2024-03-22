import { PrismaClient } from "@prisma/client";
import type { NextApiRequest, NextApiResponse } from 'next'
type ResponseData = {
  message: string
}
 //fix api calls
export default function handler(
  req: NextApiRequest,
  res: NextApiResponse<ResponseData>
) {
    const prisma = new PrismaClient();
    console.log(req.method);
    if (req.method === 'GET') {
        console.log(req.body);
    }
    return res.status(405).json({ message: "Method not allowed" });
}