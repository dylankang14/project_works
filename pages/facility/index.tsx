import Button from "@/components/button";
import Card from "@/components/card";
import Filter from "@/components/filter";
import Layout from "@/components/layout";
import Table from "@/components/table";

export default function Facility() {
	const dataType: string[] = ["순서", "시설물명", "전체갯수", "알람갯수"];
	const data = Array.from(Array(10).keys()).map((i) => ({
		id: i,
		name: `시설물-${i}`,
		count: `2${i}`,
		alarmCount: `2${i}`,
	}));

	return (
		<Layout>
			<div className="flex items-center justify-between">
				<div className="flex gap-1">
					<Filter type="station" />
				</div>
				<div>
					<Button size="sm" color="slate" text="프린트" icon="print" iconPosition="right" />
				</div>
			</div>
			<Card>
				<Table data={data} dataType={dataType} />
			</Card>
		</Layout>
	);
}
