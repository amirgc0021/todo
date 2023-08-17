import { PayloadAction, createSlice } from "@reduxjs/toolkit";
import { T_todoItem } from "../components/todoItem/types";

type SliceState = {
	todoList: T_todoItem[]
}

const initialState: SliceState = { todoList: [] }

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