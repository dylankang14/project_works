import Image from "next/image";
import logo from "../public/tra_logo.svg";
import { useLangData } from "@/contexts/langContext";

export default function Footer() {
	const { common } = useLangData();
	return (
		<footer className="flex w-full items-center justify-around border-t bg-white py-4 print:hidden lg:z-0">
			<div className="logo">
				<Image
					src={logo}
					alt="Logo"
					priority={true}
					className="h-auto w-24
				"
				/>
			</div>
			<div className="co-detail flex gap-4 text-sm">
				<div>
					{common?.get("C4623")} {common?.get("C4702")} Web Service
				</div>
			</div>
		</footer>
	);
}
