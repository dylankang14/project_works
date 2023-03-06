import Button from "@/components/button";
import Card from "@/components/card";
import Title from "@/components/content-title";
import Input from "@/components/input";

export default function UserInfo() {
	return (
		<div className="mx-auto py-3 lg:max-w-2xl">
			<Title title="홍길동 정보" />
			<Card>
				<div className="grid grid-cols-1 gap-3 p-4">
					<Input label="이메일" name="email" type="text" required={false} className="w-full" />
					<Input label="이름" name="name" type="text" required={false} className="w-full" />
					<Input label="전화번호" name="phone" type="number" required={false} className="w-full" />
					<Input label="소속" name="office" type="text" required={false} disabled={true} className="w-full" />
					<Input label="직위" name="position" type="text" required={false} disabled={true} className="w-full" />
					<Input label="권한" name="permission" type="text" required={false} disabled={true} className="w-full" />
					<Input
						label="담당노선"
						name="allowedStation"
						type="text"
						required={false}
						disabled={true}
						className="w-full"
					/>
					<Input label="담당분야" name="allowedAlarm" type="text" required={false} disabled={true} className="w-full" />
					<Button className="my-1">계정정보 업데이트</Button>
				</div>
			</Card>
		</div>
	);
}
