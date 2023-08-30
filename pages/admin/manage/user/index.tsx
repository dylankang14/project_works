import Button from "@/components/button";
import CardTable from "@/components/card-table";
import Filter from "@/components/filter";
import ModalUserCreate from "@/components/modal-user-create";
import { useState } from "react";

export default function ManageUser() {
	const [isModalOpen, setIsModalOpen] = useState(false);
	const dataType: string[] = ["No", "유저", "직위", "권한", "상태", "계정 생성일", "마지막 로그인"];
	const data = Array.from(Array(20).keys()).map((i) => ({
		id: i,
		name: `홍길동${i}`,
		position: `과장`,
		permission: "유저",
		status: "정상",
		createdAt: "2022-10-05 10:05",
		lastLogin: "2022-12-24 10:23",
	}));
	return (
		<>
			<div className="flex items-center justify-between">
				<div className="flex gap-1">
					<Filter type="office" />
					<Filter type="search" />
				</div>
				<div className="flex gap-1">
					<Button size="sm" color="slate" icon="createUser" onClick={() => setIsModalOpen(true)}>
						유저 생성
					</Button>
				</div>
			</div>
			<CardTable hasLink={true} pathname="admin/manage/user" data={data} dataType={dataType} />
			<ModalUserCreate isModalOpen={isModalOpen} closeModal={() => setIsModalOpen(false)} />
		</>
	);
}
