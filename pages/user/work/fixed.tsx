import Button from "@/components/button";
import Card from "@/components/card";
import CardAlarm from "@/components/card-alarm";
import CardSummary from "@/components/card-summary";
import ChartLine from "@/components/chart-line";
import Title from "@/components/content-title";
import Filter from "@/components/filter";
import HeaderFilter from "@/components/header-filter";

import Pagination from "@/components/pagination";
import { paginate } from "@/libs/client/utility";
import { useState } from "react";

export default function Fixed() {
	const [currentPage, setCurrentPage] = useState(1);
	const onPageChange = (page: number) => setCurrentPage(page);
	const pageSize = 10;
	const data = Array.from(Array(55).keys()).map((i) => ({
		id: i,
		priority: i % 2,
		fixed: i % 3 > 1,
	}));
	const chartData = [
		{ name: "2017", react: 32, angular: 37, vue: 60 },
		{ name: "2018", react: 42, angular: 42, vue: 54 },
		{ name: "2019", react: 51, angular: 41, vue: 54 },
		{ name: "2020", react: 60, angular: 37, vue: 28 },
		{ name: "2021", react: 51, angular: 31, vue: 27 },
		{ name: "2022", react: 95, angular: 44, vue: 49 },
	];

	const paginatedData = paginate(data, currentPage, pageSize);
	return (
		<>
			<Title title="홍길동 님의 조치완료 리스트" />
			<div className="flex items-center justify-between">
				<HeaderFilter />
			</div>
			<CardSummary />
			<Card title="조치완료 통계 그래프">
				<div className="pb-6 pt-3">
					<ChartLine data={chartData} />
				</div>
			</Card>
			<div className="">
				{paginatedData.map((data) => (
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
