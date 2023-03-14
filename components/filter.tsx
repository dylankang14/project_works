import { useFilterAPI, useFilterData } from "@/contexts/filterContext";
import { useState } from "react";
import Icon from "./icon";
import ModalAlarmType from "./modal-alarm-type";
import ModalStation from "./modal-station";

interface FilterProps {
	size?: string;
	type: string;
	value?: string;
	placeholder?: string;
}
interface FilterElement {
	[key: string]: JSX.Element;
}

export default function Filter({ size, type, value, placeholder }: FilterProps) {
	const [isModalOpen, setIsModalOpen] = useState(false);
	const { date, stationRange, alarmType, alarmPriority, routeDirection } = useFilterData();
	const { onDateChange, onStationRangeChange, onAlarmTypeChange, onAlarmPriorityChange, onRouteDirectionChange } =
		useFilterAPI();
	const filters: FilterElement = {
		date: (
			<label className="relative cursor-pointer" htmlFor="date">
				<div className="absolute left-1.5 top-1/2 -translate-y-1/2 text-slate-700">
					<Icon type="date" className="h-5 w-5 text-slate-600" />
				</div>
				<input
					className="w-full cursor-pointer rounded border-slate-300 py-1.5 pr-2 pl-8 text-sm"
					type="text"
					placeholder="date"
					id="date"
				/>
			</label>
		),
		station: (
			<>
				<label
					className="relative cursor-pointer"
					htmlFor="station"
					onClick={() => {
						setIsModalOpen(true);
					}}
				>
					<div className="absolute left-1.5 top-1/2 -translate-y-1/2 text-slate-700">
						<Icon type="station" className="h-5 w-5 text-slate-600" />
					</div>
					<input
						className="w-full cursor-pointer rounded border-slate-300 py-1.5 pr-2 pl-8 text-sm"
						type="text"
						placeholder="station"
						id="station"
						value={`${stationRange?.from}역 - ${stationRange?.to}역`}
						readOnly
					/>
				</label>
				<ModalStation isModalOpen={isModalOpen} closeModal={() => setIsModalOpen(false)} className="w-[801px]" />
			</>
		),
		alarmType: (
			<>
				<label
					className="relative cursor-pointer"
					htmlFor="alarmType"
					onClick={() => {
						setIsModalOpen(true);
					}}
				>
					<div className="absolute left-1.5 top-1/2 -translate-y-1/2 text-slate-700">
						<Icon type="alarm" className="h-5 w-5 text-slate-600" />
					</div>
					<input
						className="w-full cursor-pointer rounded border-slate-300 py-1.5 pr-2 pl-8 text-sm"
						type="text"
						placeholder="alarmType"
						id="alarmType"
						readOnly
					/>
				</label>
				<ModalAlarmType isModalOpen={isModalOpen} closeModal={() => setIsModalOpen(false)} />
			</>
		),
		search: (
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
		),
		office: (
			<label className="relative cursor-pointer" htmlFor="office">
				<div className="absolute left-1.5 top-1/2 -translate-y-1/2 text-slate-700">
					<Icon type="office" className="h-5 w-5 text-slate-600" />
				</div>
				<input
					className="w-full cursor-pointer rounded border-slate-300 py-1.5 pr-2 pl-8 text-sm"
					type="text"
					placeholder="office"
					id="office"
				/>
			</label>
		),
	};
	return <>{filters[type]}</>;
}
