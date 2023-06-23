import { cls } from "@/libs/client/utility";
import { useForm } from "react-hook-form";
import Button from "./button";
import Icon from "./icon";
import Input from "./input";
import Modal, { ModalProps } from "./modal";

interface ModalPropsWithClass extends ModalProps {
	className?: string;
}

export default function ModalOfficeCreate({ isModalOpen, closeModal, className }: ModalPropsWithClass) {
	const { register, handleSubmit } = useForm();
	const onValid = (data: any) => {
		console.log(data);
	};
	return (
		<Modal isModalOpen={isModalOpen} closeModal={closeModal} className="w-full max-w-sm">
			<div className={cls("", className ? className : "")}>
				<div className="flex justify-between border-b px-4 pb-2 pt-3 font-[500]">
					<span className="text-base font-[500]">사업소 생성</span>
					<span onClick={() => closeModal()}>
						<Icon type="xMark" className="h-6 w-6 cursor-pointer hover:text-black" />
					</span>
				</div>
				<form onSubmit={handleSubmit(onValid)} className="px-5 py-4">
					<div className="grid grid-cols-[max-content_1fr] items-center gap-2 text-sm">
						<div className="font-semibold">프로필 사진</div>
						<div className="mx-auto aspect-square w-[160px] rounded-full bg-slate-500" />
						<div className="font-semibold">사업소명</div>
						<Input className="w-full" name="memberOfficeName" type="text" register={register("memberOfficeName")} />
						<div className="font-semibold">이메일</div>
						<Input className="w-full" name="email" type="email" register={register("email")} />
						<div className="font-semibold">전화번호</div>
						<Input className="w-full" name="phone" type="number" register={register("phone")} />
						<div className="font-semibold">주소</div>
						<Input className="w-full" name="address" type="text" register={register("address")} />
						<div className="font-semibold">비밀번호</div>
						<Input className="w-full" name="newPassword" type="password" register={register("newPassword")} />
						<div className="font-semibold">비밀번호 확인</div>
						<Input className="w-full" name="rePassword" type="password" register={register("rePassword")} />
					</div>
					<div className="flex justify-center gap-2 pb-2 pt-4">
						<Button preventDefault={false}>사업소 생성</Button>
						<Button color="red" onClick={closeModal}>
							취소
						</Button>
					</div>
				</form>
			</div>
		</Modal>
	);
}
