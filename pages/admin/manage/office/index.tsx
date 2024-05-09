import Button from "@/components/button";
import CardTable from "@/components/card-table";
import Filter from "@/components/filter";
import ModalOfficeCreate from "@/components/modal-office-create";
import { useState } from "react";

export default function ManageOffice() {
	const [isModalOpen, setIsModalOpen] = useState(false);
	const dataType: string[] = ["사업소명", "전화번호", "주소", "상태", "사업소 생성일", "마지막 로그인"];
	const data = Array.from(Array(9).keys()).map((i) => ({
		office: `사업소-${i}`,
		phone: `02-1234-1234`,
		address: `서울특별시 중구 한강대로 405`,
		status: `정상`,
		createdAt: `2023년 2월 1일 14:00`,
		lastLogin: `2023년 2월 9일 18:00`,
	}));
	return (
		<>
			<div className="flex items-center justify-between">
				{/* <div className="flex gap-1">
					<Filter type="search" />
				</div>
				<div className="flex gap-1">
					<Button size="sm" color="slate" icon="office" onClick={() => setIsModalOpen(true)}>
						사업소 생성
					</Button>
				</div> */}
			</div>
			<CardTable hasLink={true} pathname="admin/manage/office" data={data} dataType={dataType} />
			<ModalOfficeCreate isModalOpen={isModalOpen} closeModal={() => setIsModalOpen(false)} />
		</>
	);
}
