import usePagination, { DOTS } from "@/libs/client/usePagination";
import { cls } from "@/libs/client/utility";
import Icon from "./icon";

export interface PaginationProps {
	totalCount: number;
	pageSize: number;
	currentPage: number;
	onPageChange: (page: number) => void;
	siblingCount?: number;
	className?: string;
}

export default function Pagination({
	totalCount,
	pageSize,
	currentPage,
	onPageChange,
	siblingCount = 1,
	className = "",
}: PaginationProps) {
	const paginationRange = usePagination({ totalCount, pageSize, siblingCount, currentPage });
	let lastPage = paginationRange![paginationRange?.length! - 1];

	if (currentPage === 0 && paginationRange?.length! < 2) return null;
	return (
		<div className={cls("flex justify-center gap-x-0.5", className)}>
			<div
				onClick={() => onPageChange(currentPage - 1)}
				className={cls(
					"flex aspect-square w-7 cursor-pointer items-center justify-center rounded border bg-white",
					currentPage === 1 ? "pointer-events-none cursor-default text-gray-400" : "hover:bg-slate-500 hover:text-white"
				)}
			>
				<Icon type="chevronLeft" className="h-5 w-5" />
			</div>
			{paginationRange?.map((pageNumber, index) => {
				if (pageNumber === DOTS)
					return (
						<div
							key={index + "unique"}
							className="pointer-events-none flex aspect-square w-7 cursor-pointer select-none items-center justify-center rounded border bg-white hover:bg-slate-500 hover:text-white"
						>
							&#8230;
						</div>
					);
				return (
					<div
						key={pageNumber}
						onClick={() => onPageChange(pageNumber as number)}
						className={cls(
							"flex aspect-square w-7 cursor-pointer select-none items-center justify-center rounded border bg-white hover:bg-slate-500 hover:text-white",
							currentPage === pageNumber ? "bg-slate-600 text-white" : ""
						)}
					>
						{pageNumber}
					</div>
				);
			})}
			<div
				onClick={() => onPageChange(currentPage + 1)}
				className={cls(
					"flex aspect-square w-7 cursor-pointer items-center justify-center rounded border bg-white",
					currentPage === lastPage
						? "pointer-events-none cursor-default text-gray-400"
						: "hover:bg-slate-500 hover:text-white"
				)}
			>
				<Icon type="chevronRight" className="h-5 w-5" />
			</div>
		</div>
	);
}
