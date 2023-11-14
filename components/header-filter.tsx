import useWindowDimensions from "@/libs/client/useWindowDimensions";
import Filter from "./filter";
import Button from "./button";
import ModalFilter from "./modal-filter";
import { useState } from "react";
import Card from "./card";

export default function HeaderFilter() {
	const { width } = useWindowDimensions();
	const [isDrawerOpen, setIsDrawerOpen] = useState(false);
	return (
		<>
			{width! >= 768 ? (
				<Card className="mb-0 mt-0 w-full py-3">
					<div className="flex justify-between border-b px-3 pb-2">
						<div className="flex gap-1 ">
							<Filter type="dateRange" />
							<Filter type="station" />
							<Filter type="alarmType" />
							<Filter type="alarmPriority" />
							<Filter type="routeDirection" />
						</div>
						<div>
							<Button size="sm">모두 보이기</Button>
						</div>
					</div>
					<div className="flex flex-wrap items-center justify-between px-3 pt-2">
						<div>검색결과 : 전체 50건의 알람이 검색되었습니다. (조치완료 35건 - 조치율 70%)</div>
						<div className="flex flex-wrap gap-x-1">
							<Button size="sm">모두 보이기</Button>
							<Button size="sm">모두 숨기기</Button>
						</div>
					</div>
				</Card>
			) : (
				<div className="flex gap-1">
					<Button size="sm" color="blue" icon="filter" onClick={() => setIsDrawerOpen(true)}>
						필터옵션
					</Button>
					<ModalFilter isModalOpen={isDrawerOpen} closeModal={() => setIsDrawerOpen(false)} />
				</div>
			)}
		</>
	);
}
