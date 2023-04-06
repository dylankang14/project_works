import useAlarmStyle from "@/libs/client/useAlarmStyle";
import { cls } from "@/libs/client/utility";
import Link from "next/link";
import { useState } from "react";
import Button from "./button";
import ModalInputRepair from "./modal-input-repair";

export interface AlarmProps {
	id: number;
	priority: number;
	fixed: boolean;
}

export default function CardAlarm({ data: { id, priority, fixed } }: { data: AlarmProps }) {
	const alarmStyle = useAlarmStyle(priority, fixed);
	const [isModalOpen, setIsModalOpen] = useState(false);

	return (
		<>
			<Link href={`/alarm/detail/${id}`}>
				<div
					className={cls(
						"my-2 cursor-pointer break-inside-avoid overflow-hidden rounded border shadow-sm print:first:mt-0"
					)}
				>
					<div className={cls("flex items-center justify-between border-b px-3 py-2 text-white", alarmStyle.bg)}>
						<div className="flex gap-x-2">
							<span className="rounded border border-white px-1 text-sm">{priority === 0 ? "알람" : "즉시조치"}</span>
							<span>
								검측일시 <span className="font-[500]">2023-01-09 09:52:12</span>
							</span>
							<span className="rounded border border-white px-1 text-sm">{fixed ? "조치완료" : "조치전"}</span>
						</div>
						<Button color="slate" size="sm" className="py-0.5" onClick={() => setIsModalOpen(true)}>
							조치입력
						</Button>
						{/* <div>{isModalOpen ? "true" : "false"}</div> */}
					</div>
					<div className="flex justify-between p-3">
						<div className="grid auto-rows-max grid-cols-[max-content_1fr] gap-x-2">
							<div className="font-[500]">검측항목</div>
							<div>전차선 높이</div>
							<div className="font-[500]">알람위치</div>
							<div>전철주-123</div>
							<div className="font-[500]">알람내용</div>
							<div>123 mm</div>
						</div>
						<div className="flex h-48 w-80 items-center justify-center bg-slate-300">image</div>
					</div>
				</div>
			</Link>
			<ModalInputRepair isModalOpen={isModalOpen} closeModal={() => setIsModalOpen(false)} />
		</>
	);
}
