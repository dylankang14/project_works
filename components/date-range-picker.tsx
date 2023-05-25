import React, { forwardRef, useState } from "react";
import { zhTW } from "date-fns/locale";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.min.css";
import { addDays, subDays } from "date-fns";
import Icon from "./icon";
import { useFilterAPI, useFilterData } from "@/contexts/filterContext";

interface CustomDateInputProps {
	[key: string]: any;
}

export default function DateRangePicker() {
	const { dateRange } = useFilterData();
	const { onDateRangeChange } = useFilterAPI();
	const [startDate, endDate] = dateRange;
	const onChange = (dates: [Date, Date]) => {
		onDateRangeChange(dates);
	};

	const limitRange = endDate || addDays(startDate, 4) > new Date() ? new Date() : addDays(startDate, 4);

	const CustomDateInput = forwardRef<HTMLDivElement, CustomDateInputProps>((props, ref) => {
		return (
			<div
				className="relative flex cursor-pointer rounded border border-slate-300 bg-white py-1.5 pr-3 pl-2 text-sm"
				onClick={props.onClick}
				ref={ref}
			>
				<div className="text-slate-700">
					<Icon type="date" className="mr-1.5 h-5 w-5 text-slate-600" />
				</div>
				<span id="date">{props.value}</span>
			</div>
		);
	});
	CustomDateInput.displayName = "CustomDateInput";
	return (
		<div className="w-auto">
			<DatePicker
				selectsRange={true}
				startDate={startDate}
				endDate={endDate}
				locale={zhTW}
				onChange={onChange}
				dateFormat="yyyy-MM-dd"
				maxDate={limitRange}
				customInput={<CustomDateInput />}
				// withPortal={device === "mobile"}
			/>
		</div>
	);
}
