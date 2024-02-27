import { useReducer, useState } from "react";
import useSWR, { mutate } from "swr";
import { fetcher, getType } from "./utility";
import { useFilterData } from "@/contexts/filterContext";

export interface updateSearchParamsType {
	[key: string]: any;
}
interface PointType {
	point: number;
}
interface SearchParamsType {
	startDate: string;
	endDate: string;
	train: string | null;
	page: number;
	limit: number;
	[key: string]: any;
}
type Actions = { type: "updateQuery" };

export default function useAlarmList() {
	const { dateRange, inspectionPoint, trainNumber } = useFilterData();

	// const points = defaultSearchParams.inspectionPoint.map((i: any) => i.CONTAINER_FK);
	const points = inspectionPoint;
	const pointParams = new URLSearchParams();
	points.forEach((value: any) => pointParams.append("point", value));
	const pointQueryString = `${pointParams.toString()}`;

	const reducer = (state: SearchParamsType, action: Actions) => {
		switch (action.type) {
			case "updateQuery":
				return {
					...state,
					startDate: dateRange.startDate.toISOString(),
					endDate: dateRange.endDate.toISOString(),
					pointQueryString,
					train: trainNumber,
					page: 1,
					limit: 20,
				};
		}
	};
	const initialFilterState = {
		startDate: dateRange.startDate.toISOString(),
		endDate: dateRange.endDate.toISOString(),
		pointQueryString,
		train: trainNumber,
		page: 1,
		limit: 20,
	};
	const [state, dispatch] = useReducer(reducer, initialFilterState);
	// const [searchParams, setSearchParams] = useState<SearchParamsType>({
	// 	startDate: dateRange.startDate.toISOString(),
	// 	endDate: dateRange.endDate.toISOString(),
	// 	train: trainNumber,
	// 	page: 1,
	// 	limit: 20,
	// });
	console.log("params", state);
	let queryStrings = "";
	Object.entries(state).map(([key, value], index) => {
		queryStrings += `${index !== 0 ? "&" : ""}${key === "pointQueryString" ? value : key + "=" + value}`;
	});
	console.log("q", queryStrings);

	const key = queryStrings ? `http://192.168.0.204:8080/alarm/list?${queryStrings}` : null;
	const { data, isLoading, error, mutate } = useSWR(key, fetcher);
	const performSearch = () => {
		updateSearchParams();
		// mutate();
	};
	const updateSearchParams = () => {
		dispatch({ type: "updateQuery" });
	};

	return {
		state,
		search: performSearch,
		data,
		isLoading,
		error,
	};
}
