import AlarmCriteria from "@/components/alarm-criteria";
import Button from "@/components/button";
import Layout from "@/components/layout";
import { cls } from "@/libs/client/utility";
import Image from "next/image";
import { useRouter } from "next/router";

export default function DetailReport() {
	const router = useRouter();
	return (
		<Layout>
			<div
				id="printContainer"
				className="mx-auto w-auto max-w-[794px] border border-gray-300 bg-white p-[2.5vw] shadow-md print:p-0 lg:mt-6 lg:py-6 lg:px-0"
			>
				<div
					id="print"
					className={cls(
						"mx-auto my-0 h-[1047px] w-[718px] p-0 text-xs print:hidden"
						// !imgSrc || isLoading || device === "pc" ? "" : "hidden"
					)}
				>
					<div className="flex h-full w-full flex-col flex-wrap gap-3">
						<div className="relative text-center">
							<span className="text-2xl font-semibold">알람보고서</span>
							<div className="absolute right-0 bottom-0">2022년 09월 28일</div>
						</div>
						<div className="grid grid-cols-[1fr_max-content] gap-2">
							<div className="flex flex-col items-center justify-center border border-black px-2 py-3.5">
								<div className="text-lg font-bold">전차선 높이, 편위 보고서</div>
								<div className="font-bold">검지구건 : 서울역 - 부산 (하선)</div>
							</div>
							<table className="h-full border-separate border-spacing-0 border-t border-l border-black text-center">
								<tbody>
									<tr>
										<th className="border-r border-b border-black bg-gray-300 py-0.5 px-1.5" rowSpan={3}>
											<div className="w-min">결 재</div>
										</th>
										<th className="border-r border-b border-black bg-gray-300 py-0.5 px-3">담당자</th>
										<th className="border-r border-b border-black bg-gray-300 py-0.5 px-3">관리자</th>
									</tr>
									<tr className="h-full">
										<td className="border-r border-b border-black py-0.5 px-3">
											<div className="flex flex-1"></div>
										</td>
										<td className="border-r border-b border-black py-0.5 px-3">
											<div className="flex flex-1"></div>
										</td>
									</tr>
									<tr>
										<td className="border-r border-b border-black py-0.5 px-3">/</td>
										<td className="border-r border-b border-black py-0.5 px-3">/</td>
									</tr>
								</tbody>
							</table>
						</div>
						<div>
							<div className="mb-1 font-bold">■ 전차선 높이, 편위 알람정보</div>
							<div className="grid grid-cols-[max-content_1fr] gap-2">
								<div className="border border-black">
									<div className="grid grid-cols-[max-content_1fr] gap-x-2 px-2 py-1">
										<div>검측일</div>
										<div className="font-bold">2022년 12월 24일</div>
										<div>검측시간</div>
										<div className="font-bold">09:23:14</div>
										<div>전철주 번호</div>
										<div className="font-bold">20-22A</div>
										<div>알람위치</div>
										<div className="font-bold">20.114km</div>
									</div>
								</div>
								<div className="border border-black">
									<div className="grid grid-cols-[max-content_1fr] gap-x-2 px-2 py-1">
										<div>검측항목</div>
										<div className="font-bold">전차선 편위</div>
										<div>알람내용</div>
										<div className="flex justify-between font-bold">
											252mm (AV)
											<AlarmCriteria />
										</div>
									</div>
								</div>
							</div>
						</div>
						<div className="flex min-h-0 flex-1 flex-col gap-2">
							<div className="flex max-h-full min-h-0 min-w-0 max-w-full flex-col">
								<div className="mb-1 font-bold">■ 전차선 높이, 편위 그래프</div>
								<div className="flex min-h-0 flex-wrap justify-center gap-1 border border-black p-1">
									<div className="flex max-h-full min-h-0 flex-1 justify-center">
										<Image
											src="/test.jpg"
											alt="line height image"
											width="759"
											height="300"
											quality="100"
											sizes="100vw"
											priority
											className="max-h-full w-auto"
										/>
									</div>
									<div className="flex max-h-full min-h-0 flex-1 justify-center">
										<Image
											src="/test.jpg"
											alt="line height image"
											width="759"
											height="300"
											quality="100"
											sizes="100vw"
											priority
											className="max-h-full w-auto"
										/>
									</div>
								</div>
							</div>
							<div className="flex max-h-full min-h-0 min-w-0 max-w-full flex-col">
								<div className="mb-1 font-bold">■ 전차선 높이, 편위 그래프</div>
								<div className="flex min-h-0 flex-wrap justify-center gap-1 border border-black p-1">
									<div className="flex max-h-full min-h-0 w-auto flex-1 justify-center">
										<Image
											src="/test.jpg"
											alt="line height image"
											width="759"
											height="300"
											quality="100"
											sizes="100vw"
											priority
											className="max-h-full w-auto"
										/>
									</div>
								</div>
							</div>
							<div className="flex max-h-full min-h-0 min-w-0 max-w-full flex-col">
								<div className="mb-1 font-bold">■ 전차선 높이, 편위 그래프</div>
								<div className="flex min-h-0 flex-wrap justify-center gap-1 border border-black p-1">
									<div className="flex max-h-full min-h-0 w-auto flex-1 justify-center">
										<Image
											src="/test-portrait.jpg"
											alt="line height image"
											width="759"
											height="300"
											quality="100"
											sizes="100vw"
											priority
											className="max-h-full w-auto"
										/>
									</div>
									<div className="flex max-h-full min-h-0 w-auto flex-1 justify-center">
										<Image
											src="/test-portrait.jpg"
											alt="line height image"
											width="759"
											height="300"
											quality="100"
											sizes="100vw"
											priority
											className="max-h-full w-auto"
										/>
									</div>
									<div className="flex max-h-full min-h-0 w-auto flex-1 justify-center">
										<Image
											src="/test-portrait.jpg"
											alt="line height image"
											width="759"
											height="300"
											quality="100"
											sizes="100vw"
											priority
											className="max-h-full w-auto"
										/>
									</div>
									<div className="flex max-h-full min-h-0 w-auto flex-1 justify-center">
										<Image
											src="/test-portrait.jpg"
											alt="line height image"
											width="759"
											height="300"
											quality="100"
											sizes="100vw"
											priority
											className="max-h-full w-auto"
										/>
									</div>
								</div>
							</div>
						</div>
					</div>
				</div>
				{/* <div
						className={cls(
							"mx-auto h-auto max-w-[718px] print:block",
							!imgSrc || isLoading || device === "pc" ? "hidden" : ""
						)}
					>
						{imgSrc && (
							<Image
								src={imgSrc}
								alt="report image"
								width="0"
								height="0"
								sizes="100vw"
								quality="100"
								className="max-h-full w-auto"
							/>
						)}
					</div> */}
			</div>
			<div className="mt-4 flex justify-center gap-2 print:hidden">
				<Button
					text="뒤로가기"
					onClick={() => {
						router.back();
					}}
				/>
				<Button id="savePdf" text="PDF" icon="download" />
				<Button text="프린트" onClick={() => window.print()} />
			</div>
		</Layout>
	);
}
