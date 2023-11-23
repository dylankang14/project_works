import { ReactNode } from "react";
import { cls } from "../libs/client/utility";
import Icon from "./icon";

interface ButtonProps {
	size?: string;
	color?: string;
	icon?: string | null;
	iconPosition?: string | null;
	children?: ReactNode;
	onClick?: (e?: React.MouseEvent<HTMLButtonElement, MouseEvent> | null) => void;
	hasContentInMobile?: string;
	isWide?: boolean;
	preventDefault?: boolean;
	[key: string]: any;
}
interface Sizes {
	[key: string]: string;
}
interface Colors {
	[key: string]: string;
}
interface IconsProps {
	[key: string]: JSX.Element;
}

export default function Button({
	size = "md",
	color = "blue",
	icon,
	iconPosition,
	children,
	onClick,
	hasContentInMobile,
	isWide = false,
	preventDefault = true,
	className,
	...rest
}: ButtonProps) {
	const sizes: Sizes = {
		none: "",
		xs: "text-xs px-1 py-0.5",
		sm: "text-sm px-2 py-1",
		md: "text-base px-4 py-2",
		lg: "text-lg px-5 py-1.5",
	};
	const colors: Colors = {
		blue: "bg-blue-600 hover:bg-blue-800",
		red: "bg-red-600 hover:bg-red-800",
		slate: "bg-slate-700 hover:bg-slate-900",
	};

	return (
		<button
			{...rest}
			className={cls(
				"flex items-center justify-center rounded font-[500] text-white",
				sizes[size],
				colors[color],
				iconPosition === "right" ? "flex-row-reverse" : "",
				isWide ? "w-full" : "",
				children ? "gap-1 " : "",
				className
			)}
			onClick={(e) => {
				{
					preventDefault && e.preventDefault();
				}
				e.stopPropagation();
				onClick && onClick();
			}}
		>
			{icon ? (
				<span>
					<Icon type={icon} className="h-5 w-5" />
				</span>
			) : (
				""
			)}
			<span>{children}</span>
		</button>
	);
}
