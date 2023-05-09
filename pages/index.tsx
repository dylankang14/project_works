import Button from "@/components/button";
import CardSummary from "@/components/card-summary";
import Filter from "@/components/filter";
import CardAlarmType from "@/components/card-alarm-type";
import Card from "@/components/card";
import StationRoute from "@/components/station-route";
import useMutation from "@/libs/client/useMutation";
import useSWR from "swr";
import { useEffect } from "react";

export default function Home() {
	// const { data, error, isLoading } = useSWR(
	// 	"http://192.168.0.168:8080/API/Master/CommonProcedureResult?procedureName=getAlarmType"
	// );
	// const [test, { data }] = useMutation("http://192.168.0.166:8080/API/Master/CommonProcedureResult");
	// const test2 = () => {
	// 	test({ ParamList: ["dfdf"], ProcedureName: "getAlarmCode" });
	// };
	// useEffect(() => {
	// 	test({ ParamList: ["dfdf"], ProcedureName: "getAlarmType" });
	// 	return () => {};
	// }, [test]);

	return (
		<>
			<div className="flex flex-wrap items-center justify-between print:hidden">
				<div className="flex gap-1">
					<Filter type="dateRange" />
					<Filter type="station" />
					<Filter type="alarmType" />
					<Filter type="alarmPriority" />
					<Filter type="routeDirection" />
				</div>
				<div>
					{/* <button onClick={test2}>click</button> */}
					<Button size="sm" color="slate" icon="print" iconPosition="right" onClick={() => window.print()}>
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
