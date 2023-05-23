import Button from "@/components/button";
import CardSummary from "@/components/card-summary";
import CardTable from "@/components/card-table";
import Filter from "@/components/filter";
import { useLangData } from "@/contexts/langContext";

export default function UserStatistics() {
	const { common } = useLangData();
	const dataType: string[] = [
		"유저",
		"소속",
		"직위",
		"권한",
		`${common?.get("C4702")} ${common?.get("C0080")}`,
		`${common?.get("C0031")} ${common?.get("C0080")}`,
		`${common?.get("C2305")} ${common?.get("C0080")}`,
	];
	const data = Array.from(Array(20).keys()).map((i) => ({
		name: `유저-${i}`,
		office: `common?.get("C6301")-${i}`,
		position: `대리`,
		permission: `유저`,
		av: `${i}`,
		iv: `${i}`,
		total: `${i * 2}`,
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
			<CardTable hasLink={true} pathname="admin/user" data={data} dataType={dataType} />
		</>
	);
}
