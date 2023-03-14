import { createContext, ReactNode, useContext, useMemo, useReducer } from "react";

interface AlarmType {
	id: number;
	name: string;
}
interface FilterData {
	date: string;
	stationRange?: { from: number | null; to: number | null };
	alarmType: number[];
	alarmPriority?: string | null;
	routeDirection?: string | null;
}

interface FilterAPI {
	onDateChange: (date: string) => void;
	onStationRangeChange: (stationRange: { from: number | null; to: number | null }) => void;
	onAlarmTypeChange: (alarmType: number[]) => void;
	onAlarmPriorityChange: (alarmPriority: string) => void;
	onRouteDirectionChange: (routeDirection: string) => void;
}

type Actions =
	| { type: "updateDate"; date: string }
	| { type: "updateStationRange"; stationRange: { from: number | null; to: number | null } }
	| { type: "updateAlarmType"; alarmType: number[] }
	| { type: "updateAlarmPriority"; alarmPriority: string }
	| { type: "updateRouteDirection"; routeDirection: string };

export const FilterDataContext = createContext<FilterData>({} as FilterData);
export const FilterAPIContext = createContext<FilterAPI>({} as FilterAPI);

const reducer = (state: FilterData, action: Actions): FilterData => {
	switch (action.type) {
		case "updateDate":
			return { ...state, date: action.date };
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
	const [state, dispatch] = useReducer(reducer, {
		stationRange: { from: 1, to: 49 },
		alarmType: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12],
	} as FilterData);
	const api = useMemo(() => {
		const onDateChange = (date: string) => {
			dispatch({ type: "updateDate", date });
		};
		const onStationRangeChange = (stationRange: { from: number | null; to: number | null }) => {
			dispatch({ type: "updateStationRange", stationRange });
		};
		const onAlarmTypeChange = (alarmType: number[]) => {
			dispatch({ type: "updateAlarmType", alarmType });
		};
		const onAlarmPriorityChange = (alarmPriority: string) => {
			dispatch({ type: "updateAlarmPriority", alarmPriority });
		};
		const onRouteDirectionChange = (routeDirection: string) => {
			dispatch({ type: "updateRouteDirection", routeDirection });
		};
		return { onDateChange, onStationRangeChange, onAlarmTypeChange, onAlarmPriorityChange, onRouteDirectionChange };
	}, []);

	return (
		<FilterAPIContext.Provider value={api}>
			<FilterDataContext.Provider value={state}>{children}</FilterDataContext.Provider>
		</FilterAPIContext.Provider>
	);
}

export const useFilterAPI = () => useContext(FilterAPIContext);
export const useFilterData = () => useContext(FilterDataContext);
