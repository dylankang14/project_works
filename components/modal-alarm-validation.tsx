import { cls } from "@/libs/client/utility";
import { useForm } from "react-hook-form";
import Button from "./button";
import Icon from "./icon";
import Input from "./input";
import Modal, { ModalProps } from "./modal";
import SelectBox from "./select";
import Textarea from "./textarea";

interface ModalPropsWithClass extends ModalProps {
	className?: string;
}

export default function ModalAlarmValidation({ isModalOpen, closeModal, className }: ModalPropsWithClass) {
	const { register, handleSubmit } = useForm();
	const onValid = (data: any) => {
		console.log(data);
	};
	const options = [
		{ value: "required", text: "YES" },
		{ value: "complete", text: "NO" },
	];
	return (
		<Modal isModalOpen={isModalOpen} closeModal={closeModal} className="w-full max-w-sm">
			<div className={cls("", className ? className : "")}>
				<div className="flex justify-between border-b px-4 pb-2 pt-3 font-[500]">
					<span className="text-base font-[500]">조치입력</span>
					<span onClick={() => closeModal()}>
						<Icon type="xMark" className="h-6 w-6 cursor-pointer hover:text-black" />
					</span>
				</div>
				<form onSubmit={handleSubmit(onValid)} className="px-5 py-4">
					<div className="grid grid-cols-[max-content_1fr] items-center gap-2 text-sm">
						<div className="font-semibold">담당자</div>
						<Input name="user" type="text" value={"teset@gmail.com"} register={register("userId")} className="w-full" />
						<div className="font-semibold">유효성</div>
						<SelectBox name="status" register={register("repairStatus")} options={options} />
					</div>
					<div className="flex justify-center gap-2 pb-2 pt-4">
						<Button preventDefault={false}>확인</Button>
						<Button color="red" onClick={closeModal}>
							취소
						</Button>
					</div>
				</form>
			</div>
		</Modal>
	);
}
