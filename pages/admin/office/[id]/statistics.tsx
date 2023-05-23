import Button from "@/components/button";
import Card from "@/components/card";
import CardSummary from "@/components/card-summary";
import CardTable from "@/components/card-table";
import Filter from "@/components/filter";
import { useLangData } from "@/contexts/langContext";

export default function AllOfficeStatistics() {
	const { common } = useLangData();
	const dataType: string[] = [
		`common?.get("C6301")`,
		`${common?.get("C4702")}/${common?.get("C0080")}`,
		`${common?.get("C0031")}/${common?.get("C0080")}`,
		`${common?.get("C2305")}${common?.get("C4702")}/${common?.get("C0080")}`,
	];
	const data = Array.from(Array(10).keys()).map((i) => ({
		name: `common?.get("C6301")-${i}`,
		av: `20 / ${i}`,
		iv: `12 / ${i}`,
		total: `32 / ${i * 2}`,
	}));
	return (
		<>
			<div className="flex items-center justify-between">
				<div className="flex gap-1">
					<Filter type="date" />
					<Filter type="station" />
					<Filter type="office" />
					<Filter type="alarmType" />
				</div>
				<div>
					<Button size="sm" color="slate" icon="print" iconPosition="right">
						Print
					</Button>
				</div>
			</div>
			<CardSummary />
			<Card title="전체 통계 그래프">
				<div className="p-4">
					<div className="flex h-52 items-center justify-center bg-gray-100">{common?.get("C4116")}</div>
				</div>
			</Card>
			<CardTable hasLink={true} pathname="admin/office" data={data} dataType={dataType} />
		</>
	);
}
