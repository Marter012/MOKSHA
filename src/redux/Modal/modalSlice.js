import { createSlice } from "@reduxjs/toolkit";


const INITIAL_STATE = {
    hidden : true,   
}

export const ModalSlice = createSlice({
    name : "modal",
    initialState : INITIAL_STATE,
    reducers : {
        toggleHiddenModal : (state)=> {
            return {
                ...state,
                hidden : !state.hidden
            }
        }
    }
})

export const {toggleHiddenModal} = ModalSlice.actions;

export default ModalSlice.reducer