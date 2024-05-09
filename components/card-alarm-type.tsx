import React from "react";
import CardTable from "./card-table";

export default function CardAlarmType() {
	const dataType: string[] = ["검측항목", "전체알람", "조치완료", "완료율"];
	const data = [
		{
			title: "전차선 높이/편위/마모",
			av: "10",
			fixed: "7",
			ratio: "70%",
		},
		{
			title: "팬터그래프 충격",
			av: "10",
			fixed: "7",
			ratio: "70%",
		},
		{
			title: "전차선로",
			av: "10",
			fixed: "7",
			ratio: "70%",
		},
		{
			title: "유도배수동판",
			av: "10",
			fixed: "7",
			ratio: "70%",
		},
		{
			title: "침목 및 체결구 검사",
			av: "10",
			fixed: "7",
			ratio: "70%",
		},
	];
	return <CardTable title="검측항목별 알람정보" pathname="alarm/list" hasLink={true} data={data} dataType={dataType} />;
}
