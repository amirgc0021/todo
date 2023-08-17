export type T_todoItem = {
	id: string,
	title: string,
	description: string,
	priority: "low" | "medium" | "high",
	timesstamp: number,
	done: boolean
}