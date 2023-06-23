import useFetchDefault from "@/libs/client/useFetchDefault";
import { createContext, ReactNode, useContext, useMemo, useReducer } from "react";
import useSWR from "swr";

export interface DefaultTrainStation {
	IsEndPoint: string;
	name: string;
	id: number;
	type: number;
}
interface DefaultAlarmType {
	WORKCLASSTYPE_FK: number;
	ALARMTYPE_ID: number;
	DESCRIPTION: string;
	NAME: string;
}
interface TrainRouteType {
	arrival: string;
	stationIds: number;
	name: string;
	id: number;
	departure: string;
	trainNumber: string;
	type: string;
	direction: string;
	edgeIds: string;
}
interface DefaultData {
	dateRange: Date[];
	trainStations?: DefaultTrainStation[];
	alarmType?: DefaultAlarmType[];
	alarmPriority?: number[];
	trainRoutes?: TrainRouteType[];
}
interface FilterData {
	dateRange: Date[];
	stationRange?: { from: number | null; to: number | null };
	alarmType: number[];
	alarmPriority?: number[];
	routeDirection?: number[];
	trainRoute: number;
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

export const DefaultDataContext = createContext<DefaultData>({} as DefaultData);
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
	const fetcher = (url: string) => fetch(url).then((response) => response.json());
	const { data: defaultAlarmType } = useSWR<DefaultAlarmType[]>(
		"http://192.168.0.160:22080/API/Master/CommonProcedureResult?procedureName=proc_getAlarmType",
		fetcher,
		{
			onSuccess: (data) => {
				const alarmTypeIds = data.map((i) => i.ALARMTYPE_ID);
				dispatch({ type: "updateAlarmType", alarmType: alarmTypeIds });
			},
		}
	);
	const { data: defaultTrainStations } = useSWR<DefaultTrainStation[]>(
		"http://192.168.0.160:22080/API/Master/CommonProcedureResult?procedureName=proc_getTrainStation",
		fetcher
	);
	const { data: trainRoutes } = useSWR<TrainRouteType[]>(
		"http://192.168.0.160:22080/API/Master/CommonProcedureResult?procedureName=proc_getTrainRoute",
		fetcher,
		{
			onSuccess: (data) => {
				const selectedRouteIds = data[state.trainRoute].edgeIds
					.split(",")
					.map((i) => parseInt(i))
					.sort();
				const [first, last] = [selectedRouteIds[0], selectedRouteIds[selectedRouteIds.length - 1]];
				dispatch({ type: "updateStationRange", stationRange: { from: first, to: last } });
			},
		}
	);

	const defaultData: DefaultData = {
		dateRange: [defaultDate, defaultDate],
		trainStations: defaultTrainStations,
		alarmType: defaultAlarmType,
		alarmPriority: [1, 2, 3],
		trainRoutes: trainRoutes,
	};

	const [state, dispatch] = useReducer(reducer, {
		dateRange: defaultData.dateRange,
		stationRange: { from: null, to: null },
		alarmType: [],
		alarmPriority: [1, 2, 3],
		routeDirection: [1, 2],
		trainRoute: 1,
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
			<FilterDataContext.Provider value={state}>
				<DefaultDataContext.Provider value={defaultData}>{children}</DefaultDataContext.Provider>
			</FilterDataContext.Provider>
		</FilterAPIContext.Provider>
	);
}

export const useFilterAPI = () => useContext(FilterAPIContext);
export const useFilterData = () => useContext(FilterDataContext);
export const useDefaultData = () => useContext(DefaultDataContext);
