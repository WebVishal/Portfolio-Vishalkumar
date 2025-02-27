
import { createSlice } from "@reduxjs/toolkit";
import { initialState } from "./authInitialState";
import { reducers } from "./authReducer";

const authSlice = createSlice({
    name: 'auth',
    initialState,
    reducers
})

export const authActions = authSlice.actions;
export default authSlice.reducer;
