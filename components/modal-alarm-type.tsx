import { useDefaultData, useFilterAPI, useFilterData } from "@/contexts/filterContext";
import { cls } from "@/libs/client/utility";
import { useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import Icon from "./icon";
import Input from "./input";
import Modal, { ModalProps } from "./modal";
import useSWR from "swr";
import useMutation from "@/libs/client/useMutation";
import { useLangData } from "@/contexts/langContext";

interface ModalPropsWithClass extends ModalProps {
	className?: string;
}

export default function ModalAlarmType({ isModalOpen, closeModal, className }: ModalPropsWithClass) {
	const { alarmType } = useFilterData();
	const { onAlarmTypeChange } = useFilterAPI();
	const { alarmType: defaultAlarmType } = useDefaultData();
	const { register } = useForm();
	const [isAllChecked, setIsAllChecked] = useState(true);
	const { alarmtype: alarmtypeText, common, alarmcode: alarmcodeText } = useLangData();

	const alarmTypeText = [
		alarmtypeText?.get("C3901"),
		alarmtypeText?.get("C3902"),
		alarmtypeText?.get("C3903"),
		alarmtypeText?.get("C3904"),
		alarmtypeText?.get("C3905"),
		alarmtypeText?.get("C3906"),
		alarmtypeText?.get("C3907"),
		alarmtypeText?.get("C3908"),
		common?.get("C4260"),
		common?.get("C4261"),
		common?.get("C4190"),
		alarmcodeText?.get("2200"),
		common?.get("C4886"),
		alarmcodeText?.get("2400"),
		alarmcodeText?.get("2500"),
		alarmtypeText?.get("C4529"),
		alarmtypeText?.get("C4530"),
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
					<span>{common?.get("C4850")}</span>
					<span onClick={closeModal}>
						<Icon type="xMark" />
					</span>
				</div>
				<div className="flex flex-col gap-2 px-5 py-3">
					<Input
						label={`${common?.get("C4702")} ${common?.get("C0092")}`}
						type="checkbox"
						name="toggleAllCheckbox"
						onChange={toggleAllCheckbox}
						className="my-1 select-none font-bold"
						checked={isAllChecked}
					/>
					{defaultAlarmType?.map((alarmTypeItem: any, index) => (
						<Input
							key={alarmTypeItem.ALARMTYPE_ID}
							label={alarmTypeText[index]}
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
