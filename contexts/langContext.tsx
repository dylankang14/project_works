import useMutation from "@/libs/client/useMutation";
import { ReactNode, createContext, useContext, useEffect, useReducer, useState } from "react";

interface LangData {
	common: Map<string, string> | undefined;
	alarmcode: Map<string, string> | undefined;
	alarmtype: Map<string, string> | undefined;
	message: Map<string, string> | undefined;
}
export type Groups = "common" | "alarmcode" | "alarmtype" | "message";
type Actions =
	| { type: "update_common"; mapData: Map<string, string> }
	| { type: "update_alarmcode"; mapData: Map<string, string> }
	| { type: "update_alarmtype"; mapData: Map<string, string> }
	| { type: "update_message"; mapData: Map<string, string> };

export const LangDataContext = createContext<LangData>({} as LangData);

const reducer = (state: LangData, action: Actions): LangData => {
	switch (action.type) {
		case "update_common":
			return { ...state, common: action.mapData };
		case "update_alarmcode":
			return { ...state, alarmcode: action.mapData };
		case "update_alarmtype":
			return { ...state, alarmtype: action.mapData };
		case "update_message":
			return { ...state, message: action.mapData };
	}
};

export function LangProvider({ children }: { children: ReactNode }) {
	const [state, dispatch] = useReducer(reducer, {
		common: new Map(),
		alarmcode: new Map(),
		alarmtype: new Map(),
		message: new Map(),
	} as LangData);
	// const [lang, { data, loading, error }] = useMutation("http://192.168.0.166:22080/API/Master/GetProcedureResult");
	// const [lang, setLang] = useState({});
	const lang = "taiwanese";
	const fetchLang = (lang: string, groups: Groups[]) => {
		groups.map((group) => {
			fetch("http://121.139.31.25:23002/API/Master/GetProcedureResult", {
				method: "POST",
				headers: {
					"Content-Type": "application/json",
				},
				body: JSON.stringify({
					procedureName: "proc_multi_language_bygroup",
					param: {
						language: `${lang}`,
						group: `${group}`,
					},
				}),
			})
				.then((response) => response.json())
				.then((data) => {
					const mapData = data.reduce((acc: any, obj: any) => {
						return acc.set(obj.id, obj.context);
					}, new Map());
					dispatch({ type: `update_${group}`, mapData });
				});
		});
	};
	useEffect(() => {
		const groups: Groups[] = ["common", "alarmcode", "alarmtype", "message"];
		fetchLang(lang, groups);
	}, []);

	return <LangDataContext.Provider value={state}>{children}</LangDataContext.Provider>;
}

export const useLangData = () => useContext(LangDataContext);
