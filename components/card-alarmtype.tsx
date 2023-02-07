import React from "react";

export default function Alarmtype() {
	return (
		<div className="px-3 py-3">
			<div className="grid grid-cols-[repeat(4,auto)] text-center">
				<div className="border-b p-2 font-semibold">검측항목</div>
				<div className="border-b p-2 font-semibold">알람/조치완료/완료율</div>
				<div className="border-b p-2 font-semibold">즉시조치/조치완료/완료율</div>
				<div className="border-b p-2 font-semibold">전체알람/조치완료/완료율</div>
				{Array.from(Array(10).keys()).map((i) => (
					<React.Fragment key={i}>
						<div className="border-b p-2">검측항목 - {i}</div>
						<div className="border-b p-2">5/2/40%</div>
						<div className="border-b p-2">5/2/40%</div>
						<div className="border-b p-2">5/2/40%</div>
					</React.Fragment>
				))}
			</div>
		</div>
	);
}
