export type T_todoItem = {
	id: string,
	title: string,
	description: string,
	priority: "low" | "medium" | "high",
	timestamp: number,
	done: boolean
}