import Button from "@/components/button";
import CardTable from "@/components/card-table";
import Filter from "@/components/filter";

export default function Facility() {
	const dataType: string[] = ["순서", "번호", "위치", "내용", "상태"];
	const data = Array.from(Array(15).keys()).map((i) => ({
		id: i,
		no: i,
		location: `전철주-1${i}`,
		alarmDetail: "-",
		alarmType: "양호",
	}));

	return (
		<>
			<div className="flex items-center justify-between">
				<div className="flex gap-1">
					<Filter type="station" />
				</div>
				<div>
					<Button size="sm" color="slate" icon="print" iconPosition="right">
						프린트
					</Button>
				</div>
			</div>
			<CardTable hasLink={true} pathname="alarm/detail" data={data} dataType={dataType} pagination={true} />
		</>
	);
}
