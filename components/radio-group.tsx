import { Fragment, ReactNode } from "react";
import Radio from "./radio";
interface ItemsType {
	text: ReactNode;
	value: string;
}
interface RadioGroupProps {
	items: ItemsType[];
	defaultChecked: string;
	onChangeRadio: (val: string) => void;
}
export default function RadioGroup({ items, defaultChecked, onChangeRadio }: RadioGroupProps) {
	return (
		<div className="flex overflow-hidden rounded">
			{items.map((item) => (
				<Radio
					key={item.value}
					value={item.value}
					defaultChecked={defaultChecked}
					onChangeRadio={(val) => onChangeRadio(val)}
				>
					{item.text}
				</Radio>
			))}
		</div>
	);
}
