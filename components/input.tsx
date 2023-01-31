import { UseFormRegisterReturn } from "react-hook-form";

interface InputProps {
	label: string;
	name: string;
	type: string;
	register?: UseFormRegisterReturn;
	required: boolean;
}

export default function Input({ label, name, register, type, required }: InputProps) {
	return (
		<div>
			<label htmlFor={name} className="mb-2 block text-sm text-slate-500">
				{label}
			</label>
			<div className="relative flex items-center">
				<input {...register} id={name} type={type} className="w-full appearance-none rounded border-slate-300" />
			</div>
		</div>
	);
}
