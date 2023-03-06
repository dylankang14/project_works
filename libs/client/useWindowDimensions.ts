import { useEffect, useState } from "react";
interface WindowDimensionsType {
	width: number | null;
	height: number | null;
}

function getWindowDimensions() {
	const { innerWidth: width, innerHeight: height } = window;
	return { width, height };
}

export default function useWindowDimensions() {
	const [windowDimensions, setWindowDimensions] = useState<WindowDimensionsType>({ width: null, height: null });

	useEffect(() => {
		function handleResize() {
			setWindowDimensions(getWindowDimensions());
		}
		window.addEventListener("resize", handleResize);
		handleResize();
		return () => {
			window.removeEventListener("resize", handleResize);
		};
	}, []);

	return windowDimensions;
}
