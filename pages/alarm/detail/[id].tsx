import AlarmCriteria from "@/components/alarm-criteria";
import Button from "@/components/button";
import Card from "@/components/card";
import CardAlarmDetail from "@/components/card-alarm-detail";
import CardTable from "@/components/card-table";
import HeaderFilter from "@/components/header-filter";
import Icon from "@/components/icon";
import Loader from "@/components/loader";
import RadioGroup from "@/components/radio-group";
import useWindowDimensions from "@/libs/client/useWindowDimensions";
import { cls, pageToImg, saveAsPdf } from "@/libs/client/utility";
import Image from "next/image";
import { useRouter } from "next/router";
import { useEffect, useRef, useState } from "react";

export default function DetailReport() {
	const router = useRouter();
	const { device } = useWindowDimensions();
	const radioItems = [
		{ text: <Icon type="queue" />, value: "queue" },
		{ text: <Icon type="list" />, value: "list" },
	];
	const [radioDefault, setRadioDefault] = useState("queue");
	const data = {
		id: 1,
		priority: 1,
		fixed: false,
	};

	const alarmData = Array.from(Array(5).keys()).map((i) => ({
		title: `${i + 1}`,
		x: "-0.24",
		y: "0.01",
		z: "0.41",
		wear: "0.02",
		protector: "0.00",
		guidehorn: "0.02",
		panto: "32.25",
		press: "36.25",
	}));

	const dataType: string[] = [
		"No",
		"X축",
		"Y축",
		"Z축",
		"주습판마모",
		"프로텍터 결함",
		"가이드혼 결함",
		"판토중심 편위",
		"비접촉식 압상량",
	];

	return (
		<>
			{/* <div className="flex flex-wrap items-center justify-between print:hidden">
				<HeaderFilter />
				<RadioGroup items={radioItems} defaultChecked={radioDefault} onChangeRadio={(val) => setRadioDefault(val)} />
			</div> */}
			<Card>
				<div className="grid grid-flow-col text-center">
					<div className="">
						<div className="border-b px-2 py-3 pl-4 font-semibold">검측일시</div>
						<div className="px-2 py-3 pl-4">2023.01.01 12:23:40</div>
					</div>
					<div className="">
						<div className="border-b px-2 py-3 font-semibold">검측소</div>
						<div className="px-2 py-3">금정 상선</div>
					</div>
					<div className="">
						<div className="border-b px-2 py-3 font-semibold">열차번호</div>
						<div className="px-2 py-3">456001</div>
					</div>
					<div className="">
						<div className="border-b px-2 py-3 font-semibold">차량속도</div>
						<div className="px-2 py-3">80.12 km/h</div>
					</div>
					<div className="">
						<div className="border-b px-2 py-3 font-semibold">판토수</div>
						<div className="px-2 py-3">6</div>
					</div>
					<div className="">
						<div className="border-b px-2 py-3 pr-4 font-semibold">알람갯수</div>
						<div className="px-2 py-3 pr-4">3</div>
					</div>
				</div>
			</Card>
			<CardTable hasLink={true} pathname={`alarm/detail/`} data={alarmData} dataType={dataType} pageSize={20} />
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
