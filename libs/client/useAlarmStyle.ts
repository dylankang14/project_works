import { useEffect, useState } from "react";

interface useAlarmStyleState {
	bg: string;
	color: string;
	bc: string;
}

export default function useAlarmStyle(priority: number, fixed: boolean) {
	const [state, setState] = useState<useAlarmStyleState>({
		bg: "bg-emerald-500",
		color: "color-emerald-500",
		bc: "border border-emerald-500",
	});
	useEffect(() => {
		if (!fixed) {
			switch (priority) {
				case 0:
					setState({
						bg: "bg-amber-500",
						color: "text-amber-500",
						bc: "border border-amber-500",
					});
					break;
				case 1:
					setState({
						bg: "bg-red-500",
						color: "text-red-500",
						bc: "border border-red-500",
					});
					break;
				default:
					break;
			}
		}
	}, [priority, fixed]);
	return state;
}
