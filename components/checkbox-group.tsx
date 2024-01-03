import { cls } from "@/libs/client/utility";
import { useState } from "react";
import { useForm } from "react-hook-form";
import Input from "./input";

interface InitialCheckbox {
	id?: number;
	[key: string]: any;
}

interface CheckboxProps {
	initialState: number[];
	initialCheckbox: InitialCheckbox[];
	uniqueId: "id" | string;
	onChangeHandler: (param: any) => void;
	hasAllCheck: boolean;
	className?: string;
}

export default function CheckboxContext({
	initialState,
	initialCheckbox,
	uniqueId = "id",
	onChangeHandler,
	hasAllCheck,
	className,
}: CheckboxProps) {
	const { register } = useForm();
	const [isAllChecked, setIsAllChecked] = useState(true);

	const handleCheck = (checkedId: number) => {
		const newIds = initialState?.includes(checkedId)
			? initialState?.filter((id) => id !== checkedId)
			: [...(initialState ?? []), checkedId];
		onChangeHandler(newIds);
		// handleSubmit(onValid)();
	};
	const toggleAllCheckbox = () => {
		if (!isAllChecked) {
			const allIds = initialCheckbox.map((item) => item.id);
			onChangeHandler(allIds);
			setIsAllChecked(!isAllChecked);
		} else {
			onChangeHandler([]);
			setIsAllChecked(!isAllChecked);
		}
	};

	return (
		<div className={cls("my-2", className ? className : "")}>
			<div className="flex flex-col gap-2">
				{hasAllCheck ? (
					<Input
						label="모두 선택"
						type="checkbox"
						name="toggleAllCheckbox"
						onChange={toggleAllCheckbox}
						className="my-1 select-none font-bold"
						checked={isAllChecked}
					/>
				) : null}
				{initialCheckbox.map((alarmTypeItem) => (
					<Input
						key={alarmTypeItem[uniqueId]}
						register={register("selectedAlarmTypes")}
						label={alarmTypeItem.name}
						type="checkbox"
						value={alarmTypeItem[uniqueId]}
						name={alarmTypeItem[uniqueId].toString()}
						className={cls("my-1 select-none", hasAllCheck ? "ml-3" : "")}
						onChange={() => handleCheck(alarmTypeItem[uniqueId])}
						checked={initialState.includes(alarmTypeItem[uniqueId])}
					/>
				))}
			</div>
		</div>
	);
}
