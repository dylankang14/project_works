import { cls } from "@/libs/client/utility";
import { UseFormRegisterReturn } from "react-hook-form";

interface TextareaProps {
	label?: string;
	name: string;
	register?: UseFormRegisterReturn;
	className?: string;
	rows?: number;
}

export default function Textarea({ label, name, register, className, rows = 5 }: TextareaProps) {
	return (
		<label htmlFor={name}>
			{label && <div className="my-2 block font-semibold">{label}</div>}
			<textarea
				{...register}
				name={name}
				id={name}
				rows={rows}
				className={cls("w-full appearance-none rounded border-gray-300 shadow-sm", className ? className : "")}
			></textarea>
		</label>
	);
}
