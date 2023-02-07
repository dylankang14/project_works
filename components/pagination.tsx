import { cls } from "@/libs/client/utility";
import Icon from "./icon";

interface PaginationProps {
	active: number;
	className?: string;
}

export default function Pagination({ active, className = "" }: PaginationProps) {
	return (
		<div className={cls("flex justify-center gap-x-0.5", className)}>
			<div className="flex aspect-square w-7 cursor-pointer items-center justify-center rounded border bg-white hover:bg-slate-500 hover:text-white">
				<Icon type="chevronLeft" className="h-5 w-5" />
			</div>
			{Array.from(Array(5).keys()).map((i) => (
				<div
					key={i}
					className={cls(
						"flex aspect-square w-7 cursor-pointer items-center justify-center rounded border bg-white hover:bg-slate-500 hover:text-white",
						active === i + 1 ? "bg-slate-600 text-white" : ""
					)}
				>
					{i + 1}
				</div>
			))}
			<div className="flex aspect-square w-7 cursor-pointer items-center justify-center rounded border bg-white hover:bg-slate-500 hover:text-white">
				...
			</div>
			<div className="flex aspect-square w-7 cursor-pointer items-center justify-center rounded border bg-white hover:bg-slate-500 hover:text-white">
				<Icon type="chevronRight" className="h-5 w-5" />
			</div>
		</div>
	);
}
