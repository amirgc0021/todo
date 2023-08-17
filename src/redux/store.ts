import { configureStore } from "@reduxjs/toolkit";
import listSlice from "./listSlice";

export const store =
	configureStore({
		reducer: {
			listSlice
		},
		devTools: true,
	});

// export type AppStore = ReturnType<typeof store.getState>;
export type AppState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;