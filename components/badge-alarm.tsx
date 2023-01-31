export default function BadgeAlarm() {
	return (
		<>
			<div className="flex items-center gap-px overflow-hidden rounded text-sm text-white">
				<div className="min-w-[22px] bg-amber-500">5</div>
				<div className="min-w-[22px] bg-red-500">2</div>
				<div className="min-w-[22px] bg-emerald-500">4</div>
			</div>
		</>
	);
}
