import { configureStore, ThunkAction, Action, Middleware } from "@reduxjs/toolkit";
import homePageReducer from "./containers/HomePage/slice";
import reduxLogger from "redux-logger";

const loggerMiddleware: Middleware = (store) => (next) => (action) => {
  // Add any custom logic here
  const result = next(action);
  reduxLogger(store)(action); // Call redux-logger
  return result;
};

export const store = configureStore({
  middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(loggerMiddleware),
  reducer: {
    homePage: homePageReducer,
  },
});

export type AppDispatch = typeof store.dispatch;
export type RootState = ReturnType<typeof store.getState>;
export type AppThunk<ReturnType = void> = ThunkAction<
  ReturnType,
  RootState,
  unknown,
  Action<string>
>;