import Button from "@/components/button";
import Card from "@/components/card";
import CardSummary from "@/components/card-summary";
import Filter from "@/components/filter";
import CardAlarmType from "@/components/card-alarm-type";
import Title from "@/components/content-title";
import HeaderFilter from "@/components/header-filter";
import ChartLine from "@/components/chart-line";

export default function OfficeStatistics() {
	const chartData = [
		{ name: "2017", react: 32, angular: 37, vue: 60 },
		{ name: "2018", react: 42, angular: 42, vue: 54 },
		{ name: "2019", react: 51, angular: 41, vue: 54 },
		{ name: "2020", react: 60, angular: 37, vue: 28 },
		{ name: "2021", react: 51, angular: 31, vue: 27 },
		{ name: "2022", react: 95, angular: 44, vue: 49 },
	];

	return (
		<>
			<Title title="서울사업소" />
			<div className="flex items-center justify-between">
				<HeaderFilter />
			</div>
			<CardSummary />
			<Card title="로그인 통계 그래프">
				<div className="pb-6 pt-3">
					<ChartLine data={chartData} />
				</div>
			</Card>
			<CardAlarmType />
		</>
	);
}
