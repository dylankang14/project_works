import Button from "@/components/button";
import Card from "@/components/card";
import Title from "@/components/content-title";
import Input from "@/components/input";
import useMutation from "@/libs/client/useMutation";
import { useForm } from "react-hook-form";
interface InfoFormTypes {
	email?: string;
	name?: string;
	phone?: string;
	office?: string;
	position?: string;
	permission?: string;
	allowedStation?: string;
	allowedAlarm?: string;
}

export default function OfficeInfo() {
	const { register, handleSubmit } = useForm<InfoFormTypes>();
	const [updateInfo, { loading }] = useMutation("/");
	const onValid = (infoForm: InfoFormTypes) => {
		if (loading) return;
		// updateInfo(infoForm);
		console.log(infoForm);
	};
	return (
		<div className="mx-auto py-3 lg:max-w-2xl">
			<Title title="서울사업소 정보" />
			<Card>
				<form onSubmit={handleSubmit(onValid)} className="grid grid-cols-1 gap-3 p-4">
					<Input
						register={register("email")}
						className="w-full"
						label="이메일"
						name="email"
						type="text"
						required={false}
					/>
					<Input register={register("name")} className="w-full" label="이름" name="name" type="text" required={false} />
					<Input
						register={register("phone")}
						className="w-full"
						label="전화번호"
						name="phone"
						type="number"
						required={false}
					/>
					<Input
						register={register("office")}
						className="w-full"
						label="소속"
						name="office"
						type="text"
						required={false}
						disabled={true}
					/>
					<Input
						register={register("position")}
						className="w-full"
						label="직위"
						name="position"
						type="text"
						required={false}
						disabled={true}
					/>
					<Input
						register={register("permission")}
						className="w-full"
						label="권한"
						name="permission"
						type="text"
						required={false}
						disabled={true}
					/>
					<Input
						className="w-full"
						label="담당노선"
						name="allowedStation"
						type="text"
						required={false}
						disabled={true}
					/>
					<Input
						register={register("allowedAlarm")}
						className="w-full"
						label="담당분야"
						name="allowedAlarm"
						type="text"
						required={false}
						disabled={true}
					/>
					<Button preventDefault={false} type="submit" className="my-1">
						계정정보 업데이트
					</Button>
				</form>
			</Card>
		</div>
	);
}
