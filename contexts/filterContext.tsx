import useFetchDefault from "@/libs/client/useFetchDefault";
import { createContext, ReactNode, useContext, useMemo, useReducer } from "react";
import useSWR from "swr";

// export interface DefaultTrainStation {
// 	IsEndPoint: string;
// 	name: string;
// 	id: number;
// 	type: number;
// }
export interface DefaultTrainStation {
	// IsEndPoint: string;
	name: string;
	id: number;
	// type: number;
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
// interface DefaultData {
// 	dateRange: Date[];
// 	trainStations?: DefaultTrainStation[];
// 	alarmType?: DefaultAlarmType[];
// 	alarmPriority?: number[];
// 	trainRoutes?: TrainRouteType[];
// }
interface DefaultData {
	dateRange: Date[];
	trainStations?: DefaultTrainStation[];
	alarmType?: DefaultAlarmType[];
	alarmPriority?: number[];
	trainRoutes?: number[];
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
	// const { data: defaultTrainStations } = useSWR<DefaultTrainStation[]>(
	// 	"http://192.168.0.160:22080/API/Master/CommonProcedureResult?procedureName=proc_getTrainStation",
	// 	fetcher
	// );
	const defaultTrainStations = [
		{ id: 0, name: "진접" },
		{ id: 1, name: "오남" },
		{ id: 2, name: "별내별가람" },
		{ id: 3, name: "당고개" },
		{ id: 4, name: "상계" },
		{ id: 5, name: "노원" },
		{ id: 6, name: "창동" },
		{ id: 7, name: "쌍문" },
		{ id: 8, name: "수유" },
		{ id: 9, name: "미아" },
		{ id: 10, name: "미아사거리" },
		{ id: 11, name: "길음" },
		{ id: 12, name: "성신여대입" },
		{ id: 13, name: "한성대입구" },
		{ id: 14, name: "혜화" },
		{ id: 15, name: "동대문" },
		{ id: 16, name: "동대문역사" },
		{ id: 17, name: "충무로" },
		{ id: 18, name: "명동" },
		{ id: 19, name: "회현" },
		{ id: 20, name: "서울역" },
		{ id: 21, name: "숙대입구" },
		{ id: 22, name: "삼각지" },
		{ id: 23, name: "신용산" },
		{ id: 24, name: "이촌" },
		{ id: 25, name: "동작" },
		{ id: 26, name: "총신대입구" },
		{ id: 27, name: "사당" },
		{ id: 28, name: "남태령" },
		{ id: 29, name: "선바위" },
		{ id: 30, name: "경마공원" },
		{ id: 31, name: "대공원" },
		{ id: 32, name: "과천" },
		{ id: 33, name: "정부과천청" },
		{ id: 34, name: "인덕원" },
		{ id: 35, name: "평촌" },
		{ id: 36, name: "범계" },
		{ id: 37, name: "금정" },
		{ id: 38, name: "산본" },
		{ id: 39, name: "수리산" },
		{ id: 40, name: "대야미" },
		{ id: 41, name: "반월" },
		{ id: 42, name: "상록수" },
		{ id: 43, name: "한대앞" },
		{ id: 44, name: "중앙" },
		{ id: 45, name: "고잔" },
		{ id: 46, name: "초지" },
		{ id: 47, name: "안산" },
		{ id: 48, name: "신길온천" },
		{ id: 49, name: "정왕" },
		{ id: 50, name: "오이도" },
	];
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
	const trainRoutes = Array.from(Array(50).keys()).map((i) => i);

	const defaultData: DefaultData = {
		dateRange: [defaultDate, defaultDate],
		trainStations: defaultTrainStations,
		alarmType: defaultAlarmType,
		alarmPriority: [1, 2, 3],
		trainRoutes: trainRoutes,
	};

	const [state, dispatch] = useReducer(reducer, {
		dateRange: defaultData.dateRange,
		// stationRange: { from: null, to: null },
		stationRange: { from: 0, to: 50 },
		alarmType: [1, 2, 3, 4, 5],
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
