import { PropsWithChildren, useLayoutEffect, useState } from "react";
import { createPortal } from "react-dom";

interface PortalProps {
	wrapperId?: string;
}
function createWrapperAndAppendToBody(wrapperId: string) {
	const wrapperElement = document.createElement("div");
	wrapperElement.setAttribute("id", wrapperId);
	document.body.appendChild(wrapperElement);
	return wrapperElement;
}

export default function Portal({ children, wrapperId = "portalWrapper" }: PropsWithChildren<PortalProps>) {
	const [wrapperElement, setWrapperElement] = useState<HTMLElement | null>(null);

	useLayoutEffect(() => {
		let element = document.getElementById(wrapperId);
		let systemCreated = false;
		if (!element) {
			systemCreated = true;
			element = createWrapperAndAppendToBody(wrapperId);
		}
		setWrapperElement(element);

		return () => {
			if (systemCreated && element?.parentNode) {
				element.parentNode.removeChild(element);
			}
		};
	}, [wrapperId]);
	if (wrapperElement === null) return null;
	return createPortal(children, wrapperElement);
}
