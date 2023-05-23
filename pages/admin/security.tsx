import Button from "@/components/button";
import Card from "@/components/card";
import Title from "@/components/content-title";
import Input from "@/components/input";
import { useLangData } from "@/contexts/langContext";

export default function Security() {
	const { common } = useLangData();
	return (
		<div className="mx-auto py-3 lg:max-w-2xl">
			<Title title={`${common?.get("C5116")} ${common?.get("C0003")}`} />
			<Card>
				<div className="grid grid-cols-1 gap-3 p-4">
					<Input label="Old Password" name="postPassword" type="password" required={true} className="w-full" />
					<Input label="New Password" name="newPassword" type="password" required={true} className="w-full" />
					<Input label="Re Password" name="rePassword" type="password" required={true} className="w-full" />
					<Button className="my-1">비밀번호 변경</Button>
				</div>
			</Card>
		</div>
	);
}
