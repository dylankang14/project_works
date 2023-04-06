import { cls } from "@/libs/client/utility";
import { UseFormRegisterReturn } from "react-hook-form";

interface Option {
	value: string;
	text: string;
}

interface SelectProps {
	name: string;
	register?: UseFormRegisterReturn;
	className?: string;
	options: Option[];
}

export default function SelectBox({ name, register, className, options }: SelectProps) {
	return (
		<select
			{...register}
			name={name}
			id={name}
			className={cls("w-full appearance-none rounded border-gray-300 shadow-sm ", className ? className : "")}
		>
			{options.map((option, index) => (
				<option key={index} value={option.value}>
					{option.text}
				</option>
			))}
		</select>
	);
}
