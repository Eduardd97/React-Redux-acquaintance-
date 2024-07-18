import { createSlice } from "@reduxjs/toolkit";
export type UserType = {
    name: string, age: number
}
export const usersSlice = createSlice({
    name: "users",
    initialState: [],
    reducers: {
        create: (state: UserType[], action) => {
            state = [...state, action.payload]
        }
    }
})

export const {create} = usersSlice.actions