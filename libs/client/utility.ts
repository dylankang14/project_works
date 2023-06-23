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

export async function saveAsPdf(elementId: string, fileName: string) {
	const html2pdf = (await import("html2pdf.js" as any)).default;
	const element = document.getElementById(elementId);
	const opt = {
		margin: [10, 10],
		filename: fileName,
		image: { type: "jpeg", quality: 0.98 },
		html2canvas: { scale: 3, scrollY: 0, letterRendering: true },
		jsPDF: { orientation: "portrait", unit: "mm", format: "a4" },
		pagebreak: { mode: ["css", "legacy"], avoid: "img" },
	};
	try {
		await html2pdf().set(opt).from(element).save();
	} catch (error) {
		console.error(error);
	}
}
