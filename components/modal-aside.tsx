import { cls } from "@/libs/client/utility";
import { ModalProps } from "./modal";
import ModalVertical from "./modal-vertical";
import Nav from "./nav";
import Image from "next/image";
import logo from "../public/tra_logo_w.svg";

export default function ModalAside({ isModalOpen, closeModal }: ModalProps) {
	return (
		<ModalVertical isModalOpen={isModalOpen} closeModal={closeModal} className="ltr left-0 min-w-[200px]">
			<aside
				className={cls(
					"relative w-60 min-w-[240px] bg-slate-800 text-sm text-white/70 transition-transform print:hidden"
				)}
			>
				<div className="flex justify-center border-b border-white/30 py-3.5">
					<Image src={logo} alt="Logo" priority={true} className="h-auto w-28" />
				</div>
				<Nav />
			</aside>
		</ModalVertical>
	);
}
