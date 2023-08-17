import { ItaskItem } from "components/tasks/types";
import { generateID } from "./utils";

export class GenerateTask implements ItaskItem {
	id: string;
	title: string;
	description: string;
	timestamp: number;
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