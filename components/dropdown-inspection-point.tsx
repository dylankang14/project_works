import { useDefaultData, useFilterAPI, useFilterData } from "@/contexts/filterContext";
import useDropdown from "@/libs/client/useDropdown";
import { filterValue } from "@/libs/client/utility";
import CheckboxGroup from "./checkbox-group";
import Dropdown from "./dropdown";
import Icon from "./icon";

export default function DropdownInspectionPoint() {
	const { ref, dropdownRef, toggleDropdown, isDropdownOpen, position } = useDropdown();

	const { inspectionPoint } = useFilterData();
	const { onInspectionPointChange } = useFilterAPI();
	const { inspectionPoint: defaultInspectionPoint } = useDefaultData();

	return (
		<>
			<div
				ref={ref}
				className="relative flex flex-shrink-0 cursor-pointer rounded border border-slate-300 bg-white py-1.5 pl-2 pr-3 text-sm"
				onClick={toggleDropdown}
			>
				<span className="flex items-center gap-x-2">
					<Icon type="station" className="h-5 w-5" />
					검측소 : {filterValue({ list: defaultInspectionPoint!, value: inspectionPoint, uniqueId: "CONTAINER_FK" })}
				</span>
			</div>
			<Dropdown isDropdownOpen={isDropdownOpen} position={position} dropdownRef={dropdownRef}>
				<CheckboxGroup
					hasAllCheck={true}
					initialState={inspectionPoint}
					initialCheckbox={defaultInspectionPoint!}
					uniqueId="CONTAINER_FK"
					onChangeHandler={onInspectionPointChange}
				/>
			</Dropdown>
		</>
	);
}
