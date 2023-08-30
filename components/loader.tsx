import React, { PropsWithChildren, useEffect } from "react";
import Portal from "./portal";

interface LoaderProps {
	isLoading: boolean;
}

export default function Loader({ isLoading }: PropsWithChildren<LoaderProps>) {
	useEffect(() => {
		return () => {
			document.body.style.overflow = "auto";
		};
	}, []);

	if (typeof window !== "undefined" && window.document) {
		document.body.style.overflow = "hidden";
	}

	return (
		<Portal wrapperId="loader">
			<div className="fixed inset-0 flex h-screen w-screen items-center justify-center bg-white/90">
				<div className="relative flex items-center">
					<svg
						className="-ml-1 mr-3 h-5 w-5 animate-spin text-slate-800"
						xmlns="http://www.w3.org/2000/svg"
						fill="none"
						viewBox="0 0 24 24"
					>
						<circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
						<path
							className="opacity-75"
							fill="currentColor"
							d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
						></path>
					</svg>
					<span className="font-bold text-slate-600">Loading...</span>
				</div>
			</div>
		</Portal>
	);
}
