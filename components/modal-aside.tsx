import { ModalProps } from "./modal";
import ModalVertical from "./modal-vertical";
import Nav from "./nav";

export default function ModalAside({ isModalOpen, closeModal }: ModalProps) {
	return (
		<ModalVertical isModalOpen={isModalOpen} closeModal={closeModal} className="min-w-[200px]" containerClass="">
			<Nav />
		</ModalVertical>
	);
}
