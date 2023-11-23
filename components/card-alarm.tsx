import useAlarmStyle from "@/libs/client/useAlarmStyle";
import { cls } from "@/libs/client/utility";
import Link from "next/link";
import { useState } from "react";
import Button from "./button";
import ModalInputRepair from "./modal-input-repair";
import Image from "next/image";
import ModalAlarmValidation from "./modal-alarm-validation";

export interface AlarmProps {
	id: number;
	priority: number;
	fixed: boolean;
}

export default function CardAlarm({ data: { id, priority, fixed } }: { data: AlarmProps }) {
	const alarmStyle = useAlarmStyle(priority, fixed);
	const [isModalOpen, setIsModalOpen] = useState(false);
	const [isValModalOpen, setIsValModalOpen] = useState(false);
	const [isHide, setIsHide] = useState(true);

	return (
		<>
			<Link href={`/alarm/detail/${id}`}>
				<div
					className={cls(
						"my-2 cursor-pointer break-inside-avoid overflow-hidden rounded border shadow-sm print:first:mt-0"
					)}
				>
					<div
						className={cls(
							"flex flex-wrap items-center justify-between gap-y-2 border-b px-3 py-2 text-white",
							alarmStyle.bg
						)}
					>
						<div className="flex items-center gap-x-3">
							{/* <span className="flex h-7 items-center rounded border border-white px-1.5 text-sm font-[500]">
								{priority === 0 ? "알람" : "즉시조치"}
							</span> */}
							<span className="hidden h-7 items-center rounded border border-white px-1.5 text-sm font-[500] print:flex sm:flex">
								{priority === 0 && !fixed ? "알람" : "조치됨"}
							</span>
							<span className="text-base">
								<span className="pr-1 text-base">검측일시</span> 2023-04-06 09:5{id}:12
							</span>
						</div>
						<div className="flex shrink-0 basis-full justify-between gap-1 print:basis-auto sm:basis-auto">
							<span className="flex items-center rounded border border-white px-1 text-sm print:hidden sm:hidden">
								{fixed ? "조치완료" : "조치전"}
							</span>
							<div className="flex gap-x-2">
								<Button color="slate" size="none" className="px-2 py-1 text-sm" onClick={() => setIsModalOpen(true)}>
									조치입력
								</Button>
								<Button
									color="slate"
									size="none"
									className={cls("px-2 py-1 text-sm", !isHide ? "bg-gray-500" : "")}
									onClick={() => setIsHide(!isHide)}
								>
									{isHide ? "숨기기" : "숨겨짐"}
								</Button>
							</div>
						</div>
						{/* <div>{isModalOpen ? "true" : "false"}</div> */}
					</div>
					<div className="flex flex-wrap justify-between gap-x-2 bg-white px-3 pb-1 pt-2">
						<div className="grid auto-rows-max grid-cols-[max-content_1fr] gap-x-2">
							<div className="font-[500]">검측항목</div>
							<div>전차선 높이/편위/마모</div>
							<div className="font-[500]">알람위치</div>
							<div>수유역 - 쌍문역(상선), 애자번호-21</div>
							<div className="font-[500]">알람항목</div>
							<div>전차선 편위</div>
							<div className="font-[500]">알람내용</div>
							<div>12 mm</div>
							<div className="font-[500]">조치상태</div>
							<div>조치전</div>
						</div>
						{/* <div className="divide-y">
							<div className="pb-3">
								<div className="mb-1.5 font-bold">알람 기본 정보</div>
								<div className="flex flex-wrap justify-stretch gap-x-3 gap-y-1 px-1">
									<div className="flex flex-grow flex-wrap gap-x-2">
										<div className="font-[500]">알람 타입</div>
										<div>전차선 높이/편위/마모</div>
									</div>
									<div className="flex flex-grow flex-wrap gap-x-2">
										<div className="font-[500]">검측 구간</div>
										<div>수유역 - 쌍문역(상선)</div>
									</div>
									<div className="flex flex-grow flex-wrap gap-x-2">
										<div className="font-[500]">애자번호</div>
										<div>12</div>
									</div>
									<div className="flex flex-grow flex-wrap gap-x-2">
										<div className="font-[500]">킬로정</div>
										<div>123.45 km</div>
									</div>
								</div>
							</div>
							<div className="pb-3 pt-2">
								<div className="mb-1.5 font-bold">알람 상세 정보</div>
								<div className="flex flex-wrap justify-stretch gap-x-3 gap-y-1 px-1">
									<div className="flex flex-grow flex-wrap gap-x-2">
										<div className="font-[500]">전차선 높이</div>
										<div>4,720 mm</div>
									</div>
									<div className="flex flex-grow flex-wrap gap-x-2">
										<div className="font-[500]">전차선 편위</div>
										<div>12 mm</div>
									</div>
									<div className="flex flex-grow flex-wrap gap-x-2">
										<div className="font-[500]">전차선 마모</div>
										<div>80%</div>
									</div>
								</div>
							</div>
						</div> */}
						<div className="flex h-48 w-80 items-center justify-center bg-slate-300">image</div>
						{/* <div className="">
							<div className="font-bold">알람 이미지 및 그래프</div>
							<div className="flex flex-col flex-wrap justify-center gap-x-2 pt-2">
								<div className="flex-1 text-center">
									<Image className="w-auto" alt="rail" width={450} height={100} src="/line-height.jpg" />
									<div className="text-md pb-2 pt-1 font-[500]">전차선 높이</div>
								</div>
							</div>
						</div> */}
					</div>
				</div>
			</Link>
			<ModalInputRepair isModalOpen={isModalOpen} closeModal={() => setIsModalOpen(false)} />
			<ModalAlarmValidation isModalOpen={isValModalOpen} closeModal={() => setIsValModalOpen(false)} />
		</>
	);
}
