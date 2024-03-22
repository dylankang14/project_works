import { useFilterAPI, useFilterData } from "@/contexts/filterContext";
import useDropdown from "@/libs/client/useDropdown";
import { filterValue } from "@/libs/client/utility";
import Link from "next/link";
import CheckboxGroup from "./checkbox-group";
import Dropdown from "./dropdown";
import Icon from "./icon";

export default function DropdownUser() {
	const { ref, dropdownRef, toggleDropdown, isDropdownOpen, position } = useDropdown();

	return (
		<>
			<div ref={ref} className="relative cursor-pointer" onClick={toggleDropdown}>
				<Icon type="userCircle" />
			</div>
			<Dropdown isDropdownOpen={isDropdownOpen} position={position} dropdownRef={dropdownRef} direction={"left"}>
				<div className="flex flex-col gap-2">
					<Link href={"/user/info"}>
						<div className="hover:font-bold"> 계정 정보</div>
					</Link>
					<Link href={"/user/activity"}>
						<div className="hover:font-bold"> 로그인 내역</div>
					</Link>
					<Link href={"/user/work/fixed"}>
						<div className="hover:font-bold"> 조치완료 내역</div>
					</Link>
					<Link href={"/user/security"}>
						<div className="hover:font-bold"> 비밀번호 변경</div>
					</Link>
				</div>
			</Dropdown>
		</>
	);
}
