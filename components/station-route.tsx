import { DefaultTrainStation, useDefaultData, useFilterAPI, useFilterData } from "@/contexts/filterContext";
import { cls } from "@/libs/client/utility";
import { useEffect, useRef, useState } from "react";
import BadgeAlarm from "./badge-alarm";
import Icon from "./icon";
import useWindowDimensions from "@/libs/client/useWindowDimensions";

interface StationRangeType {
	from: number | null;
	to: number | null;
}
interface StationRouteProps {
	isStationRangeAll: boolean;
	setIsStationRangeAll: () => void;
}

export default function StationRoute({ isStationRangeAll, setIsStationRangeAll }: StationRouteProps) {
	const containerRef = useRef<HTMLUListElement>(null);
	const [numColumns, setNumColumns] = useState<number>(5);
	const [basisColumns, setBasisColumns] = useState<string>("basis-1/5");
	const [trainRouteStations, setTrainRouteStations] = useState<DefaultTrainStation[]>();
	const { onStationRangeChange } = useFilterAPI();
	const { stationRange, trainRoute } = useFilterData();
	const { trainStations, trainRoutes } = useDefaultData();
	const [firstIndex, setFirstIndex] = useState<number | null>();
	// const { width } = useWindowDimensions();

	const selectStation = (index: number) => {
		if (!firstIndex && firstIndex !== 0) {
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

	useEffect(() => {
		const observer = new ResizeObserver((entries) => {
			for (const entry of entries) {
				const { width, height } = entry.contentRect;
				console.log(entry.contentRect);

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
				} else {
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

	// useEffect(() => {
	// 	if (trainRoute && trainRoutes && trainStations) {
	// 		const trainRouteIds = trainRoutes[trainRoute].edgeIds.split(",").map((i) => parseInt(i));
	// 		setTrainRouteStations(trainStations.filter((station) => trainRouteIds.includes(station.id)));
	// 	}
	// }, [trainRoute, trainRoutes, trainStations]);
	useEffect(() => {
		if (trainRoute && trainRoutes && trainStations) {
			const trainRouteIds = trainRoutes;
			setTrainRouteStations(trainStations.filter((station) => trainRouteIds.includes(station.id)));
		}
	}, [trainRoute, trainRoutes, trainStations]);
	useEffect(() => {
		if (isStationRangeAll && trainStations) {
			onStationRangeChange({ from: 0, to: trainStations.length - 1 });
			setIsStationRangeAll();
		}

		return () => {};
	}, [isStationRangeAll, setIsStationRangeAll, trainStations, onStationRangeChange]);

	return (
		<ul className="flex flex-col" ref={containerRef}>
			{trainRouteStations?.map((i, index) => {
				if (index % numColumns === 0) {
					return (
						<li key={index} className="group relative flex flex-1 items-stretch">
							<div className="relative flex items-end group-first:invisible group-odd:-scale-y-100 group-last:group-even:invisible">
								<div className="h-1/2 w-4 rounded-tl-full border-l border-t border-slate-600"></div>
							</div>
							{/* <ul className={cls("flex flex-1 flex-wrap", (i / 5) % 2 ? "flex-row-reverse" : "")}> */}
							<ul className={"flex grow flex-wrap py-3 group-even:flex-row-reverse"}>
								{trainRouteStations.slice(index, index + numColumns).map((innerItem, innerIndex) => (
									<li
										key={innerItem.id}
										className={cls("group/row flex text-center group-even:flex-row-reverse", basisColumns)}
										onClick={() => {
											selectStation(innerItem.id);
										}}
									>
										<div className="relative flex min-w-0 flex-1 items-center">
											{/* <Icon
												type="arrowRight"
												className="absolute -left-2 top-auto h-2.5 w-2.5 -translate-y-1 text-slate-600 group-first:group-first/row:hidden group-last:group-even:group-last/row:hidden"
											/> */}
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
												{innerItem.name}역
											</div>
										</div>
										<div className="relative flex min-w-[80px] items-center justify-center group-last:group-last/row:invisible">
											<div className="relative my-[5px] h-px w-full border-t border-slate-600"></div>
										</div>
									</li>
								))}
							</ul>
							<div className="relative flex group-odd:-scale-y-100 group-last:group-odd:invisible">
								<div className="h-1/2 w-4 rounded-br-full border-b border-r border-slate-600"></div>
							</div>
						</li>
					);
				}
			})}
		</ul>
	);
}
