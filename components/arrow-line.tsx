import Icon from "./icon";

interface ArrowLineProps {
	position?: string;
}

export default function ArrowLine({ position }: ArrowLineProps) {
	if (!position) {
		return <div className="relative my-[5px] h-2 w-full border-t border-b border-black"></div>;
	} else {
		return (
			<div className="relative my-[5px] h-2 w-full border-t border-b border-black">
				<Icon type="arrowLeft" className="absolute -left-1 top-px h-3 w-3" />
				<Icon type="arrowRight" className="absolute -right-1 bottom-px h-3 w-3" />
			</div>
		);
	}
}
