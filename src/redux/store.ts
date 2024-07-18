import { combineReducers, configureStore } from "@reduxjs/toolkit";
import { counterSlice } from "./slices/counter";
import { usersSlice } from "./slices/users";

export const store = configureStore({
    reducer: combineReducers({
        counter: counterSlice.reducer,
        users: usersSlice.reducer,
    }),
});

store.subscribe(() => {
    console.log(store.getState());
});
export type RootState = ReturnType<typeof store.getState>;
