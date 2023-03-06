import CardAlarm from "@/components/card-alarm";

import Pagination from "@/components/pagination";

export default function AlarmList() {
	const data = Array.from(Array(5).keys()).map((i) => ({
		id: i,
		priority: i % 2,
		fixed: i % 3 > 1,
	}));

	console.log(data);

	return (
		<div className="">
			{data.map((data) => (
				<CardAlarm key={data.id} data={data} />
			))}
			<Pagination active={1} className="py-2" />
		</div>
	);
}
