import Button from "@/components/button";
import Filter from "@/components/filter";
import CardTable from "@/components/card-table";
import HeaderFilter from "@/components/header-filter";

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
				<HeaderFilter />
			</div>
			<CardTable hasLink={true} data={data} dataType={dataType} />
		</>
	);
}
