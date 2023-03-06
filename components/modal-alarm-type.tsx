import { cls } from "@/libs/client/utility";
import { useForm } from "react-hook-form";
import Icon from "./icon";
import Input from "./input";
import Modal, { ModalProps } from "./modal";

interface ModalPropsWithClass extends ModalProps {
	className?: string;
}

export default function ModalAlarmType({ isModalOpen, closeModal, className }: ModalPropsWithClass) {
	const { register, handleSubmit } = useForm();
	const data = Array.from(Array(12), (_, index) => index + 1);
	return (
		<Modal isModalOpen={isModalOpen} closeModal={closeModal} className="min-w-[200px]">
			<div className={cls("my-2", className ? className : "")}>
				<div className="flex justify-between border-b px-3 py-2 font-[500]">
					<span>알람타입</span>
					<span onClick={closeModal}>
						<Icon type="xMark" />
					</span>
				</div>
				<div className="flex flex-col gap-2 px-5 py-3">
					{data.map((i) => (
						<Input
							key={i}
							register={register("selectAlarmType")}
							label={`검측 항목 - ${i}`}
							type="checkbox"
							value={i.toString()}
							name={i.toString()}
							className="my-1"
							checked
						/>
					))}
				</div>
			</div>
		</Modal>
	);
}
