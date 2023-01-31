import Aside from "./aside";
import Footer from "./footer";
import Header from "./header";

export interface ChildrenProp {
	children: React.ReactNode;
}

export default function Layout({ children }: ChildrenProp) {
	return (
		<div id="wrap" className="relative z-0 flex min-h-screen flex-col bg-slate-50">
			<Header />
			<div className="content relative flex flex-1">
				<Aside />
				<main className="flex-1 px-4 py-3">
					<section className="mx-auto">{children}</section>
				</main>
			</div>
			<Footer />
		</div>
	);
}
