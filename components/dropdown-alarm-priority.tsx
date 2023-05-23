import { useFilterAPI, useFilterData } from "@/contexts/filterContext";
import useDropdown from "@/libs/client/useDropdown";
import { filterValue } from "@/libs/client/utility";
import CheckboxGroup from "./checkbox-group";
import Dropdown from "./dropdown";
import { useLangData } from "@/contexts/langContext";

export default function DropdownAlarmPriority() {
	const { ref, dropdownRef, toggleDropdown, isDropdownOpen, position } = useDropdown();
	const { alarmPriority } = useFilterData();
	const { onAlarmPriorityChange } = useFilterAPI();
	const { common } = useLangData();

	const alarmPriorityList = [
		{ id: 1, name: common?.get("C4702") },
		{ id: 2, name: common?.get("C0031") },
		{ id: 3, name: common?.get("C0080") },
	];

	return (
		<>
			<div
				ref={ref}
				className="relative flex cursor-pointer rounded border border-slate-300 bg-white py-1.5 pr-3 pl-2 text-sm"
				onClick={toggleDropdown}
			>
				<span className="" id="alarmPriority">
					{common?.get("C4850")} : {filterValue(alarmPriorityList, alarmPriority!)}
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
