interface CardProps {
	children: React.ReactNode;
	title?: string;
}

export default function Card({ children, title }: CardProps) {
	return (
		<div className="my-2 rounded border bg-white shadow-sm">
			{title ? <div className="border-b px-3 py-2 font-[500]">{title}</div> : null}
			{children}
		</div>
	);
}
