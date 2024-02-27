import { useFilterAPI } from "@/contexts/filterContext";
import Icon from "./icon";
import React, { useCallback, useEffect, useState } from "react";

export default function InputTrainNumber() {
	const { onTrainNumberChange } = useFilterAPI();
	const [trainNumber, setTrainNumber] = useState("");
	const handleChange = useCallback(
		(e: React.ChangeEvent<HTMLInputElement>) => {
			setTrainNumber(e.target.value);
		},
		[setTrainNumber]
	);
	useEffect(() => {
		onTrainNumberChange(trainNumber);
	}, [trainNumber, onTrainNumberChange]);

	return (
		<label className="relative flex flex-auto cursor-pointer" htmlFor="search">
			<div className="absolute left-2.5 top-1/2 -translate-y-1/2 text-slate-700">
				<Icon type="train" className="h-5 w-5 text-slate-600" />
			</div>
			<input
				className="w-full cursor-pointer rounded border-slate-300 py-1.5 pl-9 pr-2 text-sm"
				type="text"
				placeholder="모든 차량"
				id="alarmType"
				value={trainNumber}
				onChange={handleChange}
			/>
		</label>
	);
}
