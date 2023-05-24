import Button from "@/components/button";
import Card from "@/components/card";
import CardSummary from "@/components/card-summary";
import Filter from "@/components/filter";
import CardAlarmType from "@/components/card-alarm-type";
import Title from "@/components/content-title";

export default function OfficeStatistics() {
	return (
		<>
			<Title title="서울사업소" />
			<div className="flex items-center justify-between">
				<div className="flex gap-1">
					<Filter type="date" />
					<Filter type="station" />
					<Filter type="alarmType" />
				</div>
				<div></div>
			</div>
			<CardSummary />
			<Card title="로그인 통계 그래프">
				<div className="p-4">
					<div className="flex h-52 items-center justify-center bg-gray-100">그래프 이미지</div>
				</div>
			</Card>
			<CardAlarmType />
		</>
	);
}
