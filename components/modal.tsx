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

export default function Modal({
	children,
	isModalOpen,
	closeModal,
	className,
	containerClass,
	stopPropagation = false,
}: PropsWithChildren<ModalProps>) {
	// const { height } = useWindowDimensions();
	// const modalRef = useCallback((node: HTMLDivElement) => {
	// 	if (node !== null) {
	// 		const observer = new ResizeObserver((entries) => {
	// 			for (const entry of entries) {
	// 				const { width, height } = entry.contentRect;
	// 				console.log(width, height);
	// 			}
	// 		});

	// 		const modalNode = node;
	// 		if (modalNode) {
	// 			observer.observe(modalNode);
	// 		}
	// 	}
	// }, []);
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
		<Portal wrapperId="modal">
			<CSSTransition in={isModalOpen} nodeRef={nodeRef} classNames="modal" timeout={200} unmountOnExit>
				<div
					ref={nodeRef}
					className={cls(
						"fixed top-0 left-0 flex h-full w-full justify-center overflow-y-auto py-5 text-sm",
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
					<div className={cls("relative rounded bg-white", className ? className : "")}>{children}</div>
				</div>
			</CSSTransition>
		</Portal>
	);
}
