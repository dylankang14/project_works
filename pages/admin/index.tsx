import Button from "@/components/button";
import Card from "@/components/card";
import Title from "@/components/content-title";
import Input from "@/components/input";
import { useLangData } from "@/contexts/langContext";

export default function User() {
	const { common } = useLangData();
	return (
		<div className="mx-auto py-3 lg:max-w-2xl">
			<Title title={`User ${common?.get("C0021")}`} />
			<Card>
				<div className="grid grid-cols-1 gap-3 p-4">
					<Input label="Email" name="email" type="text" required={false} />
					<Input label={`${common?.get("C2040")}`} name="name" type="text" required={false} />
					<Input label="Phone" name="phone" type="number" required={false} />
					<Input label={`${common?.get("C5114")}`} name="office" type="text" required={false} disabled={true} />
					<Input label="직위" name="position" type="text" required={false} disabled={true} />
					<Input label={`${common?.get("C5104")}`} name="permission" type="text" required={false} disabled={true} />
					<Input label="담당노선" name="allowedStation" type="text" required={false} disabled={true} />
					<Input label="담당분야" name="allowedAlarm" type="text" required={false} disabled={true} />
					<Button className="my-1">계정정보 업데이트</Button>
				</div>
			</Card>
		</div>
	);
}
