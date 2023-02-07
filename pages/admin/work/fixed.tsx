import Button from "@/components/button";
import Card from "@/components/card";
import CardAlarm from "@/components/card-alarm";
import CardSummary from "@/components/card-summary";
import Filter from "@/components/filter";
import Layout from "@/components/layout";
import Pagination from "@/components/pagination";

export default function Fixed() {
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
			{[
				[1, true],
				[2, true],
				[1, true],
				[2, true],
				[2, true],
			].map((i, idx) => (
				<CardAlarm key={idx} alarmType={i[0]} fixed={i[1]} />
			))}
			<Pagination active={true} />
		</Layout>
	);
}
