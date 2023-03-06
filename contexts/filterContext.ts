import { createContext, ReactNode, useMemo, useState } from "react";

interface State {
	date?: string | null;
	stationRange?: string | null;
	alarmType?: object | null;
	alarmPriority?: string | null;
	routeDirection?: string | null;
}

interface FilterContext {
	date?: string | null;
	stationRange?: string | null;
	alarmType?: object | null;
	alarmPriority?: string | null;
	routeDirection?: string | null;
}

const FilterContext = createContext<FilterContext>({});

export const FilterDataProvider = ({ children }: { children: ReactNode }) => {
	const [filterState, setFilterState] = useState({} as State);

	const value = useMemo(() => {
		const onDateChange = (date: string) => {
			setFilterState({ ...filterState, date });
		};
	}, [filterState]);
};
