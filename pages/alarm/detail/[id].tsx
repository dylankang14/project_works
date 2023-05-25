import AlarmCriteria from "@/components/alarm-criteria";
import Button from "@/components/button";
import { useLangData } from "@/contexts/langContext";

import { cls } from "@/libs/client/utility";
import Image from "next/image";
import { useRouter } from "next/router";

export default function DetailReport() {
	const router = useRouter();
	const { common, alarmcode } = useLangData();
	return (
		<>
			<div
				id="printContainer"
				className="mx-auto w-auto max-w-[794px] border border-gray-300 bg-white p-[2.5vw] shadow-md print:m-0 print:border-none print:p-0 print:shadow-none lg:my-6 lg:py-6 lg:px-0"
			>
				<div
					id="print"
					className={cls(
						"mx-auto my-0 h-[1047px] w-[718px] p-0 text-xs"
						// !imgSrc || isLoading || device === "pc" ? "" : "hidden"
					)}
				>
					<div className="flex h-full w-full flex-col flex-wrap gap-3">
						<div className="relative text-center">
							<span className="text-2xl font-semibold">{common?.get("C4702")} Report</span>
							<div className="absolute right-0 bottom-0">2024年 04月 06日</div>
						</div>
						<div className="grid grid-cols-[1fr_max-content]">
							<div className="flex flex-col items-center justify-center border border-black px-2 py-3.5">
								<div className="text-lg font-bold">{common?.get("C4135")} Report</div>
								<div className="font-bold">
									{common?.get("C5071")} : 1-站 - 20-站 ({common?.get("C6421")})
								</div>
							</div>
							{/* <table className="h-full border-separate border-spacing-0 border-t border-l border-black text-center">
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
							</table> */}
						</div>
						<div>
							<div className="mb-1 font-bold">
								■ {common?.get("C4135")} {common?.get("C4852")}
							</div>
							<div className="grid grid-cols-[max-content_1fr] gap-2">
								<div className="border border-black">
									<div className="grid grid-cols-[max-content_1fr] gap-x-2 px-2 py-1">
										<div>{common?.get("C6340")}</div>
										<div className="font-bold">2023年 04月 06日</div>
										<div>{common?.get("C5330")}</div>
										<div className="font-bold">09:50:12</div>
										<div>{common?.get("C4123")}</div>
										<div className="font-bold">20-13</div>
										<div>{common?.get("C4783")}</div>
										<div className="font-bold">109.321km</div>
										<div>{common?.get("C4850")}</div>
										<div className="font-bold">{common?.get("C4702")}</div>
									</div>
								</div>
								<div className="border border-black">
									<div className="grid grid-cols-[max-content_1fr] gap-x-2 px-2 py-1">
										<div className="font-[500]">{alarmcode?.get("1100")}</div>
										<div>5300.12 mm</div>
										<div className="font-[500]">{alarmcode?.get("1101")}</div>
										<div>9.58 mm</div>
										<div className="font-[500]">{alarmcode?.get("1200")}</div>
										<div>1.12 mm</div>
										<div className="font-[500]">{common?.get("C6411")}</div>
										<div>{common?.get("C0080")}</div>
									</div>
								</div>
							</div>
						</div>
						<div className="flex min-h-0 flex-1 flex-col gap-2">
							<div className="flex max-h-full min-h-0 min-w-0 max-w-full flex-col">
								<div className="mb-1 font-bold">
									■ {common?.get("C4135")} {common?.get("C4116")}
								</div>
								<div className="flex min-h-0 flex-wrap justify-center gap-1 border border-black p-1">
									<div className="flex max-h-full min-h-0 flex-1 justify-center">
										<Image
											src="/line-height-sample.jpg"
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
							{/* <div className="flex max-h-full min-h-0 min-w-0 max-w-full flex-col">
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
							</div> */}
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
			{/* <div className="mt-4 flex justify-center gap-2 print:hidden">
				<Button
					size="md"
					onClick={() => {
						router.back();
					}}
				>
					뒤로가기
				</Button>
				<Button size="md" id="savePdf" icon="download">
					PDF
				</Button>
			</div> */}
		</>
	);
}
