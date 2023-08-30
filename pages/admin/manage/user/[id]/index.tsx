import Button from "@/components/button";
import Card from "@/components/card";
import Title from "@/components/content-title";
import Input from "@/components/input";
import useMutation from "@/libs/client/useMutation";
import { useForm } from "react-hook-form";

interface UserInfoFormTypes {
	email: string;
	name: string;
	phone: string;
	office: string;
	position: string;
	permission: string;
	allowedStation: string;
	allowedAlarm: string;
}
export default function UserInfo() {
	const { register, handleSubmit } = useForm<UserInfoFormTypes>();
	const [userUpdate, { data, loading }] = useMutation("/");
	const onValid = (userInfoForm: UserInfoFormTypes) => {
		if (loading) return;
		// userUpdate(userInfoForm);
		console.log(userInfoForm);
	};
	return (
		<div className="mx-auto py-3 lg:max-w-2xl">
			<Title title="홍길동 정보" />
			<Card>
				<form onSubmit={handleSubmit(onValid)} className="grid grid-cols-1 gap-3 p-4">
					<Input
						register={register("email")}
						label="이메일"
						name="email"
						type="text"
						required={false}
						className="w-full"
					/>
					<Input register={register("name")} label="이름" name="name" type="text" required={false} className="w-full" />
					<Input
						register={register("phone")}
						label="전화번호"
						name="phone"
						type="number"
						required={false}
						className="w-full"
					/>
					<Input
						register={register("office")}
						label="소속"
						name="office"
						type="text"
						required={false}
						disabled={true}
						className="w-full"
					/>
					<Input
						register={register("position")}
						label="직위"
						name="position"
						type="text"
						required={false}
						disabled={true}
						className="w-full"
					/>
					<Input
						register={register("permission")}
						label="권한"
						name="permission"
						type="text"
						required={false}
						disabled={true}
						className="w-full"
					/>
					<Input
						register={register("allowedStation")}
						label="담당노선"
						name="allowedStation"
						type="text"
						required={false}
						disabled={true}
						className="w-full"
					/>
					<Input
						register={register("allowedAlarm")}
						label="담당분야"
						name="allowedAlarm"
						type="text"
						required={false}
						disabled={true}
						className="w-full"
					/>
					<Button preventDefault={false} type="submit" className="my-1">
						계정정보 업데이트
					</Button>
				</form>
			</Card>
		</div>
	);
}
