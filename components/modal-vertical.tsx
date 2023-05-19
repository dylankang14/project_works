import useWindowDimensions from "@/libs/client/useWindowDimensions";
import { cls } from "@/libs/client/utility";
import { PropsWithChildren, useEffect, useRef } from "react";
import Portal from "./portal";
import { CSSTransition } from "react-transition-group";

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
	const nodeRef = useRef(null);
	useEffect(() => {
		const closeOnEscapeKey = (e: KeyboardEvent) => (e.key === "Escape" ? closeModal() : null);
		document.body.addEventListener("keydown", closeOnEscapeKey);
		return () => {
			document.body.removeEventListener("keydown", closeOnEscapeKey);
		};
	}, [closeModal]);

	// if (!isModalOpen) return null;
	return (
		<Portal wrapperId="modal-vertical">
			<CSSTransition in={isModalOpen} nodeRef={nodeRef} classNames="modal-vertical" timeout={200} unmountOnExit>
				<div
					ref={nodeRef}
					className={cls(
						"fixed inset-0 h-full w-full overflow-hidden overflow-y-auto text-sm",
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
					<div className={cls("absolute h-full bg-slate-800", className ? className : "")}>{children}</div>
				</div>
			</CSSTransition>
		</Portal>
	);
}
