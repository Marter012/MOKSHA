import { createSlice } from "@reduxjs/toolkit";

const INITIAL_STATE = {
    msg : null
}

export const errorsSlice = createSlice({
    name : "errors",
    initialState : INITIAL_STATE,
    reducers : {
        getErrors : state=> {
            return state;
        }
    }
})

export const {getErrors} = errorsSlice.actions;

export default errorsSlice.reducer;