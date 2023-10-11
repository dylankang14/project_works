import Button from "@/components/button";
import Filter from "@/components/filter";
import CardTable from "@/components/card-table";
import HeaderFilter from "@/components/header-filter";

export default function Facility() {
	const dataType: string[] = ["순서", "시설물명", "전체갯수", "알람갯수"];
	const data = [
		{
			id: 0,
			name: "롱이어",
			count: `1234`,
			alarmCount: `12`,
		},
		{
			id: 1,
			name: "엔드어프로치",
			count: `1234`,
			alarmCount: `12`,
		},
		{
			id: 2,
			name: "지지금구",
			count: `1234`,
			alarmCount: `12`,
		},
		{
			id: 3,
			name: "애자",
			count: `1234`,
			alarmCount: `12`,
		},
		{
			id: 4,
			name: "흐름방지턴버클",
			count: `1234`,
			alarmCount: `12`,
		},
		{
			id: 5,
			name: "흐름방지애자",
			count: `1234`,
			alarmCount: `12`,
		},
		{
			id: 6,
			name: "유도배수동판",
			count: `1234`,
			alarmCount: `12`,
		},
		{
			id: 7,
			name: "선로체결구",
			count: `1234`,
			alarmCount: `12`,
		},
		{
			id: 8,
			name: "침목",
			count: `1234`,
			alarmCount: `12`,
		},
	];

	return (
		<>
			<div className="flex flex-wrap items-center justify-between print:hidden">
				<HeaderFilter />
			</div>
			<CardTable hasLink={true} data={data} dataType={dataType} />
		</>
	);
}
