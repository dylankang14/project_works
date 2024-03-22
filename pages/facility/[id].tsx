import Button from "@/components/button";
import CardTable from "@/components/card-table";
import Filter from "@/components/filter";
import HeaderFilter from "@/components/header-filter";

export default function Facility() {
	const dataType: string[] = ["순서", "번호", "위치", "내용", "상태"];
	const data = Array.from(Array(15).keys()).map((i) => ({
		id: i + 1,
		no: i + 1,
		location: `전철주-${i + 1}`,
		alarmDetail: "-",
		alarmType: "양호",
	}));

	return (
		<>
			<div className="flex flex-wrap items-center justify-between">
				<HeaderFilter />
			</div>
			<CardTable hasLink={true} pathname="alarm/detail" data={data} dataType={dataType} />
		</>
	);
}
