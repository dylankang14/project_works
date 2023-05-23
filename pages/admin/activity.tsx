import Button from "@/components/button";
import Card from "@/components/card";
import CardTable from "@/components/card-table";
import Title from "@/components/content-title";
import Filter from "@/components/filter";
import { useLangData } from "@/contexts/langContext";

export default function Activity() {
	const { common } = useLangData();
	const dataType: string[] = [
		"No",
		`${common?.get("C1133")} DateTime`,
		"Logout DateTime",
		`${common?.get("C1133")} IP`,
	];
	const data = Array.from(Array(10).keys()).map((i) => ({
		id: i,
		loginDateTime: "2022.12.21 09:30:05",
		logoutDateTime: "2022.12.21 10:30:05",
		loginIp: "172.111.0.123",
	}));
	return (
		<div className="a">
			<Title title={`${common?.get("C1133")} ${common?.get("C0021")}`} />
			<div className="flex items-center justify-between">
				<Filter type="date" />
				<Button size="sm" color="slate" icon="print" iconPosition="right">
					Print
				</Button>
			</div>
			<Card title="로그인 통계 그래프">
				<div className="p-4">
					<div className="flex h-52 items-center justify-center bg-gray-100">{common?.get("C4116")}</div>
				</div>
			</Card>
			<CardTable title={`${common?.get("C1133")} ${common?.get("C0021")}`} data={data} dataType={dataType} />
		</div>
	);
}
