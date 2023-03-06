import Button from "@/components/button";
import Card from "@/components/card";
import Title from "@/components/content-title";
import Input from "@/components/input";

export default function Security() {
	return (
		<div className="mx-auto py-3 lg:max-w-2xl">
			<Title title="비밀번호 변경" />
			<Card>
				<div className="grid grid-cols-1 gap-3 p-4">
					<Input label="기존 비밀번호" name="postPassword" type="password" required={true} />
					<Input label="새 비밀번호" name="newPassword" type="password" required={true} />
					<Input label="새 비밀번호 확인" name="rePassword" type="password" required={true} />
					<Button className="my-1">비밀번호 변경</Button>
				</div>
			</Card>
		</div>
	);
}
