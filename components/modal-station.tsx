import { cls } from "@/libs/client/utility";
import Icon from "./icon";
import Modal, { ModalProps } from "./modal";
import StationRoute from "./station-route";
import Button from "./button";
import { useState } from "react";

export default function ModalStation({ isModalOpen, closeModal, className }: ModalProps) {
	const [isStationRangeAll, setIsStationRangeAll] = useState(false);
	return (
		<Modal isModalOpen={isModalOpen} closeModal={closeModal} containerClass="items-start">
			<div className={cls("", className ? className : "")}>
				<div className="flex justify-between border-b px-4 pb-2 pt-3 font-[500]">
					<span className="select-none">역선택</span>
					<div className="flex flex-wrap items-center gap-x-2">
						<Button size="sm" className="font-medium" onClick={() => setIsStationRangeAll(!isStationRangeAll)}>
							모든역
						</Button>
						<span onClick={closeModal}>
							<Icon type="xMark" className="h-6 w-6 cursor-pointer hover:text-black" />
						</span>
					</div>
				</div>
				<div className="px-5 py-4">
					<StationRoute
						isStationRangeAll={isStationRangeAll}
						setIsStationRangeAll={() => setIsStationRangeAll(!isStationRangeAll)}
					/>
				</div>
			</div>
		</Modal>
	);
}
