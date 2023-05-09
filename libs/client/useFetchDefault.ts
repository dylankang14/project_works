import { useFilterAPI } from "@/contexts/filterContext";
import useSWR from "swr";

export default function useFetchDefault(url: string, payload: string) {
	const { onAlarmPriorityChange, onAlarmTypeChange, onDateRangeChange, onRouteDirectionChange, onStationRangeChange } =
		useFilterAPI();
	const fetcher = (url: string) => fetch(url).then((response) => response.json());
	const { data } = useSWR(url, fetcher, {
		onSuccess: (data) => {
			const filterData = data.map((i: any) => i[payload]);
			console.log("!! : ", filterData);

			switch (payload) {
				case "ALARMTYPE_ID":
					console.log("~!!");

					onAlarmTypeChange(filterData);
					break;
				default:
					break;
			}
			// dispatch({ type: "updateAlarmType", alarmType: temp });
		},
	});
	return data;
}
