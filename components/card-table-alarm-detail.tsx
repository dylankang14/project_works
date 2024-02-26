import { cls, getFormatDate, getType, openReportPDF, paginate } from "@/libs/client/utility";
import Link from "next/link";
import { useRouter } from "next/router";
import { Fragment, useState } from "react";
import Card from "./card";
import Pagination from "./pagination";
import useWindowDimensions from "@/libs/client/useWindowDimensions";

interface AlarmCodeType {
	[key: string]: { value: any; priority: number };
}
interface DataProp {
	id?: number;
	priority: number;
	datetime: Date;
	[key: string]: any;
	[key: number]: any;
}

interface DataProps {
	title?: string;
	data: DataProp[];
	dataType: string[];
	hasLink?: boolean;
	pathname?: string;
	pageSize?: number;
}

interface QueryParamsType {
	date: Date;
	fileName: string;
}

export default function CardTableAlarmDetail({
	title,
	data,
	dataType,
	hasLink = false,
	pathname,
	pageSize = 15,
}: DataProps) {
	const router = useRouter();
	const [currentPage, setCurrentPage] = useState(1);
	const onPageChange = (page: number) => setCurrentPage(page);
	const paginatedData = paginate(data, currentPage, pageSize);
	const onLink = ({ date, fileName }: QueryParamsType) => {
		// pathname && router.push(`http://192.168.0.204:8080/${pathname}?date=20231211&filename=${fileName}`);
		// pathname && router.push(`/${pathname}?date=${getFormatDate(date)}&fileName=${fileName}`);
		openReportPDF({
			apiUrl: `http://192.168.0.204:8080/${pathname}?date=20231211&filename=${fileName}`,
			filename: fileName,
		});
	};
	const { device } = useWindowDimensions();
	console.log(paginatedData);

	return (
		<Card title={title}>
			<div className="overflow-x-auto p-2">
				<table className="w-full min-w-max table-auto text-slate-500">
					{/* {device !== "mobile" ? ( */}
					<thead>
						<tr>
							{dataType.map((i) => (
								<th key={i} className="border-b border-slate-300 p-2 pt-1">
									{i}
								</th>
							))}
						</tr>
					</thead>
					{/* ) : null} */}
					<tbody>
						{paginatedData.map((data, index) => {
							// if (device !== "mobile") {
							return (
								<tr
									key={data.id}
									onClick={() => {
										hasLink && data.fileName ? onLink({ date: data.datetime, fileName: data.fileName }) : undefined;
									}}
									className={cls(
										"border-b border-slate-200 text-center only:border-none even:bg-slate-50 hover:bg-slate-200/80 hover:text-black",
										hasLink && data.fileName ? "cursor-pointer" : ""
									)}
								>
									{Object.keys(data).map((key, i) =>
										key !== "id" && key !== "priority" && key !== "datetime" && key !== "alarmPriority"
											? key === "alarmCode"
												? Object.entries(data.alarmCode).map(([k, v], i) => (
														<td key={i} className="space-x-2 p-2">
															<div
																className={cls(
																	"grid grid-cols-1 text-center",
																	+data.alarmPriority[k] > 0 ? "text-red-600" : ""
																)}
															>
																{v as any}
															</div>
														</td>
												  ))
												: ""
											: ""
									)}
								</tr>
							);
							// } else {
							// 	return (
							// 		<tr
							// 			key={data.id}
							// 			onClick={() => {
							// 				hasLink && data.fileName ? onLink({ date: data.datetime, fileName: data.fileName }) : undefined;
							// 			}}
							// 			className={cls(
							// 				"border-b border-slate-200 text-center only:border-none even:bg-slate-50 hover:bg-slate-200/80 hover:text-black",
							// 				hasLink && data.fileName ? "cursor-pointer" : ""
							// 			)}
							// 		>
							// 			{Object.keys(data).map((key, i) =>
							// 				key !== "id" && key !== "priority" && key !== "datetime" && key !== "alarmPriority" ? (
							// 					key === "alarmCode" ? (
							// 						<td key={data.id} className="p-2">
							// 							<div key={i} className="grid grid-cols-[max-content_min-content] gap-x-2 text-left">
							// 								{Object.entries(data.alarmCode).map(([k, v], i) => (
							// 									<Fragment key={i}>
							// 										<span className="font-bold">{dataType[i]}</span>
							// 										<span className={cls("text-right", +data.alarmPriority[k] > 0 ? "text-red-600" : "")}>
							// 											{v as string}
							// 										</span>
							// 									</Fragment>
							// 								))}
							// 							</div>
							// 						</td>
							// 					) : (
							// 						""
							// 					)
							// 				) : (
							// 					""
							// 				)
							// 			)}
							// 		</tr>
							// 	);
							// }
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
