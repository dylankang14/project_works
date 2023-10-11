import React from "react";
import CardTable from "./card-table";

export default function CardAlarmType() {
	const dataType: string[] = [
		"검측항목",
		"알람/조치완료/완료율",
		"즉시조치/조치완료/완료율",
		"전체알람/조치완료/완료율",
	];
	const data = [
		{
			title: "전차선 높이/편위/마모",
			av: "5/2/40%",
			iv: "5/2/40%",
			total: "5/2/40%",
		},
		{
			title: "판토그래프 거동 검측",
			av: "5/2/40%",
			iv: "5/2/40%",
			total: "5/2/40%",
		},
		{
			title: "강체전차선로(Tbar)",
			av: "5/2/40%",
			iv: "5/2/40%",
			total: "5/2/40%",
		},
		{
			title: "터널벽면 결함 검측",
			av: "5/2/40%",
			iv: "5/2/40%",
			total: "5/2/40%",
		},
		{
			title: "침목 및 체결구 탈락 검사",
			av: "5/2/40%",
			iv: "5/2/40%",
			total: "5/2/40%",
		},
	];
	return <CardTable title="검측항목별 알람정보" pathname="alarm/list" hasLink={true} data={data} dataType={dataType} />;
}
