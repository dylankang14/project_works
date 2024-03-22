import { useMemo, useReducer, useState } from "react";
import useSWR, { mutate } from "swr";
import { fetcher, getType } from "./utility";
import { useFilterData } from "@/contexts/filterContext";

export interface updateQueryParamsType {
	[key: string]: any;
}
interface PointType {
	point: number;
}
interface SearchParamsType {
	startDate: string;
	endDate: string;
	train: string | null;
	take: number;
	skip: number;
	[key: string]: any;
}
type Actions = { type: "updateQuery"; queryParams?: { [key: string]: any } };

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
					...action.queryParams,
				};
		}
	};
	const initialFilterState = {
		startDate: dateRange.startDate.toISOString(),
		endDate: dateRange.endDate.toISOString(),
		pointQueryString,
		train: trainNumber,
		take: 20,
		skip: 0,
	};
	const [state, dispatch] = useReducer(reducer, initialFilterState);
	// const [searchParams, setSearchParams] = useState<SearchParamsType>({
	// 	startDate: dateRange.startDate.toISOString(),
	// 	endDate: dateRange.endDate.toISOString(),
	// 	train: trainNumber,
	// 	page: 1,
	// 	limit: 20,
	// });
	let queryStrings = "";
	Object.entries(state).map(([key, value], index) => {
		queryStrings += `${index !== 0 ? "&" : ""}${key === "pointQueryString" ? value : key + "=" + value}`;
	});

	const key = queryStrings ? `http://121.139.31.25:5411/alarm/list?${queryStrings}` : null;
	const { data, isLoading, error, mutate } = useSWR(key);
	const performSearch = () => {
		updateQueryParams();
		// mutate();
	};
	const updateQueryParams = useMemo(() => {
		return (queryParams?: { [key: string]: any }) => {
			dispatch({ type: "updateQuery", queryParams });
		};
	}, []);

	return {
		state,
		updateQueryParams,
		search: performSearch,
		data,
		isLoading,
		error,
	};
}
