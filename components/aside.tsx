import { cls } from "@/libs/client/utility";
import Nav from "./nav";

interface AsideProps {
	isDrawerOpen: boolean;
	toggleDrawer: () => void;
}

export default function Aside({ isDrawerOpen, toggleDrawer }: AsideProps) {
	return (
		<aside
			className={cls(
				"relative min-w-[200px] bg-slate-800 text-sm text-white/70 transition-transform print:hidden",
				isDrawerOpen ? "-translate-x-0" : "-translate-x-full"
			)}
		>
			<Nav />
		</aside>
	);
}
