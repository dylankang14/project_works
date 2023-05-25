import { cls } from "@/libs/client/utility";
import { useEffect, useState } from "react";
import Aside from "./aside";
import Footer from "./footer";
import Header from "./header";
import useWindowDimensions from "@/libs/client/useWindowDimensions";
import ModalAside from "./modal-aside";

export interface ChildrenProp {
	children: React.ReactNode;
}

export default function Layout({ children }: ChildrenProp) {
	const [isDrawerOpen, setIsDrawerOpen] = useState(true);
	const { device } = useWindowDimensions();
	useEffect(() => {
		if (device === "pc") {
			setIsDrawerOpen(true);
		} else {
			setIsDrawerOpen(false);
		}
	}, [device]);
	return (
		<div id="wrap" className="relative z-0 flex min-h-screen flex-col bg-slate-50 text-sm print:bg-white">
			<Header toggleDrawer={() => setIsDrawerOpen(!isDrawerOpen)} />
			<div className="content relative flex flex-1">
				{device === "pc" ? (
					<Aside isDrawerOpen={isDrawerOpen} toggleDrawer={() => setIsDrawerOpen(!isDrawerOpen)} />
				) : (
					<ModalAside isModalOpen={isDrawerOpen} closeModal={() => setIsDrawerOpen(false)} />
				)}
				<main
					className={cls(
						"flex-1 px-4 py-3 transition-[margin] print:p-0",
						device === "pc" ? (isDrawerOpen ? "-ml-0" : "-ml-60") : ""
					)}
				>
					<section className="container mx-auto print:w-[794px] xl:max-w-[1000px]">{children}</section>
				</main>
			</div>
			<Footer />
		</div>
	);
}
