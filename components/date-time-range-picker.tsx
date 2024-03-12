import React, { forwardRef, useCallback, useEffect, useState } from "react";
import { ko } from "date-fns/locale";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.min.css";
import { addDays, subDays } from "date-fns";
import Icon from "./icon";
import { useFilterAPI, useFilterData } from "@/contexts/filterContext";
import useWindowDimensions from "@/libs/client/useWindowDimensions";

interface CustomDateInputProps {
	[key: string]: any;
}

export default function DateTimeRangePicker() {
	const { width } = useWindowDimensions();
	const { dateRange } = useFilterData();
	const { onDateRangeChange } = useFilterAPI();
	// const [startDate, endDate] = dateRange;

	const [startDate, setStartDate] = useState(dateRange.startDate);
	const [endDate, setEndDate] = useState(dateRange.endDate);

	// const limitRange = endDate || addDays(startDate, 4) > new Date() ? new Date() : addDays(startDate, 4);

	const CustomStartDateInput = forwardRef<HTMLDivElement, CustomDateInputProps>((props, ref) => {
		return (
			<div className="relative flex cursor-pointer pl-3 pr-3 text-sm" onClick={props.onClick} ref={ref}>
				<span>{props.value}</span>
			</div>
		);
	});
	const CustomEndDateInput = forwardRef<HTMLDivElement, CustomDateInputProps>((props, ref) => {
		return (
			<div className="relative flex cursor-pointer pl-3 pr-3 text-sm" onClick={props.onClick} ref={ref}>
				<span className="">{props.value}</span>
			</div>
		);
	});
	CustomStartDateInput.displayName = "CustomStartDateInput";
	CustomEndDateInput.displayName = "CustomEndDateInput";
	useEffect(() => {
		onDateRangeChange({ startDate, endDate });
	}, [onDateRangeChange, startDate, endDate]);
	// useEffect(() => {
	// 	console.log(startDate, endDate);
	// 	paramHandler(startDate);
	// }, [startDate, endDate, paramHandler]);

	return (
		<div className="relative flex flex-shrink-0 cursor-pointer flex-wrap items-center gap-y-1.5 rounded border border-slate-300 bg-white py-1.5 text-sm md:gap-y-0 md:py-0">
			<div className="pl-2 text-slate-700">
				<Icon type="date" className="h-5 w-5 text-slate-600" />
			</div>
			<div className="flex flex-grow">
				<DatePicker
					selected={startDate}
					selectsStart
					startDate={startDate}
					endDate={endDate}
					locale={ko}
					showTimeSelect
					onChange={(date) => setStartDate(date!)}
					dateFormat="yyyy-MM-dd 시간 HH:mm"
					// maxDate={limitRange}
					customInput={<CustomStartDateInput />}
					withPortal={width !== null && width < 768}
				/>
			</div>
			<div className="hidden h-full items-center border-l border-r px-1.5 font-bold md:flex">-</div>
			<div className="flex justify-center pl-2.5 md:pl-0">
				<div className="flex items-center px-1.5 font-bold md:hidden">-</div>
				<DatePicker
					selected={endDate}
					selectsEnd
					startDate={startDate}
					endDate={endDate}
					locale={ko}
					showTimeSelect
					onChange={(date) => setEndDate(date!)}
					dateFormat="yyyy-MM-dd 시간 HH:mm"
					// maxDate={limitRange}
					customInput={<CustomEndDateInput />}
					withPortal={width !== null && width < 768}
				/>
			</div>
		</div>
	);
}
