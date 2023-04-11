// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from "next";

type Data = {
	name: string;
};

export default async function handler(req: NextApiRequest, res: NextApiResponse<Data>) {
	// res.status(200).json({ name: "John Doe" });
	// const response = await (await fetch("http://192.168.0.166:7131/MRKang")).json();
	// console.log(response);
	// res.json({
	// 	ok: true,
	// 	...response,
	// });
}
