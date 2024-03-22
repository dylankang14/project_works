import Link from "next/link";
import Card from "./card";
import ChartLineAlarm from "./chart-line-alarm";

export default function CardStatistics() {
	const chartData = [
		{ name: "09-01", av: 32, iv: 37, fixed: 60 },
		{ name: "09-02", av: 42, iv: 42, fixed: 54 },
		{ name: "09-03", av: 51, iv: 41, fixed: 54 },
		{ name: "09-04", av: 60, iv: 37, fixed: 28 },
		{ name: "09-05", av: 51, iv: 31, fixed: 27 },
		{ name: "09-06", av: 95, iv: 44, fixed: 49 },
		{ name: "09-07", av: 95, iv: 44, fixed: 49 },
	];
	return (
		<Card title="알람 통계">
			<div className="flex flex-wrap gap-x-4 gap-y-2 px-4 py-4 text-white">
				<ChartLineAlarm data={chartData} />
			</div>
		</Card>
	);
}
