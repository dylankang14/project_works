import AlarmCriteria from "@/components/alarm-criteria";
import Button from "@/components/button";
import Loader from "@/components/loader";
import useWindowDimensions from "@/libs/client/useWindowDimensions";
import { cls, pageToImg, saveAsPdf } from "@/libs/client/utility";
import Image from "next/image";
import { useRouter } from "next/router";
import { useEffect, useRef, useState } from "react";

export default function DetailReport() {
	const router = useRouter();
	const { device } = useWindowDimensions();
	const [imgSrc, setImgSrc] = useState("");
	const [isLoading, setIsLoading] = useState(true);
	const handlePdf = () => saveAsPdf("print", "test.pdf");
	useEffect(() => {
		pageToImg(setImgSrc);
		setIsLoading(false);
	}, []);
	return (
		<>
			{!imgSrc || isLoading ? <Loader isLoading={isLoading} /> : null}
			<div
				id="printContainer"
				className="mx-auto w-auto max-w-[794px] border border-gray-200 bg-white p-[2.5vw] print:border-none print:p-0 lg:px-0 lg:py-6"
			>
				<div id="print">
					<div
						className={cls(
							"mx-auto my-0 h-[1047px] w-[718px] p-0 text-xs print:w-full",
							!imgSrc || isLoading || device === "pc" ? "" : "hidden"
						)}
					>
						<div className="flex h-full w-full flex-col flex-wrap gap-3">
							<div className="relative text-center">
								<span className="text-2xl font-semibold">알람보고서</span>
								<div className="absolute bottom-0 right-0">2024년 04월 06일</div>
							</div>
							<div className="grid grid-cols-[1fr_max-content] gap-2">
								<div className="flex flex-col items-center justify-center border border-black px-2 py-3.5">
									<div className="text-lg font-bold">선로변형 레일마모 보고서</div>
									<div className="font-bold">검지구건 : 서울역 - 부산 (하선)</div>
								</div>
								<table className="h-full border-separate border-spacing-0 border-l border-t border-black text-center">
									<tbody>
										<tr>
											<th className="border-b border-r border-black bg-gray-300 px-1.5 py-0.5" rowSpan={3}>
												<div className="w-min">결 재</div>
											</th>
											<th className="border-b border-r border-black bg-gray-300 px-3 py-0.5">담당자</th>
											<th className="border-b border-r border-black bg-gray-300 px-3 py-0.5">관리자</th>
										</tr>
										<tr className="h-full">
											<td className="border-b border-r border-black px-3 py-0.5">
												<div className="flex flex-1"></div>
											</td>
											<td className="border-b border-r border-black px-3 py-0.5">
												<div className="flex flex-1"></div>
											</td>
										</tr>
										<tr>
											<td className="border-b border-r border-black px-3 py-0.5">/</td>
											<td className="border-b border-r border-black px-3 py-0.5">/</td>
										</tr>
									</tbody>
								</table>
							</div>
							<div>
								<div className="mb-1 font-bold">■ 선로변형 레일마모 알람정보</div>
								<div className="grid grid-cols-[max-content_1fr] gap-2">
									<div className="border border-black">
										<div className="grid grid-cols-[max-content_1fr] gap-x-2 px-2 py-1">
											<div>검측일</div>
											<div className="font-bold">2023년 04월 06일</div>
											<div>검측시간</div>
											<div className="font-bold">09:50:12</div>
											<div>전철주 번호</div>
											<div className="font-bold">20-13</div>
											<div>알람위치</div>
											<div className="font-bold">109.321km</div>
											<div>알람타입</div>
											<div className="font-bold">일반 알람</div>
										</div>
									</div>
									<div className="border border-black">
										<div className="grid grid-cols-[max-content_1fr] gap-x-2 px-2 py-1">
											<div className="font-[500]">좌측 편마모</div>
											<div>9.96 mm</div>
											<div className="font-[500]">좌측 수직마모</div>
											<div>8.88 mm</div>
											<div className="font-[500]">우측 편마모</div>
											<div>6.59 mm</div>
											<div className="font-[500]">우측 수직마모</div>
											<div>5.85 mm</div>
											<div className="font-[500]">조치상태</div>
											<div>조치전</div>
										</div>
									</div>
								</div>
							</div>
							<div className="flex min-h-0 flex-1 flex-col gap-2">
								<div className="flex max-h-full min-h-0 min-w-0 max-w-full flex-col">
									<div className="mb-1 font-bold">■ 선로변형 레일마모 프로파일</div>
									<div className="flex min-h-0 flex-wrap justify-center gap-1 border border-black p-1">
										<div className="flex max-h-full min-h-0 flex-1 justify-center">
											<Image
												src="/rail_left.png"
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
												src="/rail_right.png"
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
									<div className="mb-1 font-bold">■ 좌측 레일마모 검측 그래프</div>
									<div className="flex min-h-0 flex-wrap justify-center gap-1 border border-black p-1">
										<div className="flex max-h-full min-h-0 w-auto flex-1 justify-center">
											<Image
												src="/rail_left_profile.png"
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
									<div className="mb-1 font-bold">■ 우측 레일마모 검측 그래프</div>
									<div className="flex min-h-0 flex-wrap justify-center gap-1 border border-black p-1">
										<div className="flex max-h-full min-h-0 w-auto flex-1 justify-center">
											<Image
												src="/rail_right_profile.png"
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
					<div
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
					</div>
				</div>
			</div>
			<div className="mt-4 flex justify-center gap-2 print:hidden">
				<Button
					size="md"
					onClick={() => {
						router.back();
					}}
				>
					뒤로가기
				</Button>
				<Button size="md" id="savePdf" icon="download" onClick={handlePdf}>
					PDF
				</Button>
			</div>
		</>
	);
}
