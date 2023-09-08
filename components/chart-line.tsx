import { LineChart, Line, CartesianGrid, XAxis, YAxis, Tooltip, Legend, ResponsiveContainer } from "recharts";

interface ChartDataTypes {
	[key: string]: any;
}

export default function ChartLine({ data }: ChartDataTypes) {
	return (
		<div className="h-80 w-full">
			<ResponsiveContainer>
				<LineChart data={data} margin={{ top: 20, right: 40, left: 0, bottom: 0 }}>
					<CartesianGrid stroke="#ccc" />
					<XAxis dataKey={"name"} />
					<YAxis />
					<Tooltip />
					<Legend />
					<Line type="monotone" dataKey="number" stroke="#2196F3" strokeWidth={1} />
				</LineChart>
			</ResponsiveContainer>
		</div>
	);
}
