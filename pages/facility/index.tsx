import Button from "@/components/button";
import Filter from "@/components/filter";
import CardTable from "@/components/card-table";

export default function Facility() {
	const dataType: string[] = ["순서", "시설물명", "전체갯수", "알람갯수"];
	const data = Array.from(Array(20).keys()).map((i) => ({
		id: i,
		name: `시설물-${i}`,
		count: `2${i}`,
		alarmCount: `2${i}`,
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
						프린트
					</Button>
				</div>
			</div>
			<CardTable hasLink={true} data={data} dataType={dataType} />
		</>
	);
}
