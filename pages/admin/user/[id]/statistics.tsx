import Button from "@/components/button";
import CardSummary from "@/components/card-summary";
import CardTable from "@/components/card-table";
import Filter from "@/components/filter";
import HeaderFilter from "@/components/header-filter";

export default function UserStatistics() {
	const dataType: string[] = ["유저", "소속", "직위", "권한", "알람 조치완료", "즉시조치 조치완료", "전체 조치완료"];
	const data = Array.from(Array(20).keys()).map((i) => ({
		name: `유저-${i}`,
		office: `사업소-${i}`,
		position: `대리`,
		permission: `유저`,
		av: `${i}`,
		iv: `${i}`,
		total: `${i * 2}`,
	}));
	return (
		<>
			<div className="flex items-center justify-between">
				<HeaderFilter />
			</div>
			<CardSummary />
			<CardTable hasLink={true} pathname="admin/user" data={data} dataType={dataType} />
		</>
	);
}
