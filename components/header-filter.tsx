import useWindowDimensions from "@/libs/client/useWindowDimensions";
import Filter from "./filter";
import Button from "./button";
import ModalFilter from "./modal-filter";
import { useState } from "react";
import Card from "./card";
import { useForm } from "react-hook-form";
import useMutation from "@/libs/client/useMutation";

interface FilterFormType {
	[key: string]: string;
}

export default function HeaderFilter() {
	const { width } = useWindowDimensions();
	const [isDrawerOpen, setIsDrawerOpen] = useState(false);
	const { register, handleSubmit } = useForm<FilterFormType>();
	const [filter, { loading, data, error }] = useMutation("http://192.168.0.160:22080/API/alarm");
	const onValid = (filterForm: FilterFormType) => {
		if (loading) return;
		filter(filterForm);
		console.log(filterForm);
	};
	return (
		<div>
			{width! >= 768 ? (
				<Card className="p-4">
					<div className="flex justify-between gap-1">
						<form className="flex gap-1">
							<Filter type="dateRange" />
							<Filter type="station" />
							<Filter type="alarmType" />
							<Filter type="trainNumber" />
						</form>
						<div>
							<Button size="sm" type="submit">
								검색
							</Button>
						</div>
					</div>
					<div className="mt-2 border-t pt-2">
						<span className="font-semibold">검색결과 : </span>
						전체 50건의 알람이 검색되었습니다.
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
		</div>
	);
}
