import Image from "next/image";
import Link from "next/link";
import React from "react";
import logo from "../public/logo.svg";
import Breadcrumbs from "./breadcrumbs";
import DropdownUser from "./dropdown-user";
import Icon from "./icon";
import useWindowDimensions from "@/libs/client/useWindowDimensions";

interface HeaderProps {
	toggleDrawer: () => void;
}

export default function Header({ toggleDrawer }: HeaderProps) {
	const { device } = useWindowDimensions();
	return (
		<header className="sticky top-0 z-10 flex w-full items-center justify-between border-b bg-white px-2 py-1 print:hidden lg:z-20">
			<div className="flex items-center">
				<div className="flex w-auto items-center px-2 lg:w-[200px]">
					{device !== "mobile" ? (
						<Link href="/" className="logo relative flex-1 cursor-pointer select-none px-2">
							<Image src={logo} alt="Logo" priority={true} className="h-auto w-28" />
						</Link>
					) : null}
					<div
						className="h-12 w-12 cursor-pointer select-none p-3 text-slate-600 hover:text-slate-800"
						onClick={toggleDrawer}
					>
						<Icon type="menu" />
					</div>
				</div>
				{/* {device !== "mobile" ? <Breadcrumbs /> : null} */}
			</div>
			{device === "mobile" ? (
				<Link href="/" className="logo relative cursor-pointer select-none px-2">
					<Image src={logo} alt="Logo" priority={true} className="h-auto w-28" />
				</Link>
			) : null}
			<div className="flex flex-wrap gap-x-2 p-3">
				<button className="aspect-square h-6 w-6 rounded-full bg-blue-600 text-white hover:bg-blue-800" tabIndex={0}>
					i
				</button>
				<button className="" tabIndex={0}>
					<DropdownUser />
				</button>
			</div>
		</header>
	);
}
