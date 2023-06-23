import { cls } from "@/libs/client/utility";
import { useEffect, useState } from "react";
import Aside from "./aside";
import Footer from "./footer";
import Header from "./header";
import useWindowDimensions from "@/libs/client/useWindowDimensions";
import ModalAside from "./modal-aside";
import Button from "./button";
import { useRouter } from "next/router";

export interface ChildrenProp {
	children: React.ReactNode;
}

export default function Layout({ children }: ChildrenProp) {
	const [isDrawerOpen, setIsDrawerOpen] = useState(true);
	const { device } = useWindowDimensions();
	const router = useRouter();

	useEffect(() => {
		if (device === "pc") {
			setIsDrawerOpen(true);
			router.events.on("routeChangeStart", () => setIsDrawerOpen(true));
		} else {
			setIsDrawerOpen(false);
			router.events.on("routeChangeStart", () => setIsDrawerOpen(false));
		}
		return () => {
			router.events.off("routeChangeStart", () => setIsDrawerOpen(false));
		};
	}, [device, router.events]);
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
						device === "pc" ? (isDrawerOpen ? "-ml-0" : "-ml-[200px]") : ""
					)}
				>
					<section className="mx-auto print:w-[794px] xl:max-w-[1000px]">{children}</section>
				</main>
			</div>
			<Footer />
			<div className="fixed right-2 bottom-2 print:hidden">
				<Button
					size="none"
					color="slate"
					icon="print"
					iconPosition="right"
					className="h-11 w-11 rounded-full shadow-sm"
					onClick={() => window.print()}
				/>
			</div>
		</div>
	);
}
