import Button from "@/components/button";
import Filter from "@/components/filter";
import CardTable from "@/components/card-table";
import { useLangData } from "@/contexts/langContext";

export default function Facility() {
	const { common } = useLangData();
	const dataType: string[] = ["No", `${common?.get("C6401")}`, "Total", `${common?.get("C4702")}`];
	const data = Array.from(Array(20).keys()).map((i) => ({
		id: i + 1,
		name: `Facility-${i}`,
		count: `${i + 1}`,
		alarmCount: `${i + 1}`,
	}));

	return (
		<>
			<div className="flex flex-wrap items-center justify-between print:hidden">
				<div className="flex gap-1">
					<Filter type="dateRange" />
					<Filter type="station" />
					<Filter type="alarmType" />
					<Filter type="alarmPriority" />
					<Filter type="routeDirection" />
				</div>
				<div>
					<Button size="sm" color="slate" icon="print" iconPosition="right" onClick={() => window.print()}>
						Print
					</Button>
				</div>
			</div>
			<CardTable hasLink={true} data={data} dataType={dataType} />
		</>
	);
}
