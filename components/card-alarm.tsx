import useAlarmStyle from "@/libs/client/useAlarmStyle";
import { cls } from "@/libs/client/utility";
import Link from "next/link";
import { useState } from "react";
import Button from "./button";
import ModalInputRepair from "./modal-input-repair";
import Image from "next/image";
import { useLangData } from "@/contexts/langContext";

export interface AlarmProps {
	id: number;
	priority: number;
	fixed: boolean;
}

export default function CardAlarm({ data: { id, priority, fixed } }: { data: AlarmProps }) {
	const alarmStyle = useAlarmStyle(priority, fixed);
	const [isModalOpen, setIsModalOpen] = useState(false);
	const { common, alarmcode } = useLangData();

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
							<span className="rounded border border-white px-1 text-sm">
								{priority === 0 ? common?.get("C4701") : common?.get("C0031")}
							</span>
							<span>
								{common?.get("C5080")} <span className="font-[500]">2023-04-06 09:5{id}:12</span>
							</span>
							<span className="rounded border border-white px-1 text-sm">
								{fixed ? common?.get("C0080") : common?.get("C0046")}
							</span>
						</div>
						{/* <div>{isModalOpen ? "true" : "false"}</div> */}
					</div>
					<div className="flex justify-between p-3">
						{/* <div className="grid auto-rows-max grid-cols-[max-content_1fr] gap-x-2">
							<div className="font-[500]">검측항목</div>
							<div>전차선 높이</div>
							<div className="font-[500]">{common?.get('c4115')}</div>
							<div>전철주-123</div>
							<div className="font-[500]">common?.get("C4702")내용</div>
							<div>123 mm</div>
						</div> */}
						<div className="grid auto-rows-max grid-cols-[max-content_1fr] gap-x-3 gap-y-1">
							<div className="font-[500]">{common?.get("C4123")}</div>
							<div>20-13</div>
							<div className="font-[500]">{common?.get("C4115")}</div>
							<div>109.321km</div>
							<div className="font-[500]">{alarmcode?.get("1100")}</div>
							<div>5300.12 mm</div>
							<div className="font-[500]">{alarmcode?.get("1101")}</div>
							<div>9.58 mm</div>
							<div className="font-[500]">{alarmcode?.get("1200")}</div>
							<div>1.12 mm</div>
						</div>
						{/* <div className="flex h-48 w-80 items-center justify-center bg-slate-300">image</div> */}
						<div className="flex h-48 items-center justify-center gap-1">
							<Image alt="rail" width={570} height={300} src="/line-height-sample.jpg" />
						</div>
					</div>
				</div>
			</Link>
			<ModalInputRepair isModalOpen={isModalOpen} closeModal={() => setIsModalOpen(false)} />
		</>
	);
}
