import { inspect } from "@/constants/constants";
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
	name: string;
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
interface DefaultInspectionPoint {
	WORKCLASSTYPE_FK: number;
	CONTAINER_FK: number;
	DESCRIPTION: string;
	name: string;
}
interface DefaultData {
	dateRange: { startDate: Date; endDate: Date };
	trainStations?: DefaultTrainStation[];
	alarmType?: DefaultAlarmType[];
	alarmPriority?: number[];
	trainRoutes?: TrainRouteType[];
	inspectionPoint: DefaultInspectionPoint[];
	trainNumber: string | null;
}
interface FilterData {
	dateRange: { startDate: Date; endDate: Date };
	stationRange?: { from: number | null; to: number | null };
	alarmType: number[];
	alarmPriority?: number[];
	routeDirection?: number[];
	trainRoute: number;
	inspectionPoint: number[];
	trainNumber: string | null;
}

interface FilterAPI {
	onDateRangeChange: (date: { startDate: Date; endDate: Date }) => void;
	// onStationRangeChange: (stationRange: { from: number | null; to: number | null }) => void;
	onAlarmTypeChange: (alarmType: number[]) => void;
	onAlarmPriorityChange: (alarmPriority: number[]) => void;
	onRouteDirectionChange: (routeDirection: number[]) => void;
	onInspectionPointChange: (routeDirection: number[]) => void;
	onTrainNumberChange: (trainNumber: string) => void;
}

type Actions =
	| { type: "updateDateRange"; dateRange: { startDate: Date; endDate: Date } }
	// | { type: "updateStationRange"; stationRange: { from: number | null; to: number | null } }
	| { type: "updateAlarmType"; alarmType: number[] }
	| { type: "updateAlarmPriority"; alarmPriority: number[] }
	| { type: "updateRouteDirection"; routeDirection: number[] }
	| { type: "updateInspectionPoint"; inspectionPoint: number[] }
	| { type: "updateTrainNumber"; trainNumber: string };

export const DefaultDataContext = createContext<DefaultData>({} as DefaultData);
export const FilterDataContext = createContext<FilterData>({} as FilterData);
export const FilterAPIContext = createContext<FilterAPI>({} as FilterAPI);

const reducer = (state: FilterData, action: Actions): FilterData => {
	switch (action.type) {
		case "updateDateRange":
			return { ...state, dateRange: action.dateRange };
		// case "updateStationRange":
		// 	return { ...state, stationRange: action.stationRange };
		case "updateAlarmType":
			return { ...state, alarmType: action.alarmType };
		case "updateAlarmPriority":
			return { ...state, alarmPriority: action.alarmPriority };
		case "updateRouteDirection":
			return { ...state, routeDirection: action.routeDirection };
		case "updateInspectionPoint":
			return { ...state, inspectionPoint: action.inspectionPoint };
		case "updateTrainNumber":
			return { ...state, trainNumber: action.trainNumber };
		default:
			return state;
	}
};

export function FilterProvider({ children }: { children: ReactNode }) {
	// const today = new Date();
	const today = new Date("2023-12-15T23:00:00.000+09:00");
	// today.setHours(0, 0, 0, 0);
	// const yesterday = new Date(today);
	const yesterday = new Date("2023-12-08T00:00:00.000+09:00");
	// yesterday.setDate(yesterday.getDate() - 1);
	// yesterday.setHours(0, 0, 0, 0);
	const defaultDate = {
		startDate: yesterday,
		endDate: today,
	};

	const fetcher = (url: string) => fetch(url).then((response) => response.json());
	// const { data: defaultAlarmType } = useSWR<DefaultAlarmType[]>(
	// 	"http://192.168.0.160:22080/API/Master/CommonProcedureResult?procedureName=proc_getAlarmType",
	// 	fetcher,
	// 	{
	// 		onSuccess: (data) => {
	// 			const alarmTypeIds = data.map((i) => i.ALARMTYPE_ID);
	// 			dispatch({ type: "updateAlarmType", alarmType: alarmTypeIds });
	// 		},
	// 	}
	// );
	const defaultInspectionPoint = Array.from(Array(6).keys()).map((i) => ({
		WORKCLASSTYPE_FK: i,
		CONTAINER_FK: 42000 + i,
		DESCRIPTION: inspect.locale[i],
		name: inspect.locale[i],
	}));
	// const { data: defaultTrainStations } = useSWR<DefaultTrainStation[]>(
	// 	"http://192.168.0.160:22080/API/Master/CommonProcedureResult?procedureName=proc_getTrainStation",
	// 	fetcher
	// );
	// const { data: trainRoutes } = useSWR<TrainRouteType[]>(
	// 	"http://192.168.0.160:22080/API/Master/CommonProcedureResult?procedureName=proc_getTrainRoute",
	// 	fetcher,
	// 	{
	// 		onSuccess: (data) => {
	// 			const selectedRouteIds = data[state.trainRoute].edgeIds
	// 				.split(",")
	// 				.map((i) => parseInt(i))
	// 				.sort();
	// 			const [first, last] = [selectedRouteIds[0], selectedRouteIds[selectedRouteIds.length - 1]];
	// 			dispatch({ type: "updateStationRange", stationRange: { from: first, to: last } });
	// 		},
	// 	}
	// );
	const defaultAlarmType = [
		{
			ALARMTYPE_ID: 0,
			WORKCLASSTYPE_FK: 1,
			DESCRIPTION: "X축",
			name: "X축",
		},
		{
			ALARMTYPE_ID: 1,
			WORKCLASSTYPE_FK: 1,
			DESCRIPTION: "Y축",
			name: "Y축",
		},
		{
			ALARMTYPE_ID: 2,
			WORKCLASSTYPE_FK: 1,
			DESCRIPTION: "Z축",
			name: "Z축",
		},
		{
			ALARMTYPE_ID: 3,
			WORKCLASSTYPE_FK: 1,
			DESCRIPTION: "주습판 마모",
			name: "주습판 마모",
		},
		{
			ALARMTYPE_ID: 4,
			WORKCLASSTYPE_FK: 1,
			DESCRIPTION: "프로텍터 결함",
			name: "프로텍터 결함",
		},
		{
			ALARMTYPE_ID: 5,
			WORKCLASSTYPE_FK: 1,
			DESCRIPTION: "가이드혼 결함",
			name: "가이드혼 결함",
		},
		{
			ALARMTYPE_ID: 6,
			WORKCLASSTYPE_FK: 1,
			DESCRIPTION: "판토중심 편위",
			name: "판토중심 편위",
		},
		{
			ALARMTYPE_ID: 7,
			WORKCLASSTYPE_FK: 1,
			DESCRIPTION: "비접촉식 압상량",
			name: "비접촉식 압상량",
		},
	];

	const defaultData: DefaultData = {
		dateRange: defaultDate,
		// trainStations: defaultTrainStations,
		alarmType: defaultAlarmType,
		alarmPriority: [1, 2, 3],
		// trainRoutes: trainRoutes,
		inspectionPoint: defaultInspectionPoint,
		trainNumber: null,
	};

	const [state, dispatch] = useReducer(reducer, {
		dateRange: defaultData.dateRange,
		stationRange: { from: null, to: null },
		alarmType: [0, 1, 2, 3, 4, 5, 6, 7],
		alarmPriority: [1, 2, 3],
		routeDirection: [1, 2],
		trainRoute: 1,
		inspectionPoint: [0, 1, 2, 3, 4, 5],
		trainNumber: null,
	} as FilterData);
	const api = useMemo(() => {
		const onDateRangeChange = (dateRange: { startDate: Date; endDate: Date }) => {
			dispatch({ type: "updateDateRange", dateRange });
		};
		// const onStationRangeChange = (stationRange: { from: number | null; to: number | null }) => {
		// 	dispatch({ type: "updateStationRange", stationRange });
		// };
		const onAlarmTypeChange = (alarmType: number[]) => {
			dispatch({ type: "updateAlarmType", alarmType });
		};
		const onAlarmPriorityChange = (alarmPriority: number[]) => {
			dispatch({ type: "updateAlarmPriority", alarmPriority });
		};
		const onRouteDirectionChange = (routeDirection: number[]) => {
			dispatch({ type: "updateRouteDirection", routeDirection });
		};
		const onInspectionPointChange = (inspectionPoint: number[]) => {
			dispatch({ type: "updateInspectionPoint", inspectionPoint });
		};
		const onTrainNumberChange = (trainNumber: string) => {
			dispatch({ type: "updateTrainNumber", trainNumber });
		};
		return {
			onDateRangeChange,
			// onStationRangeChange,
			onAlarmTypeChange,
			onAlarmPriorityChange,
			onRouteDirectionChange,
			onInspectionPointChange,
			onTrainNumberChange,
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
