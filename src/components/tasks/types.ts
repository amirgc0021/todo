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

type EntityAction = {
	listId: string,
}

export type newTaskAction = EntityAction & {
	taskData: Pick<ItaskItem, "title" | "description" | "priority">,
}

export type editTaskAction = removeTaskAction & {
	taskData: Partial<ItaskItem>
}

export type removeTaskAction = EntityAction & {
	taskId: string
}


export type editListAction = EntityAction & {
	listData: Partial<IList>
}