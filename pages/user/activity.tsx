import Button from "@/components/button";
import Card from "@/components/card";
import Table from "@/components/table";
import Title from "@/components/content-title";
import Filter from "@/components/filter";
import Layout from "@/components/layout";

export default function Activity() {
	const dataType: string[] = ["순서", "로그인 일시", "로그아웃 일시", "로그인 IP"];
	const data = Array.from(Array(10).keys()).map((i) => ({
		id: i,
		loginDateTime: "2022.12.21 09:30:05",
		logoutDateTime: "2022.12.21 10:30:05",
		loginIp: "172.111.0.123",
	}));
	return (
		<Layout>
			<div className="a">
				<Title title="로그인 내역" />
				<div className="flex items-center justify-between">
					<Filter type="date" />
					<Button size="sm" color="slate" text="프린트" icon="print" iconPosition="right" />
				</div>
				<Card title="로그인 통계 그래프">
					<div className="p-4">
						<div className="flex h-52 items-center justify-center bg-gray-100">그래프 이미지</div>
					</div>
				</Card>
				<Card title="로그인 내역">
					<Table data={data} dataType={dataType} pagination={true} />
				</Card>
			</div>
		</Layout>
	);
}
