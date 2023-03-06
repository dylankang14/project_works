import Image from "next/image";
import Link from "next/link";
import React from "react";
import logo from "../public/logo.svg";
import Breadcrumbs from "./breadcrumbs";
import Icon from "./icon";

interface HeaderProps {
	toggleDrawer: () => void;
}

export default function Header({ toggleDrawer }: HeaderProps) {
	return (
		<header className="sticky top-0 z-10 flex w-full items-center justify-between border-b bg-white px-2 py-1 lg:z-20">
			<div className="flex items-center">
				<div className="flex w-60 items-center px-2">
					<Link href="/" className="logo relative flex-1 cursor-pointer select-none px-2">
						<Image src={logo} alt="Logo" priority={true} className="h-auto w-28" />
					</Link>
					<div
						className="h-12 w-12 cursor-pointer select-none p-3 text-slate-600 hover:text-slate-800"
						onClick={toggleDrawer}
					>
						<Icon type="menu" />
					</div>
				</div>
				{/* <Breadcrumbs /> */}
			</div>
			<div className="">
				<button className="h-12 w-12 p-3" tabIndex={0}>
					<Icon type="userCircle" />
				</button>
			</div>
		</header>
	);
}
