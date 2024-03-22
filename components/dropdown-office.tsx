import { useFilterAPI, useFilterData } from "@/contexts/filterContext";
import useDropdown from "@/libs/client/useDropdown";
import { filterValue } from "@/libs/client/utility";
import CheckboxGroup from "./checkbox-group";
import Dropdown from "./dropdown";
import Icon from "./icon";

export default function DropdownOffice() {
	const { ref, dropdownRef, toggleDropdown, isDropdownOpen, position } = useDropdown();
	// const { alarmPriority } = useFilterData();
	// const { onAlarmPriorityChange } = useFilterAPI();
	const selectedMemberOffice = [0, 1, 2, 3, 4];
	const memberOfficeList = [
		{ id: 0, name: "사업소-0" },
		{ id: 1, name: "사업소-1" },
		{ id: 2, name: "사업소-2" },
		{ id: 3, name: "사업소-3" },
		{ id: 4, name: "사업소-4" },
	];
	const onMemberOfficeChange = () => {};

	return (
		<>
			<div
				ref={ref}
				className="relative flex cursor-pointer rounded border border-slate-300 bg-white py-1.5 pl-2 pr-3 text-sm"
				onClick={toggleDropdown}
			>
				<span className="flex items-center gap-x-2">
					<Icon type="office" className="h-5 w-5" /> {filterValue(memberOfficeList, selectedMemberOffice!)}
				</span>
			</div>
			<Dropdown isDropdownOpen={isDropdownOpen} position={position} dropdownRef={dropdownRef}>
				<CheckboxGroup
					hasAllCheck={false}
					initialState={selectedMemberOffice!}
					initialCheckbox={memberOfficeList}
					onChangeHandler={onMemberOfficeChange}
				/>
			</Dropdown>
		</>
	);
}
