import { cls } from "@/libs/client/utility";
import { ModalProps } from "./modal";
import ModalVertical from "./modal-vertical";
import Nav from "./nav";

export default function ModalAside({ isModalOpen, closeModal }: ModalProps) {
	return (
		<ModalVertical isModalOpen={isModalOpen} closeModal={closeModal} className="min-w-[200px]" containerClass="">
			<aside
				className={cls(
					"relative w-60 min-w-[240px] bg-slate-800 text-sm text-white/70 transition-transform print:hidden",
					isModalOpen ? "-translate-x-0" : "-translate-x-full"
				)}
			>
				<Nav />
			</aside>
		</ModalVertical>
	);
}
