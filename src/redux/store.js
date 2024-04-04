import { configureStore } from "@reduxjs/toolkit";
import cartSlice from "./cartSlice";
import quantity from "./quantity";
import addItemSlice from "./addItemSlice";

export const store = configureStore({
    reducer: {
        cart: cartSlice,
        quantity: quantity,
        addItem: addItemSlice
    },
})