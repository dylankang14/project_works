import Image from "next/image";
import Link from "next/link";
import React from "react";
import logo from "../public/logo.svg";
import Breadcrumbs from "./breadcrumbs";

export default function Header() {
	return (
		<header className="sticky top-0 z-10 flex w-full items-center justify-between border-b bg-white px-2 py-1 lg:z-20">
			<div className="flex items-center ">
				<Link href="/" className="logo relative cursor-pointer select-none px-2">
					<Image src={logo} alt="Logo" priority={true} className="h-auto w-28" />
				</Link>
				<div className="h-12 w-12 cursor-pointer select-none p-3">
					<svg
						xmlns="http://www.w3.org/2000/svg"
						fill="none"
						viewBox="0 0 24 24"
						strokeWidth={1.5}
						stroke="currentColor"
						className="h-6 w-6"
					>
						<path strokeLinecap="round" strokeLinejoin="round" d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5" />
					</svg>
				</div>
				<Breadcrumbs />
			</div>
			<div className="">
				<button className="h-12 w-12 p-3" tabIndex={0}>
					<svg
						xmlns="http://www.w3.org/2000/svg"
						fill="none"
						viewBox="0 0 24 24"
						strokeWidth={1.5}
						stroke="currentColor"
						className="h-6 w-6"
					>
						<path
							strokeLinecap="round"
							strokeLinejoin="round"
							d="M17.982 18.725A7.488 7.488 0 0012 15.75a7.488 7.488 0 00-5.982 2.975m11.963 0a9 9 0 10-11.963 0m11.963 0A8.966 8.966 0 0112 21a8.966 8.966 0 01-5.982-2.275M15 9.75a3 3 0 11-6 0 3 3 0 016 0z"
						/>
					</svg>
				</button>
			</div>
		</header>
	);
}
