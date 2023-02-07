import Button from "@/components/button";
import Card from "@/components/card";
import CardAlarm from "@/components/card-alarm";
import CardSummary from "@/components/card-summary";
import Filter from "@/components/filter";
import Layout from "@/components/layout";
import Pagination from "@/components/pagination";

export default function Fixed() {
	const data = Array.from(Array(5).keys()).map((i) => ({
		id: i,
		priority: i % 2,
		fixed: i % 3 > 1,
	}));
	return (
		<Layout>
			<div className="flex items-center justify-between">
				<div className="flex gap-1">
					<Filter type="date" />
					<Filter type="station" />
					<Filter type="alarmType" />
				</div>
				<div>
					<Button size="sm" color="slate" text="프린트" icon="print" iconPosition="right" />
				</div>
			</div>
			<CardSummary />
			<Card title="로그인 통계 그래프">
				<div className="p-4">
					<div className="flex h-52 items-center justify-center bg-gray-100">그래프 이미지</div>
				</div>
			</Card>
			<div className="">
				{data.map((data) => (
					<CardAlarm key={data.id} data={data} />
				))}
				<Pagination active={1} className="py-2" />
			</div>
		</Layout>
	);
}
