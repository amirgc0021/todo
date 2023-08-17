import { PayloadAction, createSlice } from "@reduxjs/toolkit";
import type { ItaskItem, newItemAction } from "components/tasks/types";
import ListMockData from "data/mockItems.json";
import { GenerateTask } from "utils/generators";

type SliceState = {
	todoList: ItaskItem[],
}

const initialState: SliceState = { todoList: ListMockData as ItaskItem[] }

export const listSlice = createSlice({
	name: "listSlice",
	initialState,
	reducers: {
		/**
		 * Add new task.
		 */
		addTask: (state, action: PayloadAction<newItemAction>) => {
			const {title, description, priority} = action.payload;
			const newTodo = new GenerateTask(title, description, priority );

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
					if(editedTask.id === task.id){
						return editedTask
					}

					return task
				})
			}
		}, 
	}
})

export const { addTask, removeTask, editTask } = listSlice.actions;
export default listSlice.reducer;