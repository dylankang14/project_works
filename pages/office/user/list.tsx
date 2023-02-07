import Button from "@/components/button";
import Card from "@/components/card";
import Filter from "@/components/filter";
import Layout from "@/components/layout";
import Pagination from "@/components/pagination";
import Table from "@/components/table";

export default function UserList() {
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
		<Layout>
			<div className="flex items-center justify-between">
				<div className="flex gap-1">
					<Filter type="search" />
				</div>
				<div className="flex gap-1">
					<Button size="sm" color="slate" text="유저생성" icon="createUser" />
					<Button size="sm" color="slate" text="검색필터" icon="filter" />
					<Button size="sm" color="slate" text="프린트" icon="print" />
				</div>
			</div>
			<Card>
				<Table dataType={dataType} data={data} pagination={true} />
			</Card>
		</Layout>
	);
}
