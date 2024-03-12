import { cls, getType, paginate } from "@/libs/client/utility";
import Link from "next/link";
import { useRouter } from "next/router";
import { Fragment, useCallback, useEffect, useState } from "react";
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
	totalCount: number;
	updateQueryParams: (queryParams?: { [key: string]: any }) => void;
}

export default function CardTable({
	title,
	data,
	dataType,
	hasLink = false,
	pathname,
	pageSize = 20,
	totalCount,
	updateQueryParams,
}: DataProps) {
	const router = useRouter();
	const [currentPage, setCurrentPage] = useState<number>(1);
	const onPageChange = useCallback(
		(page: number) => {
			setCurrentPage(page);
			console.log("p", currentPage, page);
		},
		[currentPage]
	);
	// const paginatedData = paginate(data, currentPage, pageSize);
	const paginatedData = data;
	const onLink = (link: any) => {
		pathname ? router.push(`${pathname}/${link}`) : router.push(`${router.pathname}/${link}`);
	};

	useEffect(() => {
		updateQueryParams({ skip: (currentPage - 1) * 20 });
	}, [updateQueryParams, currentPage]);

	return (
		<>
			{data !== undefined && data.length !== 0 ? (
				<Card title={title}>
					<div className="overflow-x-auto p-2">
						<table className="w-full min-w-max table-auto text-slate-500">
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
								{paginatedData?.map((data, index) => {
									// if (device !== "mobile") {
									return (
										<tr
											key={index}
											onClick={() => {
												hasLink ? onLink(data.id) : undefined;
											}}
											className={cls(
												"text-center even:bg-slate-50 hover:bg-slate-200/80 hover:text-black",
												hasLink ? "cursor-pointer" : ""
											)}
										>
											{Object.keys(data).map((key, index) =>
												key !== "id" ? (
													<td key={index} className="space-x-2 border-b border-slate-200 p-2">
														{getType(data[key]) === "Object" ? (
															<div className="grid grid-cols-1 md:grid-cols-2">
																{Object.entries(data[key]).map(([k, v], i) => (
																	<div key={i} className="">
																		{k} : {v as string}
																	</div>
																))}
															</div>
														) : (
															<span className={cls(key === "totalAlarm" ? "text-red-600" : "")}>
																{data[key]} {key === "trainSpeed" ? "km/h" : ""}
															</span>
														)}
													</td>
												) : (
													""
												)
											)}
										</tr>
									);
								})}
							</tbody>
						</table>
					</div>
					{totalCount <= pageSize ? (
						""
					) : (
						<Pagination
							totalCount={totalCount}
							pageSize={pageSize}
							currentPage={currentPage}
							onPageChange={onPageChange}
							className="pb-4 pt-1"
						/>
					)}
				</Card>
			) : (
				<Card className="select-none py-8 text-center text-base font-medium">
					해당 조건에 해당하는 알람이 없습니다.
				</Card>
			)}
		</>
	);
}
