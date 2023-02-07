import Pagination from "./pagination";

interface DataProp {
	id: number;
	[key: string]: any;
}

interface DataProps {
	dataType: string[];
	data: DataProp[];
	pagination?: boolean;
}

export default function Table({ data, dataType, pagination = false }: DataProps) {
	return (
		<>
			<div className="p-2">
				<table className="w-full table-auto text-slate-500">
					<thead>
						<tr>
							{dataType.map((i) => (
								<th key={i} className="border-b border-slate-300 p-2 pt-1">
									{i}
								</th>
							))}
						</tr>
					</thead>
					<tbody>
						{data.map((data) => (
							<tr key={data.id} className="text-center even:bg-slate-50">
								{Object.values(data).map((value, index) => (
									<td key={index} className="border-b border-slate-200 p-2">
										{value}
									</td>
								))}
							</tr>
						))}
					</tbody>
				</table>
			</div>
			{pagination && <Pagination active={1} className="pt-1 pb-4" />}
		</>
	);
}
