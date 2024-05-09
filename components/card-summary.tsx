import Link from "next/link";
import Card from "./card";

export default function CardSummary() {
	return (
		<Card title="알람 요약정보">
			<div className="flex flex-wrap gap-x-4 gap-y-2 px-4 py-4 text-white">
				<Link
					href={`/alarm/list/${1}`}
					className="flex flex-1 shrink-0 basis-full items-end justify-around px-6 py-3 text-black sm:basis-0"
				>
					<div className="text-center font-semibold">
						전체 알람
						<span className="ml-2 text-3xl">50</span>건
					</div>
					<div className="flex gap-x-2">
						<div className="text-center font-semibold">
							조치완료 <span className="text-2xl">35</span>건
						</div>
						<div className="text-center font-semibold">
							조치율 <span className="text-2xl">70</span>%
						</div>
					</div>
				</Link>
				{/* <Link
					href={`/alarm/list/${1}?type=${0}`}
					className="flex flex-1 shrink-0 basis-full items-end justify-around rounded bg-amber-500 px-6 py-3 sm:basis-0"
				>
					<div className="text-center">
						알람
						<div>
							<span className="text-3xl">25</span>건
						</div>
					</div>
					<div className="mt-1 justify-between">
						<div className="text">
							조치완료 <span className="text-2xl">14</span>건
						</div>
						<div className="text">
							조치율 <span className="text-2xl">56</span>%
						</div>
					</div>
				</Link> */}
				{/* <Link
					href={`/alarm/list/${1}?type=${1}`}
					className="flex flex-1 shrink-0 basis-full items-end justify-around rounded bg-red-500 px-6 py-3 sm:basis-0"
				>
					<div className="text-center">
						즉시조치
						<div>
							<span className="text-3xl">8</span>건
						</div>
					</div>
					<div className="mt-1 justify-between">
						<div className="text">
							조치완료 <span className="text-2xl">4</span>건
						</div>
						<div className="text">
							조치율 <span className="text-2xl">50</span>%
						</div>
					</div>
				</Link> */}
			</div>
		</Card>
	);
}
