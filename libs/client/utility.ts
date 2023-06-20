export function cls(...classnames: string[]) {
	return classnames.join(" ");
}

export function filterValue(list: { id: number; [key: string]: any }[], value: number[], isText = false) {
	if (list.length === value.length) {
		return "모두";
	} else if (value.length === 0) {
		return "없음";
	} else if (isText) {
		return list.filter((item) => value.includes(item.id)).map((item) => item.name);
	} else {
		return list.filter((item) => value.includes(item.id)).length;
	}
}

export function paginate<T>(items: T[], pageNumber: number, pageSize: number) {
	const startIndex = (pageNumber - 1) * pageSize;
	return items.slice(startIndex, startIndex + pageSize);
}

export function getType(target: any) {
	return Object.prototype.toString.call(target).slice(8, -1);
}
