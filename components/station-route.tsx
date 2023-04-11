import { useFilterAPI, useFilterData } from "@/contexts/filterContext";
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

	// const data = Array.from(Array(49), (_, index) => index + 1);
	const data = [
		{ id: 1, station: "서울" },
		{ id: 2, station: "용산" },
		{ id: 3, station: "영등포" },
		{ id: 4, station: "안양" },
		{ id: 5, station: "수원" },
		{ id: 6, station: "오산" },
		{ id: 7, station: "서정리" },
		{ id: 8, station: "평택" },
		{ id: 9, station: "성환" },
		{ id: 10, station: "천안" },
		{ id: 11, station: "소정리" },
		{ id: 12, station: "전의" },
		{ id: 13, station: "조치원" },
		{ id: 14, station: "부강" },
		{ id: 15, station: "신탄진" },
		{ id: 16, station: "대전" },
		{ id: 17, station: "옥천" },
		{ id: 18, station: "이원" },
		{ id: 19, station: "지탄" },
		{ id: 20, station: "심천" },
		{ id: 21, station: "각계" },
		{ id: 22, station: "영동" },
		{ id: 23, station: "황간" },
		{ id: 24, station: "추풍령" },
		{ id: 25, station: "김천" },
		{ id: 26, station: "구미" },
		{ id: 27, station: "사곡" },
		{ id: 28, station: "약목" },
		{ id: 29, station: "왜관" },
		{ id: 30, station: "신동" },
		{ id: 31, station: "대구" },
		{ id: 32, station: "동대구" },
		{ id: 33, station: "경산" },
		{ id: 34, station: "남성현" },
		{ id: 35, station: "청도" },
		{ id: 36, station: "상동" },
		{ id: 37, station: "밀양" },
		{ id: 38, station: "삼랑진" },
		{ id: 39, station: "원동" },
		{ id: 40, station: "물금" },
		{ id: 41, station: "화명" },
		{ id: 42, station: "구포" },
		{ id: 43, station: "사상" },
		{ id: 44, station: "부산" },
	];
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
										key={innerItem.id}
										className={cls("group/row flex text-center group-even:flex-row-reverse", basisColumns)}
										onClick={() => {
											selectStation(innerItem.id);
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
													innerItem.id === stationRange?.from ||
														innerItem.id === stationRange?.to ||
														(innerItem.id > stationRange?.from! && innerItem.id < stationRange?.to!)
														? "bg-blue-500"
														: "bg-slate-400"
												)}
											>
												{innerItem.station}역
											</div>
											<Icon
												type="arrowLeft"
												className="absolute -right-2 bottom-auto h-2.5 w-2.5 translate-y-1 text-slate-600 group-last:group-odd:group-last/row:hidden"
											/>
										</div>
										<div className="relative flex min-w-[80px] flex-1 flex-col items-center justify-center group-last:group-last/row:invisible">
											<BadgeAlarm
												className={cls(
													!stationRange?.from ||
														(innerItem.id >= stationRange?.from! && innerItem.id < stationRange?.to!)
														? ""
														: "opacity-60"
												)}
											/>
											<div className="relative my-[5px] h-2 w-full border-t border-b border-slate-600"></div>
											<BadgeAlarm
												className={cls(
													!stationRange?.from ||
														(innerItem.id >= stationRange?.from! && innerItem.id < stationRange?.to!)
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
