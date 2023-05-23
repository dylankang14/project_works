import { useFilterAPI, useFilterData } from "@/contexts/filterContext";
import useDropdown from "@/libs/client/useDropdown";
import { filterValue } from "@/libs/client/utility";
import CheckboxGroup from "./checkbox-group";
import Dropdown from "./dropdown";
import { useLangData } from "@/contexts/langContext";

export default function DropdownRouteDirection() {
	const { ref, dropdownRef, toggleDropdown, isDropdownOpen, position } = useDropdown();
	const { routeDirection } = useFilterData();
	const { onRouteDirectionChange } = useFilterAPI();
	const { common } = useLangData();
	const routeDirectionList = [
		{ id: 1, name: `${common?.get("C6420")}` },
		{ id: 2, name: `${common?.get("C6421")}` },
	];

	return (
		<>
			<div
				ref={ref}
				className="relative flex cursor-pointer rounded border border-slate-300 bg-white py-1.5 pr-3 pl-2 text-sm"
				onClick={toggleDropdown}
			>
				<span className="" id="alarmPriority">
					{common?.get("C4126")} : {filterValue(routeDirectionList, routeDirection!, true)}
				</span>
			</div>
			<Dropdown isDropdownOpen={isDropdownOpen} position={position} dropdownRef={dropdownRef}>
				<CheckboxGroup
					hasAllCheck={false}
					initialState={routeDirection!}
					initialCheckbox={routeDirectionList}
					onChangeHandler={onRouteDirectionChange}
				/>
			</Dropdown>
		</>
	);
}
