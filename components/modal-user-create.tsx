import { cls } from "@/libs/client/utility";
import { useForm } from "react-hook-form";
import Button from "./button";
import Icon from "./icon";
import Input from "./input";
import Modal, { ModalProps } from "./modal";
import SelectBox from "./select";

interface ModalPropsWithClass extends ModalProps {
	className?: string;
}

export default function ModalUserCreate({ isModalOpen, closeModal, className }: ModalPropsWithClass) {
	const { register, handleSubmit } = useForm();
	const onValid = (data: any) => {
		console.log(data);
	};
	const options = [
		{ value: "office-0", text: "사업소-0" },
		{ value: "office-1", text: "사업소-1" },
		{ value: "office-2", text: "사업소-2" },
		{ value: "office-3", text: "사업소-3" },
		{ value: "office-4", text: "사업소-4" },
		{ value: "office-5", text: "사업소-5" },
	];
	return (
		<Modal isModalOpen={isModalOpen} closeModal={closeModal} className="w-full max-w-sm">
			<div className={cls("", className ? className : "")}>
				<div className="flex justify-between border-b px-4 pb-2 pt-3 font-[500]">
					<span className="text-base font-[500]">유저생성</span>
					<span onClick={() => closeModal()}>
						<Icon type="xMark" className="h-6 w-6 cursor-pointer hover:text-black" />
					</span>
				</div>
				<form onSubmit={handleSubmit(onValid)} className="px-5 py-4">
					<div className="grid grid-cols-[max-content_1fr] items-center gap-2 text-sm">
						<div className="font-semibold">프로필 사진</div>
						<div className="mx-auto aspect-square w-[160px] rounded-full bg-slate-500" />
						<div className="font-semibold">이메일</div>
						<Input className="w-full" name="email" type="email" register={register("email")} />
						<div className="font-semibold">이름</div>
						<Input className="w-full" name="name" type="text" register={register("name")} />
						<div className="font-semibold">소속</div>
						<SelectBox name="status" register={register("repairStatus")} options={options} />
						<div className="font-semibold">직위</div>
						<Input className="w-full" name="position" type="text" register={register("position")} />
						<div className="font-semibold">비밀번호</div>
						<Input className="w-full" name="newPassword" type="password" register={register("newPassword")} />
						<div className="font-semibold">비밀번호 확인</div>
						<Input className="w-full" name="rePassword" type="password" register={register("rePassword")} />
					</div>
					<div className="flex justify-center gap-2 pb-2 pt-4">
						<Button preventDefault={false}>유저생성</Button>
						<Button color="red" onClick={closeModal}>
							취소
						</Button>
					</div>
				</form>
			</div>
		</Modal>
	);
}
