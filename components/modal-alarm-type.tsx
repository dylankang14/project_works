import { useFilterAPI, useFilterData } from "@/contexts/filterContext";
import { cls } from "@/libs/client/utility";
import { useEffect } from "react";
import { useForm } from "react-hook-form";
import Icon from "./icon";
import Input from "./input";
import Modal, { ModalProps } from "./modal";

interface ModalPropsWithClass extends ModalProps {
	className?: string;
}

export default function ModalAlarmType({ isModalOpen, closeModal, className }: ModalPropsWithClass) {
	const { alarmType } = useFilterData();
	const { onAlarmTypeChange } = useFilterAPI();
	const { register, handleSubmit, watch, getValues } = useForm({
		// defaultValues: { alarmTypeId: alarmType },
	});

	const alarmTypes = [
		{ id: 1, name: "검측항목-01" },
		{ id: 2, name: "검측항목-02" },
		{ id: 3, name: "검측항목-03" },
		{ id: 4, name: "검측항목-04" },
		{ id: 5, name: "검측항목-05" },
		{ id: 6, name: "검측항목-06" },
		{ id: 7, name: "검측항목-07" },
		{ id: 8, name: "검측항목-08" },
		{ id: 9, name: "검측항목-09" },
		{ id: 10, name: "검측항목-10" },
		{ id: 11, name: "검측항목-11" },
		{ id: 12, name: "검측항목-12" },
	];
	console.log(watch());
	const handleCheck = (checkedId: number) => {
		// const val = getValues();
		console.log("!!!", alarmType, checkedId);
		// const newIds = alarmType?.includes(checkedId)
		// 	? alarmType?.filter((id) => id !== checkedId)
		// 	: [...(alarmType ?? []), checkedId];
		// console.log(newIds);
		// onAlarmTypeChange(newIds);
		// return newIds;
	};

	return (
		<Modal isModalOpen={isModalOpen} closeModal={closeModal} className="min-w-[200px]">
			<div className={cls("my-2", className ? className : "")}>
				<div className="flex justify-between border-b px-3 py-2 font-[500]">
					<span>알람타입</span>
					<span onClick={closeModal}>
						<Icon type="xMark" />
					</span>
				</div>
				<div className="flex flex-col gap-2 px-5 py-3">
					<Input
						label="모든 알람 선택"
						type="checkbox"
						value="selectAllAlarmType"
						name="selectAllAlarmType"
						className="my-1 select-none font-bold"
					/>
					{alarmTypes.map((alarmTypeItem) => (
						<Input
							key={alarmTypeItem.id}
							register={register("alarmTypeId")}
							label={alarmTypeItem.name + alarmTypeItem.id}
							type="checkbox"
							value={alarmTypeItem.id.toString()}
							name="alarmTypeId"
							className="my-1 ml-3 select-none"
							onChange={() => handleCheck(alarmTypeItem.id)}
							checked={alarmType.includes(alarmTypeItem.id)}
						/>
					))}
				</div>
			</div>
		</Modal>
	);
}
