import { configureStore } from "@reduxjs/toolkit";
import listSlice from "./listSlice";
import { setStorage } from "utils/localStorage";

export const store =
	configureStore({
		reducer: {
			listSlice
		},
		devTools: true,
	});

	// every update to that reducer save data in local storage
	store.subscribe(() => {
		setStorage("list", store.getState().listSlice.lists)
	})

// export type AppStore = ReturnType<typeof store.getState>;
export type AppState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;