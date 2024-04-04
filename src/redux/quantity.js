import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    value: 1,
}

export const quantitySlice = createSlice({
    name: "quantity",
    initialState,
    reducers: {
        increment: (state, action) => {
            state.value += action.payload || 1;
        },
        decrement: (state) => {
            state.value = Math.max(state.value - 1, 1);
        },
    },
});

export const { increment, decrement } = quantitySlice.actions;

export default quantitySlice.reducer;