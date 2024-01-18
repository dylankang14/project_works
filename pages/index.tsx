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
import CardTable from "@/components/card-table";
import { inspect } from "@/constants/constants";

export interface AlarmType {
	jsondata: AlarmJsonDataType;
	[key: string]: any;
}

type AlarmJsonDataType = string;

export default function Home() {
	const [isDrawerOpen, setIsDrawerOpen] = useState(false);
	const { width } = useWindowDimensions();
	const filterParams = {
		workclass: 0,
		priority: [1, 3],
		startDate: "2023-03-19 10:39:36.910",
		endDate: "2023-12-20 10:39:38.910",
		size: 10,
		page: 1,
	};
	const onSubmit = () => {
		const filterData = { workclass: 123, priority: 123, startDate: 123, endDate: 123, size: 123, page: 1 };
		console.log(
			filterData.workclass,
			filterData.priority,
			filterData.startDate,
			filterData.endDate,
			filterData.size,
			filterData.page
		);
	};
	const { data, error, isLoading } = useSWR<AlarmType[]>(
		"http://localhost:8080/Alarm/LogAlarm?workclass=0&priority=1,3&startDate=2023-03-19 10:39:36.910&endDate=2023-12-20 10:39:38.910&size=10&page=1"
	);

	console.log(data);

	console.log(data && data.map((i) => JSON.parse(i.jsondata)));

	// const [test, { data }] = useMutation("http://192.168.0.166:8080/API/Master/CommonProcedureResult");
	// const test2 = () => {
	// 	test({ ParamList: ["dfdf"], ProcedureName: "getAlarmCode" });
	// };
	// useEffect(() => {
	// 	test({ ParamList: ["dfdf"], ProcedureName: "getAlarmType" });
	// 	return () => {};
	// }, [test]);

	const alarmData =
		data &&
		data.map((i) => {
			const jsonData = JSON.parse(i.jsondata);
			const date = new Date(i.deveventtime);
			console.log(typeof date + "time " + date);

			const obj = {
				datetime: date.toLocaleString(),
				locale: inspect.locale[jsonData.Header.EquipmentID],
				trainNumber: 123,
				trainSpeed: 80,
				totalPanto: 10,
				totalAlarm: 2,
			};

			return obj;
		});

	const dataType: string[] = ["검측일시", "검측소", "열차번호", "차량속도", "판토수", "알람수"];

	return (
		<>
			<div className="print:hidden">
				<HeaderFilter />
			</div>
			{!isLoading && alarmData ? (
				<CardTable hasLink={true} pathname={`alarm/detail/`} data={alarmData} dataType={dataType} pageSize={20} />
			) : (
				""
			)}
		</>
	);
}
