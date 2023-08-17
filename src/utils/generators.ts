import { ItaskItem } from "components/tasks/types";
import { generateID } from "./utils";

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
		this.id = generateID()
		this.title = title;
		this.description = description;
		this.timestamp = Date.now();
		this.priority = priority;
		this.done = false
	}
}