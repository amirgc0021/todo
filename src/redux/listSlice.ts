import { PayloadAction, createSlice } from "@reduxjs/toolkit";
import type { IList, newTaskAction, editTaskAction, removeTaskAction, editListAction } from "components/tasks/types";
import { GenerateList, GenerateTask } from "utils/generators";
import { getFromStorage } from "utils/localStorage";

// use this for mock data 
// import ListMockData from "data/lists.json";

type SliceState = {
	lists: IList[],
	activeList: number,
}

const initialState: SliceState = {
	lists: getFromStorage<IList[]>("list", []) || [],
	activeList: 0
}

export const listSlice = createSlice({
	name: "listSlice",
	initialState,
	reducers: {
		/**
		 * Update active list so we can access it
		 */
		setActiveListIndex: (state, action: PayloadAction<number>) => {
			const listIndex = action.payload;
			if (listIndex >= state.lists.length) throw new Error("overflow");

			return {
				...state,
				activeList: listIndex
			}
		},
		/**
		 * Create new list
		 */
		createList: (state, action: PayloadAction<string>) => {
			const newList = new GenerateList(action.payload);

			return {
				...state,
				lists: [...state.lists, newList]
			}
		},
		/**
		 * Editing list
		 */
		editList: (state, action: PayloadAction<editListAction>) => {
			const { listId, listData } = action.payload;

			return {
				...state,
				lists: state.lists.map(list => {
					if (list.id === listId) {
						return {
							...list, ...listData
						}
					}
					return list
				})
			}
		},
		/**
		 * Delete List, set active list to 0
		 */
		deleteList: (state, action: PayloadAction<string>) => {
			return {
				...state,
				lists: state.lists.filter(list => list.id !== action.payload),
				activeList: 0
			}
		},
		/**
		 * Add new task.
		 */
		createTask: (state, action: PayloadAction<newTaskAction>) => {
			const { listId, taskData } = action.payload;
			// const { title, description, priority } = action.payload;
			const newTodo = new GenerateTask(taskData.title, taskData.description, taskData.priority);

			return {
				...state,
				lists: state.lists.map(list => {
					if (list.id === listId)
						return { ...list, tasks: [...list.tasks, newTodo] };

					return list
				})
			}
		},
		/**
		 * Remove task
		 */
		removeTask: (state, action: PayloadAction<removeTaskAction>) => {
			const { listId, taskId } = action.payload;

			return {
				...state,
				lists: state.lists.map(list => {
					if (list.id === listId)
						return { ...list, tasks: list.tasks.filter(task => task.id !== taskId) };

					return list
				})
			}
		},
		/**
		 * Edit task (edit any value)
		 */
		editTask: (state, action: PayloadAction<editTaskAction>) => {
			const { listId, taskData, taskId } = action.payload;

			return {
				...state,
				lists: state.lists.map(list => {
					if (list.id === listId)
						return { ...list, tasks: list.tasks.map(task => taskId === task.id ? { ...task, ...taskData } : task) };

					return list;
				})
			}
		},
	}
})

export const { setActiveListIndex, createList, editList, deleteList, createTask, removeTask, editTask } = listSlice.actions;
export default listSlice.reducer;