export interface ItaskItem {
	id: string,
	title: string,
	description: string,
	priority: "low" | "medium" | "high",
	timestamp: number,
	done: boolean
}

export type newItemAction = Pick<ItaskItem, "title" | "description" | "priority">