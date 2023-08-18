import { PayloadAction, createSlice } from "@reduxjs/toolkit";
import type { IList, ItaskItem, newItemAction } from "components/tasks/types";
import Tasks from "data/mockItems.json";
import ListMockData from "data/lists.json";
import { GenerateList, GenerateTask } from "utils/generators";

type SliceState = {
	lists: IList[],
	activeList: IList,
	todoList: ItaskItem[],
}

const initialState: SliceState = {
	todoList: Tasks as ItaskItem[],
	lists: ListMockData as IList[],
	activeList: ListMockData[0] as IList
}

export const listSlice = createSlice({
	name: "listSlice",
	initialState,
	reducers: {
		setActiveList: (state, action: PayloadAction<number>) => {
			const listIndex = action.payload;
			if(listIndex >= state.lists.length) throw new Error("overflow");
			
			return {
				...state,
				activeList: state.lists[action.payload]
			}
		},
		createList: (state, action: PayloadAction<string>) => {
			const newList = new GenerateList(action.payload);

			return {
				...state,
				lists: [...state.lists, newList]
			}
		},
		/**
		 * Add new task.
		 */
		createTask: (state, action: PayloadAction<newItemAction>) => {
			const { title, description, priority } = action.payload;
			const newTodo = new GenerateTask(title, description, priority);

			return {
				...state,
				todoList: [
					...state.todoList,
					newTodo
				]
			}
		},
		/**
		 * Remove task
		 */
		removeTask: (state, action: PayloadAction<string>) => {
			return {
				...state,
				todoList: state.todoList.filter(task => task.id !== action.payload)
			}
		},
		/**
		 * Edit task (edit any value)
		 */
		editTask: (state, action: PayloadAction<ItaskItem>) => {
			const editedTask = action.payload;

			return {
				...state,
				todoList: state.todoList.map(task => {
					if (editedTask.id === task.id) {
						return editedTask
					}

					return task
				})
			}
		},
	}
})

export const { setActiveList, createList, createTask, removeTask, editTask } = listSlice.actions;
export default listSlice.reducer;