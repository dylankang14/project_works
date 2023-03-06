import { cls } from "@/libs/client/utility";
import Link from "next/link";
import { useRouter } from "next/router";
import { Fragment } from "react";
import Card from "./card";
import Pagination from "./pagination";

interface DataProp {
	id?: number;
	[key: string]: any;
}

interface DataProps {
	title?: string;
	data: DataProp[];
	dataType: string[];
	hasLink?: boolean;
	pathname?: string;
	pagination?: boolean;
}

export default function CardTable({ title, data, dataType, hasLink = false, pathname, pagination = false }: DataProps) {
	const router = useRouter();
	const onLink = (link: any) => {
		pathname ? router.push(`/${pathname}/${link}`) : router.push(`${router.pathname}/${link}`);
	};
	return (
		<Card title={title}>
			<div className="p-2">
				<table className="w-full table-auto text-slate-500">
					<thead>
						<tr>
							{dataType.map((i) => (
								<th key={i} className="border-b border-slate-300 p-2 pt-1">
									{i}
								</th>
							))}
						</tr>
					</thead>
					<tbody>
						{data.map((data, index) => (
							<tr
								key={index}
								onClick={() => {
									hasLink ? onLink(index) : undefined;
								}}
								className={cls(
									"text-center even:bg-slate-50 hover:bg-slate-200/80 hover:text-black",
									hasLink ? "cursor-pointer" : ""
								)}
							>
								{Object.values(data).map((value, index) => (
									<td key={index} className="border-b border-slate-200 p-2">
										{value}
									</td>
								))}
							</tr>
						))}
					</tbody>
				</table>
			</div>
			{pagination && <Pagination active={1} className="pt-1 pb-4" />}
		</Card>
	);
}
