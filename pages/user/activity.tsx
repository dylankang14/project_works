import Button from "@/components/button";
import Card from "@/components/card";
import CardTable from "@/components/card-table";
import ChartLine from "@/components/chart-line";
import Title from "@/components/content-title";
import Filter from "@/components/filter";

export default function Activity() {
	const dataType: string[] = ["순서", "로그인 일시", "로그아웃 일시", "로그인 IP"];
	const data = Array.from(Array(10).keys()).map((i) => ({
		id: i,
		loginDateTime: "2022.12.21 09:30:05",
		logoutDateTime: "2022.12.21 10:30:05",
		loginIp: "172.111.0.123",
	}));
	const chartData = [
		{ name: "09-01", number: 72 },
		{ name: "09-02", number: 42 },
		{ name: "09-03", number: 51 },
		{ name: "09-04", number: 60 },
		{ name: "09-05", number: 51 },
		{ name: "09-06", number: 74 },
		{ name: "09-07", number: 95 },
	];
	return (
		<div className="max-w-full">
			<Title title="로그인 내역" />
			<div className="flex items-center justify-between">
				<Filter type="date" />
			</div>
			<Card title="로그인 통계 그래프">
				<div className="pb-6 pt-3">
					<ChartLine data={chartData} />
				</div>
			</Card>
			<CardTable title="로그인 내역" data={data} dataType={dataType} />
		</div>
	);
}
