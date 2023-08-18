import { IList, ItaskItem } from "components/tasks/types";
import { generateID } from "./utils";

/**
 * Generate list item.
 * 
 * @class
 */
export class GenerateList implements IList {
	readonly id: string;
	title: string;
	description: string;
	tasks: ItaskItem[];

	constructor(title: string) {
		this.id = generateID("list")
		this.title = title;
		this.description = "";
		this.tasks = []
	}
}

/**
 * Generate task item.
 * 
 * @class
 */
export class GenerateTask implements ItaskItem {
	readonly id: string;
	title: string;
	description: string;
	readonly timestamp: number;
	priority: ItaskItem["priority"];
	done: boolean;

	constructor(title: string, description: string, priority: ItaskItem["priority"]) {
		this.id = generateID("task")
		this.title = title;
		this.description = description;
		this.timestamp = Date.now();
		this.priority = priority;
		this.done = false
	}
}