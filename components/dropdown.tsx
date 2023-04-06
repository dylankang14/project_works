import useOutsideClick from "@/libs/client/useOutsideClick";
import { cls } from "@/libs/client/utility";
import { PropsWithChildren, RefObject } from "react";
import Portal from "./portal";

export interface DropdownProps {
	isDropdownOpen: boolean;
	className?: string;
	containerClass?: string;
	position: {
		top: number;
		bottom: number;
		left: number;
		right: number;
	};
	dropdownRef: RefObject<HTMLDivElement>;
	direction?: string;
}

export default function Dropdown({
	children,
	isDropdownOpen,
	className,
	containerClass,
	position,
	dropdownRef,
	direction = "right",
}: PropsWithChildren<DropdownProps>) {
	if (!isDropdownOpen) return null;
	return (
		<Portal wrapperId="dropdown">
			<div
				ref={dropdownRef}
				className={cls(
					"fixed flex justify-center overflow-y-auto rounded border border-gray-100 bg-white px-5 py-3 text-sm shadow-md",
					containerClass ? containerClass : ""
				)}
				style={
					position && direction === "right"
						? { top: position.bottom, left: position.left }
						: { top: position.bottom, right: position.right }
				}
			>
				<div className={cls("relative", className ? className : "")}>{children}</div>
			</div>
		</Portal>
	);
}
