import { createSlice } from "@reduxjs/toolkit";
import { addItemToCart, removeItemFromCart } from "./cartUtils";


const INITIAL_STATE = {
    hidden : true,
    cartItems : [],    
}

export const cartSlice = createSlice({
    name : "cart",
    initialState : INITIAL_STATE,
    reducers : {
        addToCart : (state, action) => {
            return {
                ...state,
                cartItems : addItemToCart(state.cartItems,action.payload)
            }
        },
        removeFromCart : (state, action) => {
            return {
                ...state,
                cartItems : removeItemFromCart(state.cartItems,action.payload),
            }
        },
        clearCart  : (state) => {
            return {
                ...state,
                cartItems : []
            }
        },
        toggleHiddenCart : (state)=> {
            return {
                ...state,
                hidden : !state.hidden
            }
        }
    }
})

export const {addToCart,removeFromCart,clearCart,toggleHiddenCart} = cartSlice.actions;

export default cartSlice.reducer