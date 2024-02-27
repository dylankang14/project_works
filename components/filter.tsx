import { useDefaultData, useFilterAPI, useFilterData } from "@/contexts/filterContext";
import { useEffect, useState } from "react";
import DateRangePicker from "./date-range-picker";
import DropdownAlarmPriority from "./dropdown-alarm-priority";
import DropdownRouteDirection from "./dropdown-route-direction";
import Icon from "./icon";
import ModalAlarmType from "./modal-alarm-type";
import ModalStation from "./modal-station";
import DropdownOffice from "./dropdown-office";
import DropdownInspectionPoint from "./dropdown-inspection-point";
import DropdownAlarmType from "./dropdown-alarm-type";
import DateTimeRangePicker from "./date-time-range-picker";
import InputTrainNumber from "./input-train-number";

interface FilterProps {
	size?: string;
	type: string;
	value?: string;
	placeholder?: string;
	[key: string]: any;
}

export default function Filter({ size, type, value, placeholder, updateSearchParams }: FilterProps) {
	const [isModalOpen, setIsModalOpen] = useState(false);
	const { trainStations } = useDefaultData();
	// const { dateRange, stationRange, alarmType, alarmPriority, routeDirection } = useFilterData();
	// const { onDateRangeChange, onStationRangeChange, onAlarmTypeChange, onAlarmPriorityChange, onRouteDirectionChange } =
	// useFilterAPI();
	switch (type) {
		case "dateRange":
			return <DateRangePicker />;
		case "dateTimeRange":
			return <DateTimeRangePicker />;
		case "inspectionPoint":
			return <DropdownInspectionPoint />;
		// case "inspectionPoint":
		// 	return (
		// 		<>
		// 			<div
		// 				className="relative flex cursor-pointer rounded border border-slate-300 bg-white py-1.5 pl-2 pr-3 text-sm"
		// 				onClick={() => {
		// 					setIsModalOpen(true);
		// 				}}
		// 			>
		// 				<div className="text-slate-700">
		// 					<Icon type="station" className="mr-1.5 h-5 w-5 text-slate-600" />
		// 				</div>
		// 				<span id="station">검측소 : 모두</span>
		// 			</div>
		// 			<ModalStation isModalOpen={isModalOpen} closeModal={() => setIsModalOpen(false)} className="max-w-[801px]" />
		// 		</>
		// 	);
		case "alarmType":
			return <DropdownAlarmType />;
		// case "alarmType":
		// 	return (
		// 		<>
		// 			<div
		// 				className="relative flex cursor-pointer rounded border border-slate-300 bg-white py-1.5 pl-2 pr-3 text-sm"
		// 				onClick={() => {
		// 					setIsModalOpen(true);
		// 				}}
		// 			>
		// 				<div className="text-slate-700">
		// 					<Icon type="alarm" className="mr-1.5 h-5 w-5 text-slate-600" />
		// 				</div>
		// 				<span id="alarmType">{`알람 검측항목 : ${alarmType?.length}`}</span>
		// 			</div>
		// 			<ModalAlarmType isModalOpen={isModalOpen} closeModal={() => setIsModalOpen(false)} />
		// 		</>
		// 	);
		case "alarmPriority":
			return <DropdownAlarmPriority />;
		case "routeDirection":
			return <DropdownRouteDirection />;
		case "search":
			return (
				<label className="relative cursor-pointer" htmlFor="search">
					<div className="absolute left-1.5 top-1/2 -translate-y-1/2 text-slate-700">
						<Icon type="search" className="h-5 w-5 text-slate-600" />
					</div>
					<input
						className="w-full cursor-pointer rounded border-slate-300 py-1.5 pl-8 pr-2 text-sm"
						type="text"
						placeholder="search"
						id="alarmType"
					/>
				</label>
			);
		case "trainNumber":
			return <InputTrainNumber />;
		case "office":
			return <DropdownOffice />;
	}
	return null;
}
