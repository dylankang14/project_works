import Button from "@/components/button";
import CardAlarmtype from "@/components/card-alarmtype";
import CardStation from "@/components/card-station";
import CardSummary from "@/components/card-summary";
import Filter from "@/components/filter";
import Layout from "@/components/layout";

export default function Home() {
	return (
		<Layout>
			<div className="flex items-center justify-between">
				<div className="flex gap-1">
					<Filter type="date" />
					<Filter type="station" />
					<Filter type="alarmType" />
				</div>
				<div>
					<Button size="sm" color="slate" text="프린트" icon="print" iconPosition="right" className="my-0" />
				</div>
			</div>
			<CardSummary />
			<CardStation />
			<CardAlarmtype />
		</Layout>
	);
}
