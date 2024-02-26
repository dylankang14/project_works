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

export default function HeaderFilter({ updateSearchParams, search }: HeaderFilterProps) {
	const { width } = useWindowDimensions();
	const [isDrawerOpen, setIsDrawerOpen] = useState(false);

	return (
		<div>
			{width! >= 768 ? (
				<Card className="p-4">
					<form className="flex justify-between gap-1">
						<div className="flex gap-1">
							<Filter type="dateTimeRange" updateSearchParams={updateSearchParams} />
							<Filter type="inspectionPoint" updateSearchParams={updateSearchParams} />
							{/* <Filter type="alarmType" /> */}
							<Filter type="trainNumber" updateSearchParams={updateSearchParams} />
						</div>
						<div className="flex-shrink-0">
							<Button size="md" type="submit" onClick={search}>
								검색
							</Button>
						</div>
					</form>
					<div className="mt-2 border-t pt-2">
						<span className="font-semibold">검색결과 : </span>
						전체 50건의 알람이 검색되었습니다.
					</div>
				</Card>
			) : (
				<div className="flex">
					<Button size="sm" color="blue" icon="filter" onClick={() => setIsDrawerOpen(true)} className="ml-auto">
						필터옵션
					</Button>
					<ModalFilter
						isModalOpen={isDrawerOpen}
						updateSearchParams={updateSearchParams}
						closeModal={() => setIsDrawerOpen(false)}
					/>
				</div>
			)}
		</div>
	);
}
