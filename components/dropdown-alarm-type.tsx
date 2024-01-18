import { useDefaultData, useFilterAPI, useFilterData } from "@/contexts/filterContext";
import useDropdown from "@/libs/client/useDropdown";
import { filterValue } from "@/libs/client/utility";
import CheckboxGroup from "./checkbox-group";
import Dropdown from "./dropdown";
import Icon from "./icon";

export default function DropdownAlarmType() {
	const { ref, dropdownRef, toggleDropdown, isDropdownOpen, position } = useDropdown();

	const { alarmType } = useFilterData();
	const { onAlarmTypeChange } = useFilterAPI();
	const { alarmType: defaultAlarmType } = useDefaultData();

	return (
		<>
			<div
				ref={ref}
				className="relative flex cursor-pointer rounded border border-slate-300 bg-white py-1.5 pl-2 pr-3 text-sm"
				onClick={toggleDropdown}
			>
				<span className="flex items-center gap-x-2">
					<Icon type="station" className="h-5 w-5" />
					알람타입 : {filterValue({ list: defaultAlarmType!, value: alarmType, uniqueId: "ALARMTYPE_ID" })}
				</span>
			</div>
			<Dropdown isDropdownOpen={isDropdownOpen} position={position} dropdownRef={dropdownRef}>
				<CheckboxGroup
					hasAllCheck={true}
					initialState={alarmType}
					initialCheckbox={defaultAlarmType!}
					uniqueId="ALARMTYPE_ID"
					onChangeHandler={onAlarmTypeChange}
				/>
			</Dropdown>
		</>
	);
}
