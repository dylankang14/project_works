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
			<div
				className={cls(
					"my-2 w-full cursor-pointer break-inside-avoid overflow-hidden rounded border shadow-sm print:first:mt-0"
				)}
			>
				<div
					className={cls(
						"flex flex-wrap items-center justify-between gap-y-2 border-b px-3 py-2 text-white",
						alarmStyle.bg
					)}
				>
					<div className="flex items-center gap-x-2">
						<span className="flex h-7 items-center rounded border border-white px-1 text-sm">
							{priority === 0 ? "알람" : "즉시조치"}
						</span>
						<span>
							검측일시 <span className="font-[500]">2023-04-06 09:5{id}:12</span>
						</span>
						<span className="hidden h-7 items-center rounded border border-white px-1 text-sm print:flex sm:flex">
							{fixed ? "조치완료" : "조치전"}
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
				<div className="grid grid-cols-1 justify-between gap-y-2 p-3 print:grid-cols-[max-content_1fr]">
					{/* <div className="grid auto-rows-max grid-cols-[max-content_1fr] gap-x-2">
							<div className="font-[500]">검측항목</div>
							<div>전차선 높이</div>
							<div className="font-[500]">알람위치</div>
							<div>전철주-123</div>
							<div className="font-[500]">알람내용</div>
							<div>123 mm</div>
						</div> */}
					<div className="grid auto-cols-fr grid-flow-col auto-rows-max gap-x-3 gap-y-1 border-b pb-3">
						<div className="text-center">
							<div className="font-[500]">전철주 번호</div>
							<div>20-13</div>
						</div>
						<div className="text-center">
							<div className="font-[500]">알람위치</div>
							<div>109.321km</div>
						</div>
						<div className="text-center">
							<div className="font-[500]">좌측 편마모</div>
							<div>9.96 mm</div>
						</div>
						<div className="text-center">
							<div className="font-[500]">좌측 수직마모</div>
							<div>8.88 mm</div>
						</div>
						<div className="text-center">
							<div className="font-[500]">우측 편마모</div>
							<div>6.59 mm</div>
						</div>
						<div className="text-center">
							<div className="font-[500]">우측 수직마모</div>
							<div>5.85 mm</div>
						</div>
					</div>
					{/* <div className="flex h-48 w-80 items-center justify-center bg-slate-300">image</div> */}
					<div className="grid grid-cols-2 place-content-end gap-1 print:grid-cols-[max-content_max-content]">
						{/* <Image alt="rail" width={700} height={700} src="/rail_left.png" /> */}
						<div className="text-center">
							<div className="text-md pb-2 pt-2 font-[500]">좌측</div>
							<Image alt="rail" width={450} height={450} src="/rail_right.png" />
						</div>
						<div className="text-center">
							<div className="text-md pb-2 pt-2 font-[500]">우측</div>
							<Image alt="rail" width={450} height={450} src="/rail_right.png" />
						</div>
					</div>
				</div>
			</div>
			<ModalInputRepair isModalOpen={isModalOpen} closeModal={() => setIsModalOpen(false)} />
			<ModalAlarmValidation isModalOpen={isValModalOpen} closeModal={() => setIsValModalOpen(false)} />
		</>
	);
}
