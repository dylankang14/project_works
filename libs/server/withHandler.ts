import { NextApiRequest, NextApiResponse } from "next";

interface ResponseType {
	ok: boolean;
	[key: string]: any;
}
type methods = "GET" | "POST" | "DELETE";
interface ConfigType {
	methods: methods[];
	handler: (req: NextApiRequest, res: NextApiResponse) => void;
}

export default function withHandler({ methods, handler }: ConfigType) {
	return async function (req: NextApiRequest, res: NextApiResponse): Promise<any> {
		if (req.method && !methods.includes(req.method as any)) {
			return res.status(405).end();
		}
		try {
			await handler(req, res);
		} catch (error) {
			console.log(error);
			return res.status(500).json({ error });
		}
	};
}
