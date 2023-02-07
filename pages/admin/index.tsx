import Button from "@/components/button";
import Card from "@/components/card";
import Title from "@/components/content-title";
import Input from "@/components/input";
import Layout from "@/components/layout";

export default function User() {
	return (
		<Layout>
			<div className="mx-auto py-3 lg:max-w-2xl">
				<Title title="계정 정보" />
				<Card>
					<div className="grid grid-cols-1 gap-3 p-4">
						<Input label="이메일" name="email" type="text" required={false} />
						<Input label="이름" name="name" type="text" required={false} />
						<Input label="전화번호" name="phone" type="number" required={false} />
						<Input label="소속" name="office" type="text" required={false} disabled={true} />
						<Input label="직위" name="position" type="text" required={false} disabled={true} />
						<Input label="권한" name="permission" type="text" required={false} disabled={true} />
						<Input label="담당노선" name="allowedStation" type="text" required={false} disabled={true} />
						<Input label="담당분야" name="allowedAlarm" type="text" required={false} disabled={true} />
						<Button text="계정정보 업데이트" className="my-1" />
					</div>
				</Card>
			</div>
		</Layout>
	);
}
