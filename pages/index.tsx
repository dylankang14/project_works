import Button from "@/components/button";
import CardSummary from "@/components/card-summary";
import Filter from "@/components/filter";
import CardAlarmType from "@/components/card-alarm-type";
import Card from "@/components/card";
import StationRoute from "@/components/station-route";
import useMutation from "@/libs/client/useMutation";
import useSWR from "swr";
import { useEffect, useReducer, useState } from "react";
import useWindowDimensions from "@/libs/client/useWindowDimensions";
import ModalFilter from "@/components/modal-filter";
import Input from "@/components/input";
import HeaderFilter from "@/components/header-filter";
import CardStatistics from "@/components/card-statistics";
import CardTable from "@/components/card-table";
import { inspect } from "@/constants/constants";
import useAlarmList from "@/libs/client/useAlarmList";
import { useDefaultData } from "@/contexts/filterContext";
import Link from "next/link";

export interface AlarmType {
	jsondata: AlarmJsonDataType;
	[key: string]: any;
}

type AlarmJsonDataType = string;

export default function Home() {
	const [isDrawerOpen, setIsDrawerOpen] = useState(false);
	const { width } = useWindowDimensions();
	const { dateRange, inspectionPoint, trainNumber } = useDefaultData();

	// const { data, error, isLoading } = useSWR<AlarmType[]>(
	// 	"http://localhost:8080/Alarm/LogAlarm?workclass=0&priority=1,3&startDate=2023-03-19 10:39:36.910&endDate=2023-12-20 10:39:38.910&size=10&page=1"
	// );

	const { searchParams, updateSearchParams, search, data, isLoading, error } = useAlarmList({
		dateRange,
		inspectionPoint,
		trainNumber,
	});

	// console.log(data);
	console.log(data && data.result.map((i: any) => JSON.parse(i.json_DATA)));

	const alarmData =
		data &&
		data.result.map((i: any) => {
			const json_DATA = JSON.parse(i.json_DATA);
			const date = new Date(i.dev_EVENT_TIME);

			const obj = {
				id: i.ref_LOG_ID,
				datetime: date.toLocaleString(),
				locale: json_DATA.Data.ContainerName,
				trainNumber: i.pt_NUMBER,
				trainSpeed: json_DATA.Data.Speed,
				totalPanto: 10,
				totalAlarm: 2,
			};
			console.log(obj);

			return obj;
		});
	const linkId = data && data.result.map((i: any) => i.ref_LOG_ID);

	const dataType: string[] = ["검측일시", "검측소", "열차번호", "차량속도", "판토수", "알람수"];

	return (
		<>
			<div className="print:hidden">
				<HeaderFilter updateSearchParams={updateSearchParams} search={search} />
				{/* <div className="p-4">
					<Link
						href={`http://192.168.0.204:8080/alarm/report?date=20231211&filename=20231211_105819_42000_4200020001_F00002_0_0_1`} target="_blank"
					>
						테스트 링크
					</Link>
				</div> */}
			</div>
			{!isLoading && data?.ok && alarmData ? (
				<CardTable hasLink={true} pathname={`/alarm/detail/`} data={alarmData} dataType={dataType} pageSize={20} />
			) : (
				<Card className="select-none py-8 text-center text-base font-medium">
					해당 조건에 해당하는 알람이 없습니다.
				</Card>
			)}
		</>
	);
}
