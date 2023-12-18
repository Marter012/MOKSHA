import { createSlice } from "@reduxjs/toolkit";

const INITIAL_STATE = {
    hidden : false, 
}

export const burgerMenuSlice = createSlice({
    name : "cart",
    initialState : INITIAL_STATE,
    reducers : {
        toggleHiddenMenu : (state)=> {
            return {
                ...state,
                hidden : !state.hidden
            }
        }
    }
})

export const {toggleHiddenMenu} = burgerMenuSlice.actions;

export default burgerMenuSlice.reducer