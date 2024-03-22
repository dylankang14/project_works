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
	// const [isDrawerOpen, setIsDrawerOpen] = useState(true);
	const { device } = useWindowDimensions();
	const router = useRouter();

	// useEffect(() => {
	// 	if (device === "pc") {
	// 		setIsDrawerOpen(true);
	// 		router.events.on("routeChangeStart", () => setIsDrawerOpen(true));
	// 	} else {
	// 		setIsDrawerOpen(false);
	// 		router.events.on("routeChangeStart", () => setIsDrawerOpen(false));
	// 	}
	// 	return () => {
	// 		router.events.off("routeChangeStart", () => setIsDrawerOpen(false));
	// 	};
	// }, [device, router.events]);
	return (
		<div id="wrap" className="relative z-0 flex min-h-screen w-full flex-col bg-slate-50 text-sm print:bg-white">
			{/* <Header toggleDrawer={() => setIsDrawerOpen(!isDrawerOpen)} /> */}
			<Header />
			<div className="content relative flex max-w-full flex-1">
				{/* {device === "pc" ? (
					<Aside isDrawerOpen={isDrawerOpen} toggleDrawer={() => setIsDrawerOpen(!isDrawerOpen)} />
				) : (
					<ModalAside isModalOpen={isDrawerOpen} closeModal={() => setIsDrawerOpen(false)} />
				)} */}
				<main
					className={cls(
						"w-[calc(100%_-_200px)] flex-1 px-4 py-3 transition-[margin] print:p-0"
						// device === "pc" ? (isDrawerOpen ? "-ml-0" : "-ml-[200px] print:-ml-0") : ""
					)}
				>
					<section className="mx-auto w-full lg:max-w-[1000px]">{children}</section>
				</main>
			</div>
			<Footer />
			<div className="fixed bottom-2 right-2 print:hidden">
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
