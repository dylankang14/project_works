import { cls } from "@/libs/client/utility";
import { useState } from "react";
import Aside from "./aside";
import Footer from "./footer";
import Header from "./header";

export interface ChildrenProp {
	children: React.ReactNode;
}

export default function Layout({ children }: ChildrenProp) {
	const [isDrawerOpen, setIsDrawerOpen] = useState(true);
	return (
		<div id="wrap" className="relative z-0 flex min-h-screen flex-col bg-slate-50 text-sm">
			<Header toggleDrawer={() => setIsDrawerOpen(!isDrawerOpen)} />
			<div className="content relative flex flex-1">
				<Aside isDrawerOpen={isDrawerOpen} toggleDrawer={() => setIsDrawerOpen(!isDrawerOpen)} />
				<main className={cls("flex-1 px-4 py-3 transition-[margin]", isDrawerOpen ? "-ml-0" : "-ml-60")}>
					<section className="container mx-auto max-w-[1200px]">{children}</section>
				</main>
			</div>
			<Footer />
		</div>
	);
}
