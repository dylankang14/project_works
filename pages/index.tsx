import Button from "@/components/button";
import CardSummary from "@/components/card-summary";
import Filter from "@/components/filter";
import CardAlarmType from "@/components/card-alarm-type";
import Card from "@/components/card";
import StationRoute from "@/components/station-route";
import useSWR from "swr";
import useFilter from "@/libs/client/useFilter";

export default function Home() {
	// const { data, error } = useSWR("LJW/LJW");
	const [filters, setFilters] = useFilter();
	console.log(filters);

	return (
		<>
			<div className="flex flex-wrap items-center justify-between">
				<div className="flex flex-1 gap-1">
					<Filter type="date" />
					<Filter type="station" />
					<Filter type="alarmType" />
				</div>
				<div>
					<Button size="sm" color="slate" icon="print" iconPosition="right">
						프린트
					</Button>
				</div>
			</div>
			<CardSummary />
			<Card className="p-4">
				<StationRoute />
			</Card>
			<CardAlarmType />
		</>
	);
}
