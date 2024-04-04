import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  cart: [],
};

const cartSlice = createSlice({
  name: 'cart',
  initialState,
  reducers: {
    addToCart(state, action) {
      state.cart.push(action.payload);
    },
    deleteFromCart(state, action) {
      state.cart = state.cart.filter((item) => item.id !== action.payload);
    },
    removeAll(state) {
      state.cart = [];
    },
  },
});

export const { addToCart, deleteFromCart, removeAll } = cartSlice.actions;
export default cartSlice.reducer;
