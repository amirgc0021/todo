import type { T_todoItem } from "./types"

type Props = {
	item: T_todoItem
}

export default function ToDoItem({item}: Props) {
	return (
		<div>ToDoItem</div>
	)
}