import { LineChart, Line, CartesianGrid, XAxis, YAxis, Tooltip, Legend, ResponsiveContainer } from "recharts";

interface ChartDataTypes {
	[key: string]: any;
}

export default function ChartLineAlarm({ data }: ChartDataTypes) {
	return (
		<div className="h-80 w-full">
			<ResponsiveContainer>
				<LineChart data={data} margin={{ top: 20, right: 30, left: 0, bottom: 0 }}>
					<CartesianGrid stroke="#ccc" />
					<XAxis dataKey={"name"} />
					<YAxis />
					<Tooltip />
					<Legend />
					<Line type="monotone" dataKey="av" stroke="#ef4444" strokeWidth={1} />
					<Line type="monotone" dataKey="iv" stroke="#f59e0b" strokeWidth={1} />
					<Line type="monotone" dataKey="fixed" stroke="#10b981" strokeWidth={1} />
				</LineChart>
			</ResponsiveContainer>
		</div>
	);
}
