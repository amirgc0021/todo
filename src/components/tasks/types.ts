export interface IList {
	id: string,
	title: string,
	description: string
	tasks: ItaskItem[]
}

export interface ItaskItem {
	id: string,
	title: string,
	description: string,
	priority: "low" | "medium" | "high",
	timestamp: number,
	done: boolean
}

export type newTaskAction = {
	listId: string,
	taskData: Pick<ItaskItem, "title" | "description" | "priority">,
}

export type removeTaskAction = {
	listId: string,
	taskId: string
}

export type editTaskAction = removeTaskAction & {
	taskData: {[key:string]: any}
}