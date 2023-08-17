import { PayloadAction, createSlice } from "@reduxjs/toolkit";
import { T_todoItem } from "../components/todoItem/types";
import ListMockData from "data/mockItems.json";

type SliceState = {
	todoList: T_todoItem[],
	test: "amir"
}

const initialState: SliceState = { todoList: ListMockData as T_todoItem[], test: "amir" }

export const listSlice = createSlice({
	name: "listSlice",
	initialState,
	reducers: {
		addItem: (state, action: PayloadAction<string>) => {
		},
		removeItem: (state) => {
		
		}
	}
})

export const { addItem, removeItem } = listSlice.actions;
export default listSlice.reducer;