import Link from "next/link";

interface BadgeAlarmProps {
	className?: string;
}

export default function BadgeAlarm({ className }: BadgeAlarmProps) {
	return (
		// <Link href={`/alarm/list/${1}?from=${"OO역"}&to=${"OO역"}`}>
		<Link
			href={{ pathname: "/alarm/list/[id]", query: { id: 1, from: "1-station", to: "2-station" } }}
			className={className ? className : ""}
		>
			<div className="flex cursor-pointer select-none items-center gap-px overflow-hidden rounded text-sm text-white">
				<div className="min-w-[22px] bg-amber-500">5</div>
				<div className="min-w-[22px] bg-red-500">2</div>
				<div className="min-w-[22px] bg-emerald-500">4</div>
			</div>
		</Link>
	);
}
