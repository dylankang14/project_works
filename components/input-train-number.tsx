import { updateSearchParamsType } from "@/libs/client/useAlarmList";
import Icon from "./icon";

export default function InputTrainNumber({ updateSearchParams }: updateSearchParamsType) {
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
			/>
		</label>
	);
}
