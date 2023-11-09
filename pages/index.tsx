import Button from "@/components/button";
import CardSummary from "@/components/card-summary";
import Filter from "@/components/filter";
import CardAlarmType from "@/components/card-alarm-type";
import Card from "@/components/card";
import StationRoute from "@/components/station-route";
import useMutation from "@/libs/client/useMutation";
import useSWR from "swr";
import { useEffect, useState } from "react";
import useWindowDimensions from "@/libs/client/useWindowDimensions";
import ModalFilter from "@/components/modal-filter";
import Input from "@/components/input";
import HeaderFilter from "@/components/header-filter";
import CardStatistics from "@/components/card-statistics";

export default function Home() {
	const [isDrawerOpen, setIsDrawerOpen] = useState(false);
	const { width } = useWindowDimensions();
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
			<div className="print:hidden">
				<HeaderFilter />
			</div>
		</>
	);
}
