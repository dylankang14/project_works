import Button from "@/components/button";
import CardAlarm, { AlarmProps } from "@/components/card-alarm";
import CardTable from "@/components/card-table";
import Filter from "@/components/filter";
import HeaderFilter from "@/components/header-filter";
import Icon from "@/components/icon";
import ModalFilter from "@/components/modal-filter";
import Pagination from "@/components/pagination";
import Radio from "@/components/radio";
import RadioGroup from "@/components/radio-group";
import useWindowDimensions from "@/libs/client/useWindowDimensions";
import { paginate } from "@/libs/client/utility";
import { useState } from "react";

export default function AlarmList() {
	const { width } = useWindowDimensions();
	const [isDrawerOpen, setIsDrawerOpen] = useState(false);
	const data = Array.from(Array(50).keys()).map((i) => ({
		id: i,
		priority: i % 2,
		fixed: i % 3 > 1,
	}));
	const dataForTable = Array.from(Array(50).keys()).map((i) => ({
		id: i,
		datetime: "2023-04-06 09:50:12",
		locale: "20-13",
		detail: {
			leftVerticalWear: "9.96mm",
			leftLateralWear: "8.88mm",
			rightVerticalWear: "6.59mm",
			rightLateralWear: "5.85mm",
		},
		priority: i % 2,
		// fixed: i % 3 > 1,
	}));
	const dataType: string[] = ["No", "검측일시", "검측위치", "상세", "상태"];
	const [currentPage, setCurrentPage] = useState(1);
	const pageSize = 5;
	const onPageChange = (page: number) => setCurrentPage(page);
	const paginatedData = paginate<AlarmProps>(data, currentPage, pageSize);
	const radioItems = [
		{ text: <Icon type="queue" />, value: "queue" },
		{ text: <Icon type="list" />, value: "list" },
	];
	const [radioDefault, setRadioDefault] = useState("queue");

	return (
		<div className="">
			<div className="flex flex-wrap items-center justify-between print:hidden">
				<HeaderFilter />
				<RadioGroup items={radioItems} defaultChecked={radioDefault} onChangeRadio={(val) => setRadioDefault(val)} />
			</div>
			<div className="print:block">
				{radioDefault === "queue" ? (
					<>
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
					</>
				) : (
					<CardTable hasLink={true} pathname="alarm/detail" data={dataForTable} dataType={dataType} pageSize={20} />
				)}
			</div>
		</div>
	);
}
