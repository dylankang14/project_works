import Card from "./card";

export default function CardSummary() {
	return (
		<Card>
			<div className="flex justify-center gap-x-5 border-b px-3 py-3">
				<div className="text-center font-semibold">
					전체 알람 <span className="text-2xl">20</span>건
				</div>
				<div className="text-center font-semibold">
					조치완료 <span className="text-2xl">10</span>건
				</div>
				<div className="text-center font-semibold">
					조치율 <span className="text-2xl">50</span>%
				</div>
			</div>
			<div className="flex gap-x-4 px-4 py-4 text-white">
				<div className="flex flex-1 justify-evenly rounded bg-amber-500 px-3 py-3">
					<div className="text">
						알람 <span className="text-2xl">10</span>건
					</div>
					<div className="text">
						조치완료 <span className="text-2xl">5</span>건
					</div>
					<div className="text">
						조치율 <span className="text-2xl">50</span>%
					</div>
				</div>
				<div className="flex flex-1 justify-evenly rounded bg-red-500 px-3 py-3">
					<div className="text">
						즉시조치 <span className="text-2xl">10</span>건
					</div>
					<div className="text">
						조치완료 <span className="text-2xl">5</span>건
					</div>
					<div className="text">
						조치율 <span className="text-2xl">50</span>%
					</div>
				</div>
			</div>
		</Card>
	);
}
