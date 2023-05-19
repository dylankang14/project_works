import { cls } from "@/libs/client/utility";
import { ModalProps } from "./modal";
import ModalVertical from "./modal-vertical";
import Filter from "./filter";
import Button from "./button";
import Icon from "./icon";

export default function ModalFilter({ isModalOpen, closeModal }: ModalProps) {
	return (
		<ModalVertical isModalOpen={isModalOpen} closeModal={closeModal} className="rtl right-0 min-w-[200px]">
			<aside
				className={cls(
					"relative h-full w-60 min-w-[300px] space-y-2 bg-slate-800 p-2 text-sm transition-transform print:hidden"
				)}
			>
				<div className="mb-3 flex justify-between border-b border-white/30 p-2 text-white">
					<div>필터 옵션</div>
					<div onClick={closeModal} className="cursor-pointer">
						<Icon type="xMark" />
					</div>
				</div>
				<Filter type="dateRange" />
				<Filter type="station" />
				<Filter type="alarmType" />
				<Filter type="alarmPriority" />
				<Filter type="routeDirection" />
				<div className="absolute left-0 bottom-0 w-full p-2">
					<Button size="sm" className="w-full cursor-pointer" onClick={closeModal}>
						확인
					</Button>
				</div>
			</aside>
		</ModalVertical>
	);
}
