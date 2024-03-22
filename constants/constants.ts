interface InspectTypes {
	locale: {
		[key: number]: string;
	};
}
interface AlarmTypes {
	type: {
		[key: number]: string;
	};
}

export const inspect: InspectTypes = {
	locale: {
		0: "금정 상선",
		1: "금정 하선",
		2: "신도림 상선",
		3: "신도림 하선",
		4: "독산 상선",
		5: "독산 하선",
	},
};

export const alarm: AlarmTypes = {
	type: {
		0: "X축",
		1: "Y축",
		2: "Z축",
		3: "주습판 마모",
		4: "프로텍터 결함",
		5: "가이드혼 결함",
		6: "판토중심 편위",
		7: "비접촉식 압상량",
	},
};
