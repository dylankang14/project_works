import { createContext, ReactNode, useContext, useMemo, useReducer } from "react";

interface FilterData {
	dateRange: Date[];
	stationRange?: { from: number | null; to: number | null };
	alarmType: number[];
	alarmPriority?: number[];
	routeDirection?: number[];
}

interface FilterAPI {
	onDateRangeChange: (date: Date[]) => void;
	onStationRangeChange: (stationRange: { from: number | null; to: number | null }) => void;
	onAlarmTypeChange: (alarmType: number[]) => void;
	onAlarmPriorityChange: (alarmPriority: number[]) => void;
	onRouteDirectionChange: (routeDirection: number[]) => void;
}

type Actions =
	| { type: "updateDateRange"; dateRange: Date[] }
	| { type: "updateStationRange"; stationRange: { from: number | null; to: number | null } }
	| { type: "updateAlarmType"; alarmType: number[] }
	| { type: "updateAlarmPriority"; alarmPriority: number[] }
	| { type: "updateRouteDirection"; routeDirection: number[] };

export const FilterDataContext = createContext<FilterData>({} as FilterData);
export const FilterAPIContext = createContext<FilterAPI>({} as FilterAPI);

const reducer = (state: FilterData, action: Actions): FilterData => {
	switch (action.type) {
		case "updateDateRange":
			return { ...state, dateRange: action.dateRange };
		case "updateStationRange":
			return { ...state, stationRange: action.stationRange };
		case "updateAlarmType":
			return { ...state, alarmType: action.alarmType };
		case "updateAlarmPriority":
			return { ...state, alarmPriority: action.alarmPriority };
		case "updateRouteDirection":
			return { ...state, routeDirection: action.routeDirection };
		default:
			return state;
	}
};

export function FilterProvider({ children }: { children: ReactNode }) {
	const defaultDate = new Date();
	defaultDate.setDate(defaultDate.getDate() - 1);

	const [state, dispatch] = useReducer(reducer, {
		dateRange: [defaultDate, defaultDate],
		stationRange: { from: 1, to: 49 },
		alarmType: [
			1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25, 26, 27, 28, 29,
		],
		alarmPriority: [1, 2, 3],
		routeDirection: [1, 2],
	} as FilterData);
	const api = useMemo(() => {
		const onDateRangeChange = (dateRange: Date[]) => {
			dispatch({ type: "updateDateRange", dateRange });
		};
		const onStationRangeChange = (stationRange: { from: number | null; to: number | null }) => {
			dispatch({ type: "updateStationRange", stationRange });
		};
		const onAlarmTypeChange = (alarmType: number[]) => {
			dispatch({ type: "updateAlarmType", alarmType });
		};
		const onAlarmPriorityChange = (alarmPriority: number[]) => {
			dispatch({ type: "updateAlarmPriority", alarmPriority });
		};
		const onRouteDirectionChange = (routeDirection: number[]) => {
			dispatch({ type: "updateRouteDirection", routeDirection });
		};
		return {
			onDateRangeChange,
			onStationRangeChange,
			onAlarmTypeChange,
			onAlarmPriorityChange,
			onRouteDirectionChange,
		};
	}, []);

	return (
		<FilterAPIContext.Provider value={api}>
			<FilterDataContext.Provider value={state}>{children}</FilterDataContext.Provider>
		</FilterAPIContext.Provider>
	);
}

export const useFilterAPI = () => useContext(FilterAPIContext);
export const useFilterData = () => useContext(FilterDataContext);
