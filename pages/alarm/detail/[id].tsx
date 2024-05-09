import AlarmCriteria from "@/components/alarm-criteria";
import Button from "@/components/button";
import CardAlarmDetail from "@/components/card-alarm-detail";
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
		priority: 0,
		fixed: false,
	};

	return (
		<>
			{/* <div className="flex flex-wrap items-center justify-between print:hidden">
				<HeaderFilter />
				<RadioGroup items={radioItems} defaultChecked={radioDefault} onChangeRadio={(val) => setRadioDefault(val)} />
			</div> */}
			<div className="flex flex-wrap items-center">
				<CardAlarmDetail data={data} />
			</div>
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
