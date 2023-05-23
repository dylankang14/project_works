import useUser from "@/libs/client/useUser";
import NavItem from "./nav-item";
import { useLangData } from "@/contexts/langContext";

export interface MenuTypes {
	href: string | null;
	title: string;
	icon: string;
	submenu?: {
		href: string;
		title: string;
	}[];
}

export default function Nav() {
	const { user } = useUser();
	const { common } = useLangData();
	const menuItemsForUser: MenuTypes[] = [
		{
			href: "/",
			title: `검측 ${common?.get("C4702")}`,
			icon: "alarm",
		},
		{
			href: "/facility",
			title: "시설물 관리",
			icon: "facility",
		},
		{
			href: null,
			title: "계정 관리",
			icon: "user",
			submenu: [
				{ href: "/user/info", title: "계정 정보" },
				{ href: "/user/activity", title: "로그인 내역" },
				{ href: "/user/work/fixed", title: `${common?.get("C0080")} 내역` },
				{ href: "/user/security", title: "비밀번호 변경" },
			],
		},
	];
	const menuItemsForOffice: MenuTypes[] = [
		{
			href: null,
			title: `${common?.get("C6301")} 관리`,
			icon: "office",
			submenu: [
				{ href: "/office/statistics", title: `${common?.get("C6301")} 현황/통계` },
				{ href: "/office/user/list", title: "유저리스트" },
				{ href: "/office/info", title: `${common?.get("C6301")} 정보` },
			],
		},
	];
	const menuItemsForAdmin: MenuTypes[] = [
		{
			href: null,
			title: "최고관리자",
			icon: "admin",
			submenu: [
				{ href: `/admin/office/${1}/statistics`, title: `${common?.get("C6301")} 현황/통계` },
				{ href: `/admin/user/${1}/statistics`, title: "유저 현황/통계" },
				{ href: "/admin/manage/office", title: `전체 ${common?.get("C6301")} 관리` },
				{ href: "/admin/manage/user", title: "전체 유저 관리" },
			],
		},
	];
	const menuItems = [
		...menuItemsForUser,
		...(user.group === "office" ? menuItemsForOffice : []),
		...(user.group === "admin" ? menuItemsForAdmin : []),
	];

	return (
		<nav className="sticky top-[57px]">
			<ul className="px-1 pt-2">
				<NavItem menuItems={menuItems} />
				{/* {user && user.group === "office" && <NavItem menuItems={menuItemsForOffice} />}
				{user && user.group === "admin" && <NavItem menuItems={menuItemsForAdmin} />} */}
			</ul>
		</nav>
	);
}
