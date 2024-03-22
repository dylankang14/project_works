import { useFilterAPI, useFilterData } from "@/contexts/filterContext";
import useDropdown from "@/libs/client/useDropdown";
import { filterValue } from "@/libs/client/utility";
import Link from "next/link";
import CheckboxGroup from "./checkbox-group";
import Dropdown from "./dropdown";
import Icon from "./icon";
import useMutation from "@/libs/client/useMutation";
import { useEffect } from "react";
import { useRouter } from "next/router";

export default function DropdownUser() {
	const router = useRouter();
	const { ref, dropdownRef, toggleDropdown, isDropdownOpen, position } = useDropdown();
	const [logout, { loading, data, error }] = useMutation("http://121.139.31.25:5411/users/logout");
	const onLogout = () => {
		if (loading) return;
		logout();
		
	};

	useEffect(() => {
		if (data?.OK) {
			router.push("/")
		}
	}, [data, router])
	
	

	return (
		<>
			<div ref={ref} className="relative cursor-pointer" onClick={toggleDropdown}>
				<Icon type="userCircle" />
			</div>
			<Dropdown isDropdownOpen={isDropdownOpen} position={position} dropdownRef={dropdownRef} direction={"left"}>
				<div className="flex flex-col gap-2">
					{/* <Link href={"/user/info"}>
						<div className="hover:font-bold">서울사업소</div>
					</Link> */}
					<div onClick={onLogout} className="cursor-pointer">
						<div className="hover:font-bold">로그아웃</div>
					</div>
				</div>
			</Dropdown>
		</>
	);
}
