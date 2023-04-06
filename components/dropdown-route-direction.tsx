import { useFilterAPI, useFilterData } from "@/contexts/filterContext";
import useDropdown from "@/libs/client/useDropdown";
import { filterValue } from "@/libs/client/utility";
import CheckboxGroup from "./checkbox-group";
import Dropdown from "./dropdown";

export default function DropdownRouteDirection() {
	const { ref, dropdownRef, toggleDropdown, isDropdownOpen, position } = useDropdown();
	const { routeDirection } = useFilterData();
	const { onRouteDirectionChange } = useFilterAPI();
	const routeDirectionList = [
		{ id: 1, name: "상행" },
		{ id: 2, name: "하행" },
	];

	return (
		<>
			<div
				ref={ref}
				className="relative flex cursor-pointer rounded border border-slate-300 bg-white py-1.5 pr-3 pl-2 text-sm"
				onClick={toggleDropdown}
			>
				<span className="" id="alarmPriority">
					방향 : {filterValue(routeDirectionList, routeDirection!, true)}
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
