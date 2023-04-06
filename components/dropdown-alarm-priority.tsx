import { useFilterAPI, useFilterData } from "@/contexts/filterContext";
import useDropdown from "@/libs/client/useDropdown";
import { filterValue } from "@/libs/client/utility";
import CheckboxGroup from "./checkbox-group";
import Dropdown from "./dropdown";

export default function DropdownAlarmPriority() {
	const { ref, dropdownRef, toggleDropdown, isDropdownOpen, position } = useDropdown();
	const { alarmPriority } = useFilterData();
	const { onAlarmPriorityChange } = useFilterAPI();
	const alarmPriorityList = [
		{ id: 1, name: "알람" },
		{ id: 2, name: "즉시조치" },
		{ id: 3, name: "조치완료" },
	];

	return (
		<>
			<div
				ref={ref}
				className="relative flex cursor-pointer rounded border border-slate-300 bg-white py-1.5 pr-3 pl-2 text-sm"
				onClick={toggleDropdown}
			>
				<span className="" id="alarmPriority">
					상태 : {filterValue(alarmPriorityList, alarmPriority!)}
				</span>
			</div>
			<Dropdown isDropdownOpen={isDropdownOpen} position={position} dropdownRef={dropdownRef}>
				<CheckboxGroup
					hasAllCheck={false}
					initialState={alarmPriority!}
					initialCheckbox={alarmPriorityList}
					onChangeHandler={onAlarmPriorityChange}
				/>
			</Dropdown>
		</>
	);
}
