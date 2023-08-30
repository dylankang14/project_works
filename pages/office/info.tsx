import Button from "@/components/button";
import Card from "@/components/card";
import Title from "@/components/content-title";
import Input from "@/components/input";
import useMutation from "@/libs/client/useMutation";
import { useForm } from "react-hook-form";

interface OfficeInfoFormTypes {
	email: string;
	name: string;
	phone: string;
	office: string;
	position: string;
	permission: string;
	allowedStation: string;
	allowedAlarm: string;
}
export default function User() {
	const { register, handleSubmit } = useForm<OfficeInfoFormTypes>();
	const [updateInfo, { loading }] = useMutation("/");
	const onValid = (officeInfoForm: OfficeInfoFormTypes) => {
		if (loading) return;
		// updateInfo(officeInfoForm);
		console.log(officeInfoForm);
	};
	return (
		<div className="mx-auto py-3 lg:max-w-2xl">
			<Title title="사업소 정보" />
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
						사업소 정보 업데이트
					</Button>
				</form>
			</Card>
		</div>
	);
}
