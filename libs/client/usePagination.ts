import { useMemo } from "react";

interface UsePaginationProps {
	totalCount: number;
	pageSize: number;
	siblingCount: number;
	currentPage: number;
}

const range = (start: number, end: number) => {
	let length = end - start + 1;
	return Array.from({ length }, (_, i) => i + start);
};

export const DOTS = "...";

export default function usePagination({ totalCount, pageSize, siblingCount = 1, currentPage }: UsePaginationProps) {
	const paginationRange = useMemo(() => {
		const totalPageCount = Math.ceil(totalCount / pageSize);
		const totalPageNumbers = siblingCount + 5;
		if (totalPageCount <= totalPageNumbers) {
			return range(1, totalPageCount);
		}
		const leftSiblingIndex = Math.max(currentPage - siblingCount, 1);
		const rightSiblingIndex = Math.min(currentPage + siblingCount, totalPageCount);

		const shouldShowLeftDots = leftSiblingIndex > 2;
		const shouldShowRightDots = rightSiblingIndex < totalPageCount - 2;

		const firstPageIndex = 1;
		const lastPageIndex = totalPageCount;

		if (!shouldShowLeftDots && shouldShowRightDots) {
			let leftItemCount = 3 + 2 * siblingCount;
			let leftRage = range(1, leftItemCount);
			return [...leftRage, DOTS, lastPageIndex];
		}
		if (shouldShowLeftDots && !shouldShowRightDots) {
			let rightItemCount = 3 + 2 * siblingCount;
			let rightRange = range(totalPageCount - rightItemCount + 1, totalPageCount);
			return [firstPageIndex, DOTS, ...rightRange];
		}
		if (shouldShowLeftDots && shouldShowRightDots) {
			let middleRange = range(leftSiblingIndex, rightSiblingIndex);
			return [firstPageIndex, DOTS, ...middleRange, DOTS, lastPageIndex];
		}
	}, [totalCount, pageSize, siblingCount, currentPage]);

	return paginationRange;
}
