import Link from "next/link";
import Card from "./card";
import { useLangData } from "@/contexts/langContext";

export default function CardSummary() {
	const { common } = useLangData();
	return (
		<Card title={common?.get("C4293")}>
			<div className="flex gap-x-4 px-4 py-4     text-white">
				<Link href={`/alarm/list/${1}`} className="flex flex-1 items-end justify-around px-6 py-3 text-black">
					<div className="text-center font-semibold">
						{common?.get("C2305")} {common?.get("4701")}
						<div>
							<span className="text-3xl">33</span>
						</div>
					</div>
					<div className="mt-1 justify-between">
						<div className="text-center font-semibold">
							{common?.get("C0080")} <span className="text-2xl">18</span>
						</div>
						{/* <div className="text-center font-semibold">
							조치율 <span className="text-2xl">54.5</span>%
						</div> */}
					</div>
				</Link>
				<Link
					href={`/alarm/list/${1}?type=${0}`}
					className="flex flex-1 items-end justify-around rounded bg-amber-500 px-6 py-3"
				>
					<div className="text-center">
						{common?.get("C4701")}
						<div>
							<span className="text-3xl">25</span>
						</div>
					</div>
					<div className="mt-1 justify-between">
						<div className="text">
							{common?.get("C0080")} <span className="text-2xl">14</span>
						</div>
						{/* <div className="text">
							조치율 <span className="text-2xl">56</span>%
						</div> */}
					</div>
				</Link>
				<Link
					href={`/alarm/list/${1}?type=${1}`}
					className="flex flex-1 items-end justify-around rounded bg-red-500 px-6 py-3"
				>
					<div className="text-center">
						{common?.get("C0031")}
						<div>
							<span className="text-3xl">8</span>
						</div>
					</div>
					<div className="mt-1 justify-between">
						<div className="text">
							{common?.get("C0080")} <span className="text-2xl">4</span>
						</div>
						{/* <div className="text">
							조치율 <span className="text-2xl">50</span>%
						</div> */}
					</div>
				</Link>
			</div>
		</Card>
	);
}
