import Link from "next/link";
import Icon from "./icon";

export default function Breadcrumbs() {
	return (
		<>
			<Link href="/" className="px-2">
				<Icon type="home" className="h-5 w-5 text-slate-600" />
			</Link>
		</>
	);
}
