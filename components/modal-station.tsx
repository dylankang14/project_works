import { useDefaultData, useFilterAPI, useFilterData } from "@/contexts/filterContext";
import { cls } from "@/libs/client/utility";
import { useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import Icon from "./icon";
import Input from "./input";
import Modal, { ModalProps } from "./modal";
import useSWR from "swr";
import useMutation from "@/libs/client/useMutation";

interface ModalPropsWithClass extends ModalProps {
	className?: string;
}

export default function ModalStation({ isModalOpen, closeModal, className }: ModalPropsWithClass) {
	const { alarmType } = useFilterData();
	const { onAlarmTypeChange } = useFilterAPI();
	const { alarmType: defaultAlarmType } = useDefaultData();
	const { register } = useForm();
	const [isAllChecked, setIsAllChecked] = useState(true);

	// const alarmTypes = [
	// 	{ id: 1, name: "검측항목-01" },
	// 	{ id: 2, name: "검측항목-02" },
	// 	{ id: 3, name: "검측항목-03" },
	// 	{ id: 4, name: "검측항목-04" },
	// 	{ id: 5, name: "검측항목-05" },
	// 	{ id: 6, name: "검측항목-06" },

	// 	{ id: 7, name: "검측항목-07" },
	// 	{ id: 8, name: "검측항목-08" },
	// 	{ id: 9, name: "검측항목-09" },
	// 	{ id: 10, name: "검측항목-10" },
	// 	{ id: 11, name: "검측항목-11" },
	// 	{ id: 12, name: "검측항목-12" },
	// ];
	const handleCheck = (checkedId: number) => {
		const newIds = alarmType?.includes(checkedId)
			? alarmType?.filter((id) => id !== checkedId)
			: [...(alarmType ?? []), checkedId];
		onAlarmTypeChange(newIds);
		// handleSubmit(onValid)();
	};
	const toggleAllCheckbox = () => {
		if (defaultAlarmType) {
			if (!isAllChecked) {
				const allIds = defaultAlarmType.map((item: any) => item.ALARMTYPE_ID);
				onAlarmTypeChange(allIds);
				setIsAllChecked(!isAllChecked);
			} else {
				onAlarmTypeChange([]);
				setIsAllChecked(!isAllChecked);
			}
		}
	};

	return (
		<Modal isModalOpen={isModalOpen} closeModal={closeModal} className="min-w-[200px]" containerClass="items-start">
			<div className={cls("my-2", className ? className : "")}>
				<div className="flex justify-between border-b px-3 py-2 font-[500]">
					<span>검측소 선택</span>
					<span onClick={closeModal}>
						<Icon type="xMark" />
					</span>
				</div>
				<div className="flex flex-col gap-2 px-5 py-3">
					<Input
						label="모든 검측소 선택"
						type="checkbox"
						name="toggleAllCheckbox"
						onChange={toggleAllCheckbox}
						className="my-1 select-none font-bold"
						checked={isAllChecked}
					/>
					{defaultAlarmType?.map((alarmTypeItem: any) => (
						<Input
							key={alarmTypeItem.ALARMTYPE_ID}
							label={alarmTypeItem.DESCRIPTION}
							type="checkbox"
							value={alarmTypeItem.ALARMTYPE_ID}
							name={alarmTypeItem.DESCRIPTION}
							className="my-1 ml-3 select-none"
							onChange={() => handleCheck(alarmTypeItem.ALARMTYPE_ID)}
							checked={alarmType?.includes(alarmTypeItem.ALARMTYPE_ID)}
						/>
					))}
				</div>
			</div>
		</Modal>
	);
}
