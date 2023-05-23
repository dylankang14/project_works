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
			title: `${common?.get("C4102")}`,
			icon: "alarm",
		},
		{
			href: "/facility",
			title: `${common?.get("C4290")}`,
			icon: "facility",
		},
		{
			href: null,
			title: `${common?.get("C0085")}`,
			icon: "user",
			submenu: [
				{ href: "/user/info", title: `User ${common?.get("C0021")}` },
				{ href: "/user/activity", title: `${common?.get("C1133")} ${common?.get("C0021")}` },
				{ href: "/user/work/fixed", title: `${common?.get("C0080")} ${common?.get("C0021")}` },
				{ href: "/user/security", title: `${common?.get("C5116")} ${common?.get("C0003")}` },
			],
		},
	];
	const menuItemsForOffice: MenuTypes[] = [
		{
			href: null,
			title: `${common?.get("C6301")} 관리`,
			icon: "office",
			submenu: [
				{ href: "/office/statistics", title: `${common?.get("C6301")} ${common?.get("C5116")}` },
				{ href: "/office/user/list", title: `${common?.get("C1121")}` },
				{ href: "/office/info", title: `${common?.get("C6301")} ${common?.get("C0021")}` },
			],
		},
	];
	const menuItemsForAdmin: MenuTypes[] = [
		{
			href: null,
			title: `${common?.get("C4286")}`,
			icon: "admin",
			submenu: [
				{ href: `/admin/office/${1}/statistics`, title: `${common?.get("C6301")} ${common?.get("C5116")}` },
				{ href: `/admin/user/${1}/statistics`, title: `User ${common?.get("C5116")}` },
				{
					href: "/admin/manage/office",
					title: `${common?.get("C2305")} ${common?.get("C6301")} ${common?.get("C0021")}`,
				},
				{ href: "/admin/manage/user", title: `${common?.get("C2305")} ${common?.get("C1121")}` },
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
