import { useDefaultData, useFilterAPI, useFilterData } from "@/contexts/filterContext";
import { useEffect, useState } from "react";
import DateRangePicker from "./date-range-picker";
import DropdownAlarmPriority from "./dropdown-alarm-priority";
import DropdownRouteDirection from "./dropdown-route-direction";
import Icon from "./icon";
import ModalAlarmType from "./modal-alarm-type";
import ModalStation from "./modal-station";

interface FilterProps {
	size?: string;
	type: string;
	value?: string;
	placeholder?: string;
}

export default function Filter({ size, type, value, placeholder }: FilterProps) {
	const [isModalOpen, setIsModalOpen] = useState(false);
	const { trainStations } = useDefaultData();
	const { dateRange, stationRange, alarmType, alarmPriority, routeDirection } = useFilterData();
	// const { onDateRangeChange, onStationRangeChange, onAlarmTypeChange, onAlarmPriorityChange, onRouteDirectionChange } =
	// useFilterAPI();
	useEffect(() => {}, []);
	switch (type) {
		case "dateRange":
			return (
				// <label className="relative cursor-pointer" htmlFor="date">
				// 	<div className="absolute left-1.5 top-1/2 -translate-y-1/2 text-slate-700">
				// 		<Icon type="date" className="h-5 w-5 text-slate-600" />
				// 	</div>
				// 	<input
				// 		className="w-full cursor-pointer rounded border-slate-300 py-1.5 pr-2 pl-8 text-sm"
				// 		type="text"
				// 		placeholder="date"
				// 		id="date"
				// 	/>
				// </label>
				<DateRangePicker />
			);
		case "station":
			return (
				<>
					<div
						className="relative flex cursor-pointer rounded border border-slate-300 bg-white py-1.5 pr-3 pl-2 text-sm"
						onClick={() => {
							setIsModalOpen(true);
						}}
					>
						<div className="text-slate-700">
							<Icon type="station" className="mr-1.5 h-5 w-5 text-slate-600" />
						</div>
						<span id="station">
							{`${trainStations?.find((station) => station.id === stationRange?.from)?.name}역 - 
							${trainStations?.find((station) => station.id === stationRange?.to)?.name}역`}
						</span>
					</div>
					<ModalStation isModalOpen={isModalOpen} closeModal={() => setIsModalOpen(false)} className="w-[801px]" />
				</>
			);
		case "alarmType":
			return (
				<>
					<div
						className="relative flex cursor-pointer rounded border border-slate-300 bg-white py-1.5 pr-3 pl-2 text-sm"
						onClick={() => {
							setIsModalOpen(true);
						}}
					>
						<div className="text-slate-700">
							<Icon type="alarm" className="mr-1.5 h-5 w-5 text-slate-600" />
						</div>
						<span id="alarmType">{`${alarmType?.length} 개 항목`}</span>
					</div>
					<ModalAlarmType isModalOpen={isModalOpen} closeModal={() => setIsModalOpen(false)} />
				</>
			);
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
						className="w-full cursor-pointer rounded border-slate-300 py-1.5 pr-2 pl-8 text-sm"
						type="text"
						placeholder="search"
						id="alarmType"
					/>
				</label>
			);
		case "office":
			return (
				<div className="relative flex cursor-pointer rounded border border-slate-300 bg-white py-1.5 pr-3 pl-2 text-sm">
					<div className="text-slate-700">
						<Icon type="office" className="mr-1.5 h-5 w-5 text-slate-600" />
					</div>
					<span>office</span>
				</div>
			);
	}
	return null;
}
