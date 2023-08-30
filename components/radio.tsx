import { cls } from "@/libs/client/utility";
import { ReactNode } from "react";

interface RadioProps {
	children: ReactNode;
	value: string;
	defaultChecked: string;
	onChangeRadio: (val: string) => void;
}

export default function Radio({ children, value, defaultChecked, onChangeRadio }: RadioProps) {
	return (
		<div
			className={cls(
				"cursor-pointer p-1 text-white",
				defaultChecked === value ? "bg-blue-500" : "bg-slate-400/70 hover:bg-slate-500/70"
			)}
			onClick={() => onChangeRadio(value)}
		>
			{children}
		</div>
	);
}
