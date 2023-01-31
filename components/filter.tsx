interface FilterProps {
	type: string;
}

export default function Filter({ type }: FilterProps) {
	const filter = () => {
		switch (type) {
			case "date":
				return (
					<div>
						<input className="w-32 rounded border-slate-300 py-1 px-2 text-sm" type="text" placeholder="date" />
					</div>
				);
			case "station":
				return (
					<div>
						<input className="w-32 rounded border-slate-300 py-1 px-2 text-sm" type="text" placeholder="station" />
					</div>
				);
			case "alarmType":
				return (
					<div>
						<input className="w-32 rounded border-slate-300 py-1 px-2 text-sm" type="text" placeholder="alarmType" />
					</div>
				);
			default:
				return null;
		}
	};
	return <>{filter()}</>;
}
