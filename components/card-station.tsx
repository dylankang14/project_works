import React from "react";
import BadgeAlarm from "./badge-alarm";
import Card from "./card";

export default function CardStation() {
	return (
		<Card>
			<ul className="grid grid-cols-5 gap-y-4 p-4">
				{Array.from(Array(50).keys()).map((i) => (
					<React.Fragment key={i}>
						<li className="flex text-center">
							<div className="flex flex-1 items-center">
								<div className="w-full rounded bg-slate-200 py-1.5">{i}역</div>
							</div>
							<div className="flex flex-1 flex-col items-center justify-center">
								<BadgeAlarm />
								<div className="my-1 h-2 w-full border-t border-b border-black"></div>
								<BadgeAlarm />
							</div>
						</li>
					</React.Fragment>
				))}
			</ul>
		</Card>
	);
}
