import { cls } from "@/libs/client/utility";
import { UseFormRegisterReturn } from "react-hook-form";

interface InputProps {
	label: string;
	name: string;
	type: string;
	register?: UseFormRegisterReturn;
	required: boolean;
	disabled?: boolean;
}

export default function Input({ label, name, register, type, required, disabled }: InputProps) {
	return (
		<div>
			<label htmlFor={name} className="mb-2 block text-sm text-slate-500">
				{label}
			</label>
			<div className="relative flex items-center">
				<input
					{...register}
					id={name}
					type={type}
					required={required}
					disabled={disabled}
					className={cls("w-full appearance-none rounded border-slate-300", disabled ? "bg-gray-100" : "")}
				/>
			</div>
		</div>
	);
}
