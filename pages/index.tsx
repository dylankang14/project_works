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

	const takeSize = 20;
	const skipSize = 0;

	const { state, updateQueryParams, search, data, isLoading, error } = useAlarmList();

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
				totalPanto: i.param1,
				totalAlarm: i.count1 + i.count2,
			};

			return obj;
		});
	const linkId = data && data.result.map((i: any) => i.ref_LOG_ID);

	const dataType: string[] = ["검측일시", "검측소", "열차번호", "차량속도", "판토수", "알람수"];

	return (
		<>
			<div className="print:hidden">
				<HeaderFilter search={search} totalCount={data?.totalCount} />
			</div>
			<CardTable
				hasLink={true}
				pathname={`/alarm/detail`}
				data={alarmData}
				dataType={dataType}
				pageSize={takeSize}
				totalCount={data?.totalCount}
				updateQueryParams={updateQueryParams}
			/>
		</>
	);
}
