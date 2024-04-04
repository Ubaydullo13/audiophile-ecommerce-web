import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  cartItem: false,
};

export const addItemSlice = createSlice({
    name: "addItem",
    initialState,
    reducers: {
        addToCart: (state, action) => {
            if(action.payload){
                state.cartItem = true;
            }else{
                state.cartItem = false;
            }
        }
    }
})

export const { addToCart } = addItemSlice.actions;

export default addItemSlice.reducer;