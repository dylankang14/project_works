import Link from "next/link";
import Card from "./card";

export default function CardSummary() {
	return (
		<Card>
			<div className="flex gap-x-4 px-4 py-4     text-white">
				<Link href={`/alarm/list/${1}`} className="flex-1 px-6 py-3 text-black">
					<div className="text-center font-semibold">
						전체 알람 <span className="text-3xl">33</span>건
					</div>
					<div className="mt-1 flex justify-between">
						<div className="text-center font-semibold">
							조치완료 <span className="text-2xl">18</span>건
						</div>
						<div className="text-center font-semibold">
							조치율 <span className="text-2xl">54.5</span>%
						</div>
					</div>
				</Link>
				<Link href={`/alarm/list/${1}?type=${0}`} className="flex-1 rounded bg-amber-500 px-6 py-3">
					<div className="text-center">
						알람 <span className="text-3xl">25</span>건
					</div>
					<div className="mt-1 flex justify-between">
						<div className="text">
							조치완료 <span className="text-2xl">14</span>건
						</div>
						<div className="text">
							조치율 <span className="text-2xl">56</span>%
						</div>
					</div>
				</Link>
				<Link href={`/alarm/list/${1}?type=${1}`} className="flex-1 rounded bg-red-500 px-6 py-3">
					<div className="text-center">
						즉시조치 <span className="text-3xl">8</span>건
					</div>
					<div className="mt-1 flex justify-between">
						<div className="text">
							조치완료 <span className="text-2xl">4</span>건
						</div>
						<div className="text">
							조치율 <span className="text-2xl">50</span>%
						</div>
					</div>
				</Link>
			</div>
		</Card>
	);
}
