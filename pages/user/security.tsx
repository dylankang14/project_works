import Button from "@/components/button";
import Card from "@/components/card";
import Title from "@/components/content-title";
import Input from "@/components/input";
import useMutation from "@/libs/client/useMutation";
import { useForm } from "react-hook-form";

interface PasswordFormTypes {
	postPassword: string;
	newPassword: string;
	rePassword: string;
}
export default function Security() {
	const { register, handleSubmit } = useForm<PasswordFormTypes>();
	const [updatePassword, { loading }] = useMutation("/");
	const onValid = (passwordForm: PasswordFormTypes) => {
		if (loading) return;
		// updatePassword(passwordForm);
		console.log(passwordForm);
	};
	return (
		<div className="mx-auto py-3 lg:max-w-2xl">
			<Title title="비밀번호 변경" />
			<Card>
				<form onSubmit={handleSubmit(onValid)} className="grid grid-cols-1 gap-3 p-4">
					<Input
						register={register("postPassword")}
						label="기존 비밀번호"
						name="postPassword"
						type="password"
						required={true}
						className="w-full"
					/>
					<Input
						register={register("newPassword")}
						label="새 비밀번호"
						name="newPassword"
						type="password"
						required={true}
						className="w-full"
					/>
					<Input
						register={register("rePassword")}
						label="새 비밀번호 확인"
						name="rePassword"
						type="password"
						required={true}
						className="w-full"
					/>
					<Button preventDefault={false} type="submit" className="my-1">
						비밀번호 변경
					</Button>
				</form>
			</Card>
		</div>
	);
}
