import { createSlice } from "@reduxjs/toolkit";

export const counterSlice = createSlice({
    name: "counter",
    initialState: {
        value: 0,
    },
    reducers: {
        incremented: (state) => {
            state.value += 1;
        },
        decremented: (state) => {
            state.value -= 1;
        },
        set: (state, action) => {
            state.value = action.payload
        }
    },
});

export const { decremented, incremented, set } = counterSlice.actions;
