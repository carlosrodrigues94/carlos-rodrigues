import { configureStore } from "@reduxjs/toolkit";
import { portfolio } from "./modules/data/reducer";

export const store = configureStore({
  reducer: {
    portfolio,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
