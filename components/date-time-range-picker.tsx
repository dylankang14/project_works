import React, { forwardRef, useState } from "react";
import { ko } from "date-fns/locale";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.min.css";
import { addDays, subDays } from "date-fns";
import Icon from "./icon";
import { useFilterAPI, useFilterData } from "@/contexts/filterContext";

interface CustomDateInputProps {
	[key: string]: any;
}

export default function DateTimeRangePicker() {
	const { dateRange } = useFilterData();
	const { onDateRangeChange } = useFilterAPI();
	// const [startDate, endDate] = dateRange;
	const onChange = (date: Date) => {
		// onDateRangeChange(dates);
		console.log(date);
	};
	console.log(dateRange);

	const [startDate, setStartDate] = useState(dateRange[0]);
	const [endDate, setEndDate] = useState(dateRange[1]);

	const limitRange = endDate || addDays(startDate, 4) > new Date() ? new Date() : addDays(startDate, 4);

	const CustomStartDateInput = forwardRef<HTMLDivElement, CustomDateInputProps>((props, ref) => {
		return (
			<div className="relative flex cursor-pointer py-1.5 pl-2 pr-2 text-sm" onClick={props.onClick} ref={ref}>
				<span>{props.value}</span>
			</div>
		);
	});
	const CustomEndDateInput = forwardRef<HTMLDivElement, CustomDateInputProps>((props, ref) => {
		return (
			<div className="relative flex cursor-pointer py-1.5 pl-2 pr-3 text-sm" onClick={props.onClick} ref={ref}>
				<span className="">{props.value}</span>
			</div>
		);
	});
	CustomStartDateInput.displayName = "CustomStartDateInput";
	CustomEndDateInput.displayName = "CustomEndDateInput";
	return (
		<div className="relative flex cursor-pointer flex-wrap items-center rounded border border-slate-300 bg-white text-sm">
			<div className="pl-2 text-slate-700">
				<Icon type="date" className="h-5 w-5 text-slate-600" />
			</div>
			<div className="flex">
				<DatePicker
					selected={startDate}
					selectsStart
					startDate={startDate}
					endDate={endDate}
					locale={ko}
					showTimeSelect
					onChange={(date) => setStartDate(date!)}
					dateFormat="yyyy-MM-dd aa h:mm"
					maxDate={limitRange}
					customInput={<CustomStartDateInput />}
					// withPortal={device === "mobile"}
				/>
			</div>
			<div className="flex h-full items-center border-l border-r px-1.5 font-bold">-</div>
			<div className="flex">
				<DatePicker
					selected={endDate}
					selectsEnd
					startDate={startDate}
					endDate={endDate}
					locale={ko}
					showTimeSelect
					onChange={(date) => setEndDate(date!)}
					dateFormat="yyyy-MM-dd aa h:mm"
					maxDate={limitRange}
					customInput={<CustomEndDateInput />}
					// withPortal={device === "mobile"}
				/>
			</div>
		</div>
	);
}
