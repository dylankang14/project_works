import { useCallback, useEffect, useState } from "react";

interface UseFilterTypes<T> {
	date?: string | null;
	stationRange?: string | null;
	alarmType?: object | null;
	alarmPriority?: string | null;
	routeDirection?: string | null;
}

type UseFilterTypesReturn<T> = [UseFilterTypes<T>, (data: any) => void];

export default function useFilter<T = any>(): UseFilterTypesReturn<T> {
	const [filters, setFilters] = useState<UseFilterTypes<T>>({
		date: null,
		stationRange: null,
		alarmType: null,
		alarmPriority: null,
		routeDirection: null,
	});

	// function updateFilters(data: any) {
	// 	setFilters((prev) => ({ ...prev, ...data }));
	// }

	const updateFilters = useCallback((data: any) => {
		setFilters((prev) => ({ ...prev, ...data }));
	}, []);

	return [filters, updateFilters];
}
