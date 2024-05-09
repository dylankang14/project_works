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

export default function ModalAlarmType({ isModalOpen, closeModal, className }: ModalPropsWithClass) {
	const { alarmType } = useFilterData();
	const { onAlarmTypeChange } = useFilterAPI();
	const { alarmType: defaultAlarmType } = useDefaultData();
	const { register } = useForm();
	const [isAllChecked, setIsAllChecked] = useState(true);

	const alarmTypes = [
		{ id: 1, name: "전차선 높이/편위/마모" },
		{ id: 2, name: "팬터그래프 충격" },
		{ id: 3, name: "전차선로" },
		{ id: 4, name: "유도배수동판" },
		{ id: 5, name: "침목 및 체결구 검사" },
	];
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
				const allIds = defaultAlarmType.map((item: any) => item.id);
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
					<span>알람타입</span>
					<span onClick={closeModal}>
						<Icon type="xMark" />
					</span>
				</div>
				<div className="flex flex-col gap-2 px-5 py-3">
					<Input
						label="모든 알람 선택"
						type="checkbox"
						name="toggleAllCheckbox"
						onChange={toggleAllCheckbox}
						className="my-1 select-none font-bold"
						checked={isAllChecked}
					/>
					{/* {defaultAlarmType?.map((alarmTypeItem: any) => (
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
					))} */}
					{alarmTypes?.map((alarmTypeItem: any) => (
						<Input
							key={alarmTypeItem.id}
							label={alarmTypeItem.name}
							type="checkbox"
							value={alarmTypeItem.id}
							name={alarmTypeItem.name}
							className="my-1 ml-3 select-none"
							onChange={() => handleCheck(alarmTypeItem.id)}
							checked={alarmType?.includes(alarmTypeItem.id)}
						/>
					))}
				</div>
			</div>
		</Modal>
	);
}
