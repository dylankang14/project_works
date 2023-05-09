import useWindowDimensions from "@/libs/client/useWindowDimensions";
import { cls } from "@/libs/client/utility";
import { PropsWithChildren, useEffect } from "react";
import Portal from "./portal";

export interface ModalProps {
	isModalOpen: boolean;
	closeModal: () => void;
	className?: string;
	containerClass?: string;
	stopPropagation?: boolean;
}

export default function ModalVertical({
	children,
	isModalOpen,
	closeModal,
	className,
	containerClass,
	stopPropagation = false,
}: PropsWithChildren<ModalProps>) {
	useEffect(() => {
		const closeOnEscapeKey = (e: KeyboardEvent) => (e.key === "Escape" ? closeModal() : null);
		document.body.addEventListener("keydown", closeOnEscapeKey);
		return () => {
			document.body.removeEventListener("keydown", closeOnEscapeKey);
		};
	}, [closeModal]);

	if (!isModalOpen) return null;
	return (
		<Portal wrapperId="modal-vertical">
			<div
				className={cls(
					"fixed top-0 left-0 flex h-full w-full justify-center overflow-y-auto text-sm",
					containerClass ? containerClass : "items-center"
				)}
			>
				<div
					className="fixed inset-0 bg-black/50"
					onClick={(e) => {
						if (stopPropagation) e.stopPropagation();
						closeModal();
					}}
				></div>
				<div className={cls("relative", className ? className : "")}>{children}</div>
			</div>
		</Portal>
	);
}
