import useWindowDimensions from "@/libs/client/useWindowDimensions";
import Filter from "./filter";
import Button from "./button";
import ModalFilter from "./modal-filter";
import { useState } from "react";
import Card from "./card";
import { useForm } from "react-hook-form";
import useMutation from "@/libs/client/useMutation";

interface HeaderFilterProps {
	[key: string]: any;
}

export default function HeaderFilter({ search, totalCount }: HeaderFilterProps) {
	const { width } = useWindowDimensions();
	const [isDrawerOpen, setIsDrawerOpen] = useState(false);

	return (
		<div>
			{width! >= 768 ? (
				<Card className="p-4">
					<form className="flex justify-between gap-1">
						<div className="flex gap-1">
							<Filter type="dateTimeRange" />
							<Filter type="inspectionPoint" />
							{/* <Filter type="alarmType" /> */}
							<Filter type="trainNumber" />
						</div>
						<div className="flex-shrink-0">
							<Button size="md" type="submit" onClick={search}>
								검색
							</Button>
						</div>
					</form>
					<div className="mt-2 flex items-center rounded border border-red-400 bg-red-100 px-2 py-1.5 text-red-600">
						<span className="pr-1 font-semibold">검색결과 : </span>
						<span>
							전체 <span className="font-semibold">{totalCount}건</span>의 차량검사 결과가 검색되었습니다.
						</span>
					</div>
				</Card>
			) : (
				<div className="flex">
					<Button size="sm" color="blue" icon="filter" onClick={() => setIsDrawerOpen(true)} className="ml-auto">
						필터옵션
					</Button>
					<ModalFilter onSearch={search} isModalOpen={isDrawerOpen} closeModal={() => setIsDrawerOpen(false)} />
				</div>
			)}
		</div>
	);
}
