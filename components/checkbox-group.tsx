import { cls } from "@/libs/client/utility";
import { useState } from "react";
import { useForm } from "react-hook-form";
import Input from "./input";

interface InitialCheckbox {
	id: number;
	[key: string]: any;
}

interface CheckboxProps {
	initialState: number[];
	initialCheckbox: InitialCheckbox[];
	onChangeHandler: (param: any) => void;
	hasAllCheck: boolean;
	className?: string;
}

export default function CheckboxGroup({
	initialState,
	initialCheckbox,
	onChangeHandler,
	hasAllCheck,
	className,
}: CheckboxProps) {
	const { register } = useForm();
	const [onAllChecked, setOnAllChecked] = useState(true);

	const handleCheck = (checkedId: number) => {
		const newIds = initialState?.includes(checkedId)
			? initialState?.filter((id) => id !== checkedId)
			: [...(initialState ?? []), checkedId];
		onChangeHandler(newIds);
		// handleSubmit(onValid)();
	};
	const toggleAllCheckbox = () => {
		if (!onAllChecked) {
			const allIds = initialCheckbox.map((item) => item.id);
			onChangeHandler(allIds);
			setOnAllChecked(!onAllChecked);
		} else {
			onChangeHandler([]);
			setOnAllChecked(!onAllChecked);
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
						checked={onAllChecked}
					/>
				) : null}
				{initialCheckbox.map((alarmTypeItem) => (
					<Input
						key={alarmTypeItem.id}
						register={register("selectedAlarmTypes")}
						label={alarmTypeItem.name}
						type="checkbox"
						value={alarmTypeItem.id}
						name={alarmTypeItem.id.toString()}
						className={cls("my-1 select-none", hasAllCheck ? "ml-3" : "")}
						onChange={() => handleCheck(alarmTypeItem.id)}
						checked={initialState.includes(alarmTypeItem.id)}
					/>
				))}
			</div>
		</div>
	);
}
