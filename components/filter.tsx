import Icon from "./icon";

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
	const filters: FilterElement = {
		date: (
			<label className="relative cursor-pointer" htmlFor="date">
				<div className="absolute left-1.5 top-1/2 -translate-y-1/2 text-slate-700">
					<Icon type="date" className="h-5 w-5 text-slate-600" />
				</div>
				<input
					className="cursor-pointer rounded border-slate-300 py-1.5 pr-2 pl-8 text-sm"
					type="text"
					placeholder="date"
					id="date"
				/>
			</label>
		),
		station: (
			<label className="relative cursor-pointer" htmlFor="station">
				<div className="absolute left-1.5 top-1/2 -translate-y-1/2 text-slate-700">
					<Icon type="station" className="h-5 w-5 text-slate-600" />
				</div>
				<input
					className="cursor-pointer rounded border-slate-300 py-1.5 pr-2 pl-8 text-sm"
					type="text"
					placeholder="station"
					id="station"
				/>
			</label>
		),
		alarmType: (
			<label className="relative cursor-pointer" htmlFor="alarmType">
				<div className="absolute left-1.5 top-1/2 -translate-y-1/2 text-slate-700">
					<Icon type="alarm" className="h-5 w-5 text-slate-600" />
				</div>
				<input
					className="cursor-pointer rounded border-slate-300 py-1.5 pr-2 pl-8 text-sm"
					type="text"
					placeholder="alarmType"
					id="alarmType"
				/>
			</label>
		),
		search: (
			<label className="relative cursor-pointer" htmlFor="alarmType">
				<div className="absolute left-1.5 top-1/2 -translate-y-1/2 text-slate-700">
					<Icon type="search" className="h-5 w-5 text-slate-600" />
				</div>
				<input
					className="cursor-pointer rounded border-slate-300 py-1.5 pr-2 pl-8 text-sm"
					type="text"
					placeholder="alarmType"
					id="alarmType"
				/>
			</label>
		),
	};
	return <>{filters[type]}</>;
}
