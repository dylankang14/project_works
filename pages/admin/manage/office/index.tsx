import Button from "@/components/button";
import CardTable from "@/components/card-table";
import Filter from "@/components/filter";
import { useLangData } from "@/contexts/langContext";

export default function ManageOffice() {
	const { common } = useLangData();
	const dataType: string[] = [
		`${common?.get("C6301")}명`,
		"전화번호",
		"주소",
		"상태",
		`${common?.get("C6301")} 생성일`,
		"마지막 로그인",
	];
	const data = Array.from(Array(20).keys()).map((i) => ({
		office: `common?.get("C6301")-${i}`,
		phone: `02-1234-1234`,
		address: `서울특별시 중구 한강대로 405`,
		status: `정상`,
		createdAt: `2023年 2月 1日 14:00`,
		lastLogin: `2023年 2月 9日 18:00`,
	}));
	return (
		<>
			<div className="flex items-center justify-between">
				<div className="flex gap-1">
					<Filter type="search" />
				</div>
				<div className="flex gap-1">
					<Button size="sm" color="slate" icon="office">
						{common?.get("C6301")} 생성
					</Button>
				</div>
			</div>
			<CardTable hasLink={true} pathname="admin/manage/office" data={data} dataType={dataType} />
		</>
	);
}
