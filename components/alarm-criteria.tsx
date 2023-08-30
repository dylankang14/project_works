export default function AlarmCriteria() {
	return (
		<div className="inline-flex flex-wrap items-center gap-1 text-xs font-normal tracking-tight">
			<div className="rounded border border-gray-500 px-1.5 pb-px">NI -5 ~ +5</div>
			<div className="rounded border border-gray-500 px-1.5 pb-px">AV -10 ~ +10</div>
			<div className="rounded border border-gray-500 px-1.5 pb-px">IV -20 ~ +20</div>
		</div>
	);
}
