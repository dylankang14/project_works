import { cls } from "@/libs/client/utility";
import Icon from "./icon";
import Modal, { ModalProps } from "./modal";
import StationRoute from "./station-route";

export default function ModalStation({ isModalOpen, closeModal, className }: ModalProps) {
	return (
		<Modal isModalOpen={isModalOpen} closeModal={closeModal} containerClass="items-start">
			<div className={cls("", className ? className : "")}>
				<div className="flex justify-between border-b px-4 pb-2 pt-3 font-[500]">
					<span>站 Select</span>
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
