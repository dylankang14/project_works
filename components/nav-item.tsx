import { cls } from "@/libs/client/utility";
import Link from "next/link";
import { useRouter } from "next/router";
import { useRef, useState } from "react";
import Icon from "./icon";
import { MenuTypes } from "./nav";

export default function NavItem({ menuItems }: { menuItems: MenuTypes[] }) {
	const [openIndex, setOpenIndex] = useState(-1);
	const router = useRouter();
	const subElement = useRef<any>([]);
	const isActive = (href: string): boolean => {
		return href === "/" ? router.pathname === href : router.pathname.startsWith(href.substring(1), 1);
	};

	return (
		<>
			{menuItems.map((menuItem, index) => (
				<li key={index}>
					{menuItem.href ? (
						<Link
							href={menuItem.href}
							className={cls(
								"flex cursor-pointer items-center gap-1.5 px-3 py-2 hover:text-white",
								isActive(menuItem.href) ? "text-white" : ""
							)}
						>
							<Icon type={menuItem.icon} className="h-5 w-5" />
							{menuItem.title}
						</Link>
					) : (
						<>
							<div
								className={cls(
									"flex cursor-pointer items-center gap-1.5 px-3 py-2 hover:text-white",
									isActive("/" + menuItem.icon) ? "text-white" : ""
								)}
								onClick={() => (openIndex !== index ? setOpenIndex(index) : setOpenIndex(-1))}
							>
								<Icon type={menuItem.icon} className="h-5 w-5" />
								{menuItem.title}
								{menuItem.submenu && (
									<Icon
										type="chevronDown"
										className={cls("ml-auto h-4 w-4 transition-transform", openIndex === index ? "rotate-180" : "")}
									/>
								)}
							</div>
							{menuItem.submenu ? (
								<ul
									ref={(el) => (subElement.current[index] = el)}
									className={cls("overflow-hidden transition-[height]")}
									style={openIndex === index ? { height: subElement.current[index].scrollHeight } : { height: "0px" }}
								>
									{menuItem.submenu.map((subItem, index) => (
										<li key={index} className="">
											<Link href={subItem.href}>
												<div
													className={cls(
														"flex cursor-pointer gap-1.5 px-3 py-2 hover:text-white",
														isActive(subItem.href) ? "text-white" : ""
													)}
												>
													<span className="relative bottom-px px-1">•</span> {subItem.title}
												</div>
											</Link>
										</li>
									))}
								</ul>
							) : (
								""
							)}
						</>
					)}
				</li>
			))}
		</>
	);
}
