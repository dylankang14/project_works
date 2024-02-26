// import html2canvas from "node_modules/html2canvas";

import { error } from "console";

export function cls(...classnames: string[]) {
	return classnames.join(" ");
}

interface FilterValueType {
	list: { id?: number; [key: string]: any }[];
	value: number[];
	uniqueId?: "id" | string;
	isText?: boolean;
}
export function filterValue({ list, value, uniqueId = "id", isText = false }: FilterValueType) {
	if (list.length === value.length) {
		return "모두";
	} else if (value.length === 0) {
		return "없음";
	} else if (isText) {
		return list.filter((item) => value.includes(item[uniqueId])).map((item) => item.name);
	} else {
		return list.filter((item) => value.includes(item[uniqueId])).length;
	}
}

export function paginate<T>(items: T[], pageNumber: number, pageSize: number) {
	const startIndex = (pageNumber - 1) * pageSize;
	return items.slice(startIndex, startIndex + pageSize);
}

export function getType(target: any) {
	return Object.prototype.toString.call(target).slice(8, -1);
}

export function calculateDecimal(num: number) {
	return num.toFixed(3);
}

export function getFormatDate(date: Date) {
	const year = date.getFullYear();
	const month = 1 + date.getMonth() >= 10 ? 1 + date.getMonth() : "0" + (1 + date.getMonth());
	const day = 1 + date.getDate() >= 10 ? 1 + date.getDate() : "0" + (1 + date.getDate());
	console.log(year, month, day);
	return year.toString() + month + day;
}

interface OpenReportPDFParamType {
	apiUrl: string;
	filename: string;
}
export async function openReportPDF({ apiUrl, filename }: OpenReportPDFParamType) {
	try {
		const res = await fetch(apiUrl);

		const blob = await res.blob();
		const url = window.URL.createObjectURL(blob);
		const link = document.createElement("a");
		// link.href = url;
		// link.download = filename;
		// link.click();
		window.open(url, "_blank");
	} catch (error) {
		console.error("Error downloading file:", error);
	}
}

// export async function pageToImg(fn: any) {
// 	const page = document.getElementById("print");
// 	const html2canvas = (await import("node_modules/html2canvas")).default;
// 	const canvas = await html2canvas(page!, { scale: 3 });
// 	const imgSrc = canvas.toDataURL("image/jpeg", 0.98);
// 	await fn(imgSrc);
// }

// export async function saveAsPdf(elementId: string, fileName: string) {
// 	const html2pdf = (await import("html2pdf.js" as any)).default;
// 	const element = document.getElementById(elementId);
// 	const opt = {
// 		margin: [10, 10],
// 		filename: fileName,
// 		image: { type: "jpeg", quality: 0.98 },
// 		html2canvas: { scale: 3, scrollY: 0, letterRendering: true },
// 		jsPDF: { orientation: "portrait", unit: "mm", format: "a4" },
// 		pagebreak: { mode: ["css", "legacy"], avoid: "img" },
// 	};
// 	try {
// 		await html2pdf().set(opt).from(element).save();
// 	} catch (error) {
// 		console.error(error);
// 	}
// }

export const fetcher = async (url: string) => {
	const response = await fetch(url);
	if (!response.ok) {
		throw new Error("Error fetching data");
	}
	return response.json();
};
