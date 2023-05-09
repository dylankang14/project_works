import { cls } from "@/libs/client/utility";
import { ReactElement } from "react";

interface CardProps {
	children: React.ReactNode;
	title?: string | ReactElement;
	className?: string;
}

export default function Card({ children, title, className }: CardProps) {
	return (
		<div className={cls("my-2 rounded border bg-white shadow-sm", className ? className : "")}>
			{title ? <div className="border-b px-4 py-3 font-[500]">{title}</div> : null}
			{children}
		</div>
	);
}
