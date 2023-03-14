import { cls } from "@/libs/client/utility";
import { UseFormRegisterReturn } from "react-hook-form";
import Icon from "./icon";

interface InputProps {
	label?: string;
	name: string;
	type: string;
	register?: UseFormRegisterReturn;
	required?: boolean;
	disabled?: boolean;
	icon?: string;
	value?: string;
	className?: string;
	checked?: boolean;
	[key: string]: any;
}

export default function Input({
	label,
	name,
	register,
	type,
	required,
	disabled,
	icon,
	value,
	className,
	checked,
	...rest
}: InputProps) {
	return (
		<label htmlFor={name} className={cls("relative", type === "checkbox" || type === "radio" ? "cursor-pointer" : "")}>
			{label && type !== "checkbox" && type !== "radio" && (
				<div className="mb-2 block text-sm text-slate-500">{label}</div>
			)}
			<div className="relative flex items-center">
				{icon && (
					<div className="absolute left-1.5 top-1/2 -translate-y-1/2 text-slate-700">
						<Icon type={icon} className="h-5 w-5 text-slate-600" />
					</div>
				)}
				<input
					{...register}
					id={name}
					type={type}
					required={required}
					disabled={disabled}
					value={value}
					className={cls(
						"appearance-none rounded border-slate-300",
						disabled ? "bg-gray-100" : "",
						className ? className : ""
					)}
					checked={checked}
					{...rest}
				/>
				{label && (type === "checkbox" || type === "radio") && <div className="pl-2">{label}</div>}
			</div>
		</label>
	);
}
