import Link from "next/link";
import { useRouter } from "next/router";
import Icon from "./icon";

export default function Breadcrumbs() {
	const router = useRouter();
	const { pathname } = router;
	const pathList = pathname.split("/").filter(Boolean);
	// console.log(pathList);
	return (
		<div className="flex gap-1">
			<Link href="/" className="px-2">
				<Icon type="home" className="h-5 w-5 text-slate-600" />
			</Link>
			{pathList.map((path, index) => (
				<Link key={index} href={`/${pathList.slice(0, index + 1).join("/")}`}>
					{path} /
				</Link>
			))}
		</div>
	);
}
