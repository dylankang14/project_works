import Card from "@/components/card";
import CardTable from "@/components/card-table";
import CardTableAlarmDetail from "@/components/card-table-alarm-detail";
import Icon from "@/components/icon";
import useWindowDimensions from "@/libs/client/useWindowDimensions";
import { calculateDecimal, getType } from "@/libs/client/utility";
import { useRouter } from "next/router";
import { useEffect, useRef, useState } from "react";
import useSWR, { useSWRConfig } from "swr";

export default function DetailReport() {
	const router = useRouter();
	const { device } = useWindowDimensions();
	const { data, isLoading, error } = useSWR(`http://192.168.0.204:8080/alarm/detail/5708`);
	const {
		data: point_event,
		isLoading: pointIsLoading,
		error: pointError,
	} = useSWR(`http://192.168.0.204:8080/alarm/5708`);

	// const { cache } = useSWRConfig();
	// console.log("cache : ", cache);

	const radioItems = [
		{ text: <Icon type="queue" />, value: "queue" },
		{ text: <Icon type="list" />, value: "list" },
	];

	const point_data = !pointIsLoading &&
		point_event &&
		point_event.ok && { ...point_event.hstation_event, json_DATA: JSON.parse(point_event.hstation_event.json_DATA) };

	const alarmDetailData =
		!isLoading &&
		data &&
		data.ok &&
		data.result.map((i: any) => {
			const json_DATA = JSON.parse(i.json_DATA);
			// console.log(json_DATA);

			let alarmCode = {};
			const temp =
				json_DATA &&
				Object.entries(json_DATA.Data.ItemIDMap).map(([k, v], i) => {
					Object.entries(v as object).map(([key, val]) => {
						json_DATA.Data.ItemIDMap[k][key] = calculateDecimal(val);
					});
					return v;
				});
			alarmCode = Object.assign(alarmCode, ...temp);
			const alarmPriority = json_DATA.Data.StateMap;

			const date = new Date(i.dev_EVENT_TIME);
			const obj = {
				id: i.log_ID,
				priority: i.priority,
				// datetime: date.toLocaleString(),
				datetime: date,
				fileName: i.report_FILENAME && i.report_FILENAME.replace(".pdf", ""),
				alarmCode,
				alarmPriority,
			};
			// const result = Object.assign(obj, d);
			// console.log(result);

			return obj;
		});
	// console.log(alarmDetailData);

	const [radioDefault, setRadioDefault] = useState("queue");
	// const data = {
	// 	id: 1,
	// 	priority: 1,
	// 	fixed: false,
	// };

	const dataType: string[] = [
		"X축",
		"Y축",
		"Z축",
		"주습판체 파손/결함",
		"프로텍터 결함 L",
		"가이드혼 결함 L",
		"프로텍터 결함 R",
		"가이드혼 결함 R",
		"타흔검사",
	];

	return (
		<>
			{/* <div className="flex flex-wrap items-center justify-between print:hidden">
				<HeaderFilter />
				<RadioGroup items={radioItems} defaultChecked={radioDefault} onChangeRadio={(val) => setRadioDefault(val)} />
			</div> */}
			<Card>
				<div className="flex flex-wrap py-2 text-center md:py-0">
					<div className="flex flex-grow flex-row flex-wrap md:flex-col">
						<div className="px-3 py-1 font-semibold md:border-b md:py-3">검측일시</div>
						<div className="px-3 py-1 md:py-3">{new Date(point_data.dev_EVENT_TIME).toLocaleString()}</div>
					</div>
					<div className="flex flex-grow flex-row flex-wrap md:flex-col">
						<div className="px-3 py-1 font-semibold md:border-b md:py-3">검측소</div>
						<div className="px-3 py-1 md:py-3">{point_data.json_DATA?.Data.ContainerName}</div>
					</div>
					<div className="flex flex-grow flex-row flex-wrap md:flex-col">
						<div className="px-3 py-1 font-semibold md:border-b md:py-3">열차번호</div>
						<div className="px-3 py-1 md:py-3">{point_data.json_DATA?.Data.TrainNumber}</div>
					</div>
					<div className="flex flex-grow flex-row flex-wrap md:flex-col">
						<div className="px-3 py-1 font-semibold md:border-b md:py-3">차량속도</div>
						<div className="px-3 py-1 md:py-3">{point_data.json_DATA?.Data.Speed} km/h</div>
					</div>
					<div className="flex flex-grow flex-row flex-wrap md:flex-col">
						<div className="px-3 py-1 font-semibold md:border-b md:py-3">판토수</div>
						<div className="px-3 py-1 md:py-3">{point_data.count1}</div>
					</div>
					<div className="flex flex-grow flex-row flex-wrap md:flex-col">
						<div className="px-3 py-1 font-semibold md:border-b md:py-3">알람갯수</div>
						<div className="px-3 py-1 md:py-3">{point_data.count2}</div>
					</div>
				</div>
			</Card>
			{!isLoading && data.ok && alarmDetailData ? (
				<CardTableAlarmDetail
					hasLink={true}
					pathname={`alarm/report`}
					data={alarmDetailData}
					dataType={dataType}
					pageSize={20}
				/>
			) : (
				<Card className="select-none py-8 text-center text-base font-medium">
					해당 조건에 해당하는 알람이 없습니다.
				</Card>
			)}
			{/* <div className="flex flex-wrap items-center">
				<CardAlarmDetail data={data} />
			</div> */}
			{/* <div className="mt-4 flex justify-center gap-2 print:hidden">
				<Button
					size="md"
					onClick={() => {
						router.back();
					}}
				>
					뒤로가기
				</Button>
			</div> */}
		</>
	);
}
