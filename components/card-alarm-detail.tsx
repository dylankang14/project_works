import useAlarmStyle from "@/libs/client/useAlarmStyle";
import { cls } from "@/libs/client/utility";
import Link from "next/link";
import { useState } from "react";
import Button from "./button";
import ModalInputRepair from "./modal-input-repair";
import Image from "next/image";
import ModalAlarmValidation from "./modal-alarm-validation";

export interface AlarmDetailProps {
	id: number;
	priority: number;
	fixed: boolean;
}

export default function CardAlarmDetail({ data: { id, priority, fixed } }: { data: AlarmDetailProps }) {
	const alarmStyle = useAlarmStyle(priority, fixed);
	const [isModalOpen, setIsModalOpen] = useState(false);
	const [isValModalOpen, setIsValModalOpen] = useState(false);

	return (
		<>
			<div className={cls("my-2 w-full break-inside-avoid overflow-hidden rounded border shadow-sm print:first:mt-0")}>
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
						<span className="text-base">
							<span className="pr-1 text-base font-[500]">검측일시</span> 2023-04-06 09:5{id}:12
						</span>
						<span className="hidden h-7 items-center rounded border border-white px-1.5 text-sm font-[500] print:flex sm:flex">
							{priority === 0 ? "알람" : "즉시조치"} - {fixed ? "조치완료" : "조치전"}
						</span>
					</div>
					<div className="flex shrink-0 basis-full justify-between gap-1 print:basis-auto sm:basis-auto">
						<span className="flex items-center rounded border border-white px-1 text-sm print:hidden sm:hidden">
							{fixed ? "조치완료" : "조치전"}
						</span>
						<div className="flex gap-x-2">
							<Button color="slate" size="none" className="px-2 py-1 text-sm" onClick={() => setIsValModalOpen(true)}>
								유효성
							</Button>
							<Button color="slate" size="none" className="px-2 py-1 text-sm" onClick={() => setIsModalOpen(true)}>
								조치입력
							</Button>
						</div>
					</div>
					{/* <div>{isModalOpen ? "true" : "false"}</div> */}
				</div>
				<div className="grid grid-cols-1 justify-between gap-y-3 divide-y p-3">
					{/* <div className="grid auto-rows-max grid-cols-[max-content_1fr] gap-x-2">
							<div className="font-[500]">검측항목</div>
							<div>전차선 높이</div>
							<div className="font-[500]">알람위치</div>
							<div>전철주-123</div>
							<div className="font-[500]">알람내용</div>
							<div>123 mm</div>
						</div> */}
					<div className="">
						<div className="mb-1.5 text-base font-bold">알람 기본 정보</div>
						<div className="flex flex-wrap justify-stretch gap-x-3 gap-y-1 px-1">
							<div className="flex flex-grow flex-wrap gap-x-2">
								<div className="font-[500]">알람 타입</div>
								<div>선로변형 레일마모</div>
							</div>
							<div className="flex flex-grow flex-wrap gap-x-2">
								<div className="font-[500]">검측 노선</div>
								<div>경부선 - 하1선</div>
							</div>
							<div className="flex flex-grow flex-wrap gap-x-2">
								<div className="font-[500]">검측 구간</div>
								<div>용산역 - 영등포역</div>
							</div>
							<div className="flex flex-grow flex-wrap gap-x-2">
								<div className="font-[500]">전철주 구간</div>
								<div>30021 - 30022</div>
							</div>
							<div className="flex flex-grow flex-wrap gap-x-2">
								<div className="font-[500]">킬로정</div>
								<div>123.45 km</div>
							</div>
						</div>
					</div>
					<div className="pt-2">
						<div className="mb-1.5 text-base font-bold">알람 상세 정보</div>
						<div className="flex flex-wrap justify-stretch gap-x-3 gap-y-1 px-1">
							<div className="flex flex-grow flex-wrap gap-x-2">
								<div className="font-[500]">좌측 편마모</div>
								<div>9.96 mm</div>
							</div>
							<div className="flex flex-grow flex-wrap gap-x-2">
								<div className="font-[500]">좌측 수직마모</div>
								<div>8.88 mm</div>
							</div>
							<div className="flex flex-grow flex-wrap gap-x-2">
								<div className="font-[500]">우측 편마모</div>
								<div>6.59 mm</div>
							</div>
							<div className="flex flex-grow flex-wrap gap-x-2">
								<div className="font-[500]">우측 수직마모</div>
								<div>5.85 mm</div>
							</div>
						</div>
					</div>
					<div className="pt-2">
						<div className="mb-1.5 text-base font-bold">알람 이미지 및 그래프</div>
						<div className="flex flex-wrap justify-center gap-x-2 pt-2">
							<div className="text-center">
								<Image className="w-full" alt="rail" width={450} height={450} src="/rail_right.png" />
								<div className="text-md pb-2 pt-2 font-[500]">좌측</div>
							</div>
							<div className="text-center">
								<Image className="w-full" alt="rail" width={450} height={450} src="/rail_right.png" />
								<div className="text-md pb-2 pt-2 font-[500]">우측</div>
							</div>
						</div>
					</div>
				</div>
			</div>
			<ModalInputRepair isModalOpen={isModalOpen} closeModal={() => setIsModalOpen(false)} />
			<ModalAlarmValidation isModalOpen={isValModalOpen} closeModal={() => setIsValModalOpen(false)} />
		</>
	);
}
