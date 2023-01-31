import { cls } from "../libs/client/utility";

interface ButtonProps {
	size?: string;
	color?: string;
	icon?: string | null;
	iconPosition?: string | null;
	text: string;
	onClick?: () => void;
	hasContentInMobile?: string;
	isWide?: boolean;
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
	text,
	onClick,
	hasContentInMobile,
	isWide = false,
	className,
	...rest
}: ButtonProps) {
	const sizes: Sizes = {
		xs: "text-xs px-1 py-0.5",
		sm: "text-sm px-2 py-1.5",
		md: "text-base px-4 py-2",
		lg: "text-lg px-5 py-1.5",
	};
	const colors: Colors = {
		blue: "bg-blue-600 hover:bg-blue-800",
		red: "bg-red-600 hover:bg-red-800",
		slate: "bg-slate-800 hover:bg-slate-900",
	};
	const icons: IconsProps = {
		filter: (
			<svg
				xmlns="http://www.w3.org/2000/svg"
				fill="none"
				viewBox="0 0 24 24"
				strokeWidth={1.5}
				stroke="currentColor"
				className="h-5 w-5"
			>
				<path
					strokeLinecap="round"
					strokeLinejoin="round"
					d="M6 13.5V3.75m0 9.75a1.5 1.5 0 010 3m0-3a1.5 1.5 0 000 3m0 3.75V16.5m12-3V3.75m0 9.75a1.5 1.5 0 010 3m0-3a1.5 1.5 0 000 3m0 3.75V16.5m-6-9V3.75m0 3.75a1.5 1.5 0 010 3m0-3a1.5 1.5 0 000 3m0 9.75V10.5"
				/>
			</svg>
		),
		print: (
			<svg
				xmlns="http://www.w3.org/2000/svg"
				fill="none"
				viewBox="0 0 24 24"
				strokeWidth={1.5}
				stroke="currentColor"
				className="h-5 w-5"
			>
				<path
					strokeLinecap="round"
					strokeLinejoin="round"
					d="M6.72 13.829c-.24.03-.48.062-.72.096m.72-.096a42.415 42.415 0 0110.56 0m-10.56 0L6.34 18m10.94-4.171c.24.03.48.062.72.096m-.72-.096L17.66 18m0 0l.229 2.523a1.125 1.125 0 01-1.12 1.227H7.231c-.662 0-1.18-.568-1.12-1.227L6.34 18m11.318 0h1.091A2.25 2.25 0 0021 15.75V9.456c0-1.081-.768-2.015-1.837-2.175a48.055 48.055 0 00-1.913-.247M6.34 18H5.25A2.25 2.25 0 013 15.75V9.456c0-1.081.768-2.015 1.837-2.175a48.041 48.041 0 011.913-.247m10.5 0a48.536 48.536 0 00-10.5 0m10.5 0V3.375c0-.621-.504-1.125-1.125-1.125h-8.25c-.621 0-1.125.504-1.125 1.125v3.659M18 10.5h.008v.008H18V10.5zm-3 0h.008v.008H15V10.5z"
				/>
			</svg>
		),
		download: (
			<svg
				xmlns="http://www.w3.org/2000/svg"
				fill="none"
				viewBox="0 0 24 24"
				strokeWidth={1.5}
				stroke="currentColor"
				className="h-6 w-6"
			>
				<path
					strokeLinecap="round"
					strokeLinejoin="round"
					d="M3 16.5v2.25A2.25 2.25 0 005.25 21h13.5A2.25 2.25 0 0021 18.75V16.5M16.5 12L12 16.5m0 0L7.5 12m4.5 4.5V3"
				/>
			</svg>
		),
	};

	return (
		<button
			{...rest}
			className={cls(
				"my-2 flex items-center justify-center gap-1 rounded font-semibold text-white",
				sizes[size],
				colors[color],
				iconPosition === "right" ? "flex-row-reverse" : "",
				isWide ? "w-full" : "",
				className
			)}
			onClick={(e) => {
				e.stopPropagation();
				onClick && onClick();
			}}
		>
			{icon ? <span className={hasContentInMobile === "text" ? "hidden sm:block" : ""}>{icons[icon]}</span> : ""}
			<span className={hasContentInMobile === "icon" ? "hidden sm:block" : ""}>{text}</span>
		</button>
	);
}
