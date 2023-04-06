import Button from "@/components/button";
import CardAlarm, { AlarmProps } from "@/components/card-alarm";
import Filter from "@/components/filter";

import Pagination from "@/components/pagination";
import { paginate } from "@/libs/client/utility";
import { useState } from "react";

export default function AlarmList() {
	const data = Array.from(Array(50).keys()).map((i) => ({
		id: i,
		priority: i % 2,
		fixed: i % 3 > 1,
	}));
	const [currentPage, setCurrentPage] = useState(1);
	const pageSize = 5;
	const onPageChange = (page: number) => setCurrentPage(page);
	const paginatedData = paginate<AlarmProps>(data, currentPage, pageSize);

	return (
		<div className="">
			<div className="flex flex-wrap items-center justify-between print:hidden">
				<div className="flex gap-1">
					<Filter type="dateRange" />
					<Filter type="station" />
					<Filter type="alarmType" />
					<Filter type="alarmPriority" />
					<Filter type="routeDirection" />
				</div>
				<div>
					<Button size="sm" color="slate" icon="print" iconPosition="right" onClick={() => window.print()}>
						프린트
					</Button>
				</div>
			</div>
			<div className="print:block">
				{paginatedData.map((data) => (
					<CardAlarm key={data.id} data={data} />
				))}
				<Pagination
					totalCount={data.length}
					pageSize={pageSize}
					currentPage={currentPage}
					onPageChange={onPageChange}
					className="py-2 print:hidden"
				/>
			</div>
		</div>
	);
}
