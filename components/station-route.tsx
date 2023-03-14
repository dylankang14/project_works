import { useFilterAPI, useFilterData } from "@/contexts/filterContext";
import useFilter from "@/libs/client/useFilter";
import { cls } from "@/libs/client/utility";
import { useEffect, useRef, useState } from "react";
import BadgeAlarm from "./badge-alarm";
import Icon from "./icon";

interface StationRangeType {
	from: number | null;
	to: number | null;
}

export default function StationRoute() {
	const containerRef = useRef<HTMLUListElement>(null);
	const [numColumns, setNumColumns] = useState<number>(5);
	const [basisColumns, setBasisColumns] = useState<string>("basis-1/5");
	const { onStationRangeChange } = useFilterAPI();
	const { stationRange } = useFilterData();
	const [firstIndex, setFirstIndex] = useState<number | null>();

	const selectStation = (index: number) => {
		if (!firstIndex) {
			setFirstIndex(index);
			onStationRangeChange({ from: index, to: null });
		} else {
			if (firstIndex > index) {
				onStationRangeChange({ from: index, to: firstIndex });
			} else {
				onStationRangeChange({ from: firstIndex, to: index });
			}
			setFirstIndex(null);
		}
	};

	const data = Array.from(Array(49), (_, index) => index + 1);
	useEffect(() => {
		const observer = new ResizeObserver((entries) => {
			for (const entry of entries) {
				const { width, height } = entry.contentRect;

				if (width < 321) {
					setNumColumns(1);
					setBasisColumns("basis-full");
				} else if (width < 470) {
					setNumColumns(2);
					setBasisColumns("basis-1/2");
				} else if (width < 650) {
					setNumColumns(3);
					setBasisColumns("basis-1/3");
				} else if (width < 780) {
					setNumColumns(4);
					setBasisColumns("basis-1/4");
				} else if (width < 1200) {
					setNumColumns(5);
					setBasisColumns("basis-1/5");
				}
			}
		});

		const containerNode = containerRef.current;
		if (containerNode) {
			observer.observe(containerNode);
		}

		return () => {
			if (containerNode) {
				observer.unobserve(containerNode);
			}
		};
	}, []);
	return (
		<ul className="flex flex-col" ref={containerRef}>
			{data.map((i, index) => {
				if (index % numColumns === 0) {
					return (
						<li key={index} className="group relative flex flex-1 items-stretch">
							<div className="relative flex items-end group-first:invisible group-odd:-scale-y-100 group-last:group-even:invisible">
								<div className={"h-[calc(50%+4px)] w-4 border-l border-t border-slate-600"}></div>
								<div
									className={"absolute bottom-0 right-0 h-[calc(50%-3px)] w-[9PX] border-l border-t border-slate-600"}
								></div>
							</div>
							{/* <ul className={cls("flex flex-1 flex-wrap", (i / 5) % 2 ? "flex-row-reverse" : "")}> */}
							<ul className={"flex grow flex-wrap py-1.5 group-even:flex-row-reverse"}>
								{data.slice(index, index + numColumns).map((innerItem, innerIndex) => (
									<li
										key={innerItem}
										className={cls("group/row flex text-center group-even:flex-row-reverse", basisColumns)}
										onClick={() => {
											selectStation(innerItem);
										}}
									>
										<div className="relative flex min-w-0 flex-1 items-center">
											<Icon
												type="arrowRight"
												className="absolute -left-2 top-auto h-2.5 w-2.5 -translate-y-1 text-slate-600 group-first:group-first/row:hidden group-last:group-even:group-last/row:hidden"
											/>
											<div
												className={cls(
													"min-w-[64px] flex-1 cursor-pointer select-none truncate rounded px-1.5 py-1.5 text-white hover:bg-blue-600",
													innerItem === stationRange?.from ||
														innerItem === stationRange?.to ||
														(innerItem > stationRange?.from! && innerItem < stationRange?.to!)
														? "bg-blue-500"
														: "bg-slate-400"
												)}
											>
												{innerItem}역
											</div>
											<Icon
												type="arrowLeft"
												className="absolute -right-2 bottom-auto h-2.5 w-2.5 translate-y-1 text-slate-600 group-last:group-odd:group-last/row:hidden"
											/>
										</div>
										<div className="relative flex min-w-[80px] flex-1 flex-col items-center justify-center group-last:group-last/row:invisible">
											<BadgeAlarm
												className={cls(
													!stationRange?.from || (innerItem >= stationRange?.from! && innerItem < stationRange?.to!)
														? ""
														: "opacity-60"
												)}
											/>
											<div className="relative my-[5px] h-2 w-full border-t border-b border-slate-600"></div>
											<BadgeAlarm
												className={cls(
													!stationRange?.from || (innerItem >= stationRange?.from! && innerItem < stationRange?.to!)
														? ""
														: "opacity-60"
												)}
											/>
										</div>
									</li>
								))}
							</ul>
							<div className="relative flex rotate-180 items-end group-odd:-scale-y-100 group-last:group-odd:invisible">
								<div className="h-[calc(50%+4px)] w-4 border-l border-t border-slate-600"></div>
								<div className="absolute bottom-0 right-0 h-[calc(50%-3px)] w-[9PX] border-l border-t border-slate-600"></div>
							</div>
						</li>
					);
				}
			})}
		</ul>
	);
}
