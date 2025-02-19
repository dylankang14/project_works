import Button from "@/components/button";
import Card from "@/components/card";
import CardSummary from "@/components/card-summary";
import CardTable from "@/components/card-table";
import Filter from "@/components/filter";
import HeaderFilter from "@/components/header-filter";

export default function AllOfficeStatistics() {
	const dataType: string[] = ["사업소", "알람/조치완료", "즉시조치/조치완료", "전체알람/조치완료"];
	const data = Array.from(Array(10).keys()).map((i) => ({
		name: `사업소-${i}`,
		av: `20 / ${i}`,
		iv: `12 / ${i}`,
		total: `32 / ${i * 2}`,
	}));
	return (
		<>
			<div className="flex items-center justify-between">
				<HeaderFilter />
			</div>
			<CardSummary />
			<Card title="전체 통계 그래프">
				<div className="p-4">
					<div className="flex h-52 items-center justify-center bg-gray-100">그래프 이미지</div>
				</div>
			</Card>
			<CardTable hasLink={true} pathname="admin/office" data={data} dataType={dataType} />
		</>
	);
}
