import Button from "@/components/button";
import CardTable from "@/components/card-table";
import Filter from "@/components/filter";
import { useLangData } from "@/contexts/langContext";

export default function Facility() {
	const { common } = useLangData();
	const dataType: string[] = ["번호", `${common?.get("C4117")}`, `${common?.get("C5082")}`, "Status"];
	const data = Array.from(Array(15).keys()).map((i) => ({
		no: i + 1,
		location: `${common?.get("C6306")}-${i + 1}`,
		alarmDetail: "-",
		alarmType: "OK",
	}));

	return (
		<>
			<div className="flex flex-wrap items-center justify-between">
				<div className="flex gap-1">
					<Filter type="dateRange" />
					<Filter type="station" />
					<Filter type="alarmPriority" />
					<Filter type="routeDirection" />
				</div>
				<div></div>
			</div>
			<CardTable hasLink={true} pathname="alarm/detail" data={data} dataType={dataType} />
		</>
	);
}
