import { useState } from "react";
interface UseMutationState<T> {
	loading: boolean;
	data?: T;
	error?: object;
}
type UseMutationResult<T> = [(data: any) => void, UseMutationState<T>];
export default function useMutation<T = any>(url: string): UseMutationResult<T> {
	const [state, setState] = useState({
		loading: false,
		data: undefined,
		error: undefined,
	});
	function mutation(data: any) {
		setState((prev) => ({ ...prev, loading: true }));
		console.log("mutation : ", JSON.stringify(data));

		fetch(url, {
			method: "POST",
			headers: {
				"Content-Type": "application/json",
			},
			body: JSON.stringify(data),
		})
			.then((response) => response.json())
			.then((data) => setState((prev) => ({ ...prev, data, loading: false })))
			.catch((error) => setState((prev) => ({ ...prev, error, loading: false })));
	}
	return [mutation, { ...state }];
}
