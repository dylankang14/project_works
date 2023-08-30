import React from "react";
import CardTable from "./card-table";

export default function CardAlarmType() {
	const dataType: string[] = [
		"검측항목",
		"알람/조치완료/완료율",
		"즉시조치/조치완료/완료율",
		"전체알람/조치완료/완료율",
	];
	const data = Array.from(Array(50).keys()).map((i) => ({
		title: `검측항목 - ${i}`,
		av: "5/2/40%",
		iv: "5/2/40%",
		total: "5/2/40%",
	}));
	return <CardTable title="검측항목별 알람정보" pathname="alarm/list" hasLink={true} data={data} dataType={dataType} />;
}
