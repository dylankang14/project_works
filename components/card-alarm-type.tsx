import React from "react";
import CardTable from "./card-table";
import { useLangData } from "@/contexts/langContext";

export default function CardAlarmType() {
	const { common } = useLangData();

	const dataType: string[] = [
		`${common?.get("C4702")}`,
		`${common?.get("C4702")}/${common?.get("C0080")}/%`,
		`${common?.get("C0031")}/${common?.get("C0080")}/%`,
		`${common?.get("C2305")} ${common?.get("C4702")}/${common?.get("C0080")}/%`,
	];
	const data = Array.from(Array(50).keys()).map((i) => ({
		title: `${common?.get("C4712")} - ${i}`,
		av: "5/2/40%",
		iv: "5/2/40%",
		total: "5/2/40%",
	}));
	return (
		<CardTable title={common?.get("C4340")} pathname="alarm/list" hasLink={true} data={data} dataType={dataType} />
	);
}
