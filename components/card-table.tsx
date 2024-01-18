import { cls, getType, paginate } from "@/libs/client/utility";
import Link from "next/link";
import { useRouter } from "next/router";
import { Fragment, useState } from "react";
import Card from "./card";
import Pagination from "./pagination";
import useWindowDimensions from "@/libs/client/useWindowDimensions";

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
	pageSize?: number;
}

export default function CardTable({ title, data, dataType, hasLink = false, pathname, pageSize = 15 }: DataProps) {
	const router = useRouter();
	const [currentPage, setCurrentPage] = useState(1);
	const onPageChange = (page: number) => setCurrentPage(page);
	const paginatedData = paginate(data, currentPage, pageSize);
	const onLink = (link: any) => {
		pathname ? router.push(`/${pathname}/${link}`) : router.push(`${router.pathname}/${link}`);
	};
	const { device } = useWindowDimensions();
	return (
		<Card title={title}>
			<div className="p-2">
				<table className="w-full table-auto text-slate-500">
					{device !== "mobile" ? (
						<thead>
							<tr>
								{dataType.map((i) => (
									<th key={i} className="border-b border-slate-300 p-2 pt-1">
										{i}
									</th>
								))}
							</tr>
						</thead>
					) : null}
					<tbody>
						{paginatedData.map((data, index) => {
							if (device !== "mobile") {
								return (
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
											<td key={index} className="space-x-2 border-b border-slate-200 p-2">
												{getType(value) === "Object" ? (
													<div className="grid grid-cols-1 md:grid-cols-2">
														{Object.entries(value).map(([k, v], i) => (
															<div key={i} className="">
																{k} : {v as string}
															</div>
														))}
													</div>
												) : (
													value
												)}
											</td>
										))}
									</tr>
								);
							} else {
								return (
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
										<td className="border-b border-slate-200 p-2">
											<div key={index} className="grid grid-cols-[max-content_1fr] gap-x-3 gap-y-0.5 text-left">
												{Object.entries(data).map(([key, value], index) =>
													getType(value) === "Object" ? (
														Object.entries(value).map(([k, v], i) => (
															<Fragment key={i}>
																<span className="font-bold">{k}</span>
																<span>{v as string}</span>
															</Fragment>
														))
													) : (
														<Fragment key={index}>
															<span className="font-bold">{dataType[index]}</span>
															<span>{value as string}</span>
														</Fragment>
													)
												)}
											</div>
										</td>
									</tr>
								);
							}
						})}
					</tbody>
				</table>
			</div>
			{data.length <= pageSize ? (
				""
			) : (
				<Pagination
					totalCount={data.length}
					pageSize={pageSize}
					currentPage={currentPage}
					onPageChange={onPageChange}
					className="pb-4 pt-1"
				/>
			)}
		</Card>
	);
}
