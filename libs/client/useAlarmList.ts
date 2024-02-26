import { useState } from "react";
import useSWR, { mutate } from "swr";
import { fetcher } from "./utility";

export interface updateSearchParamsType {
	[key: string]: any;
}
interface PointType {
	point: number;
}
interface SearchParamsType {
	startDate: string;
	endDate: string;
	train: string;
	[key: string]: any;
}
export default function useAlarmList(defaultSearchParams: updateSearchParamsType) {
	const points = defaultSearchParams.inspectionPoint.map((i: any) => i.CONTAINER_FK);
	const pointParams = new URLSearchParams();
	points.forEach((value: any) => pointParams.append("point", value));
	const pointQueryString = `${pointParams.toString()}`;

	const [searchParams, setSearchParams] = useState<SearchParamsType>({
		startDate: encodeURIComponent(defaultSearchParams.dateRange.startDate.toISOString()),
		endDate: encodeURIComponent(defaultSearchParams.dateRange.endDate.toISOString()),
		train: defaultSearchParams.trainNumber,
	});
	console.log(searchParams);
	let queryStrings = pointQueryString;
	Object.entries(searchParams).map(([key, value], index) => {
		queryStrings += `&${key}=${value}`;
	});
	console.log(queryStrings);

	const key = queryStrings ? `http://192.168.0.204:8080/alarm/list?${queryStrings}` : null;
	const { data, isLoading, error, mutate } = useSWR(key, fetcher);
	const performSearch = () => {
		mutate();
	};
	const updateSearchParams = (param: updateSearchParamsType) => {
		setSearchParams((prevParams: SearchParamsType) => ({ ...prevParams, ...param }));
	};

	return {
		searchParams,
		updateSearchParams,
		search: performSearch,
		data,
		isLoading,
		error,
	};
}
