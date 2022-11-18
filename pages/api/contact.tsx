import { NextApiRequest, NextApiResponse } from "next";

const handler = (req: NextApiRequest, res: NextApiResponse) => {
 
  console.warn("this just cost us 1p")
  res.status(200).json({id:1});
}

export default handler