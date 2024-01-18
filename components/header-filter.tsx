import useWindowDimensions from "@/libs/client/useWindowDimensions";
import Filter from "./filter";
import Button from "./button";
import ModalFilter from "./modal-filter";
import { useState } from "react";

export default function HeaderFilter() {
	const { width } = useWindowDimensions();
	const [isDrawerOpen, setIsDrawerOpen] = useState(false);
	return (
		<>
			{width! >= 768 ? (
				<div className="flex gap-1">
					<Filter type="dateTimeRange" />
					<Filter type="station" />
					<Filter type="alarmType" />
					<Filter type="alarmPriority" />
					<Filter type="routeDirection" />
				</div>
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
