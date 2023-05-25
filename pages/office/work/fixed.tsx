import Button from "@/components/button";
import Card from "@/components/card";
import CardAlarm from "@/components/card-alarm";
import CardSummary from "@/components/card-summary";
import Filter from "@/components/filter";

import Pagination from "@/components/pagination";
import { useLangData } from "@/contexts/langContext";
import { paginate } from "@/libs/client/utility";
import { useState } from "react";

export default function Fixed() {
	const data = Array.from(Array(5).keys()).map((i) => ({
		id: i,
		priority: i % 2,
		fixed: i % 3 > 1,
	}));
	const pageSize = 15;
	const [currentPage, setCurrentPage] = useState(1);
	const onPageChange = (page: number) => setCurrentPage(page);
	const paginatedData = paginate(data, currentPage, pageSize);
	const { common } = useLangData();
	return (
		<>
			<div className="flex items-center justify-between">
				<div className="flex gap-1">
					<Filter type="date" />
					<Filter type="station" />
					<Filter type="alarmType" />
				</div>
				<div></div>
			</div>
			<CardSummary />
			<Card title="로그인 통계 그래프">
				<div className="p-4">
					<div className="flex h-52 items-center justify-center bg-gray-100">{common?.get("C4116")}</div>
				</div>
			</Card>
			<div className="">
				{data.map((data) => (
					<CardAlarm key={data.id} data={data} />
				))}
				<Pagination
					totalCount={data.length}
					pageSize={pageSize}
					currentPage={currentPage}
					onPageChange={onPageChange}
					className="py-2"
				/>
			</div>
		</>
	);
}
