import { cls } from "@/libs/client/utility";
import Icon from "./icon";
import Modal, { ModalProps } from "./modal";
import StationRoute from "./station-route";

interface ModalPropsWithClass extends ModalProps {
	className?: string;
}

export default function ModalStation({ isModalOpen, closeModal, className }: ModalPropsWithClass) {
	return (
		<Modal isModalOpen={isModalOpen} closeModal={closeModal} containerClass="items-start">
			<div className={cls("", className ? className : "")}>
				<div className="flex justify-between border-b px-4 pb-2 pt-3 font-[500]">
					<span>역선택</span>
					<span onClick={closeModal}>
						<Icon type="xMark" className="h-6 w-6 cursor-pointer hover:text-black" />
					</span>
				</div>
				<div className="px-5 py-4">
					<StationRoute />
				</div>
			</div>
		</Modal>
	);
}
