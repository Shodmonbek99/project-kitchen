// CartSlice.js

import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  cartItems: [],
  cartTotal: 0,
  numItemsInCart: 0,
};

const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    updateCartTotal(state, action) {
      state.cartTotal = action.payload;
    },
    // other reducers...
  },
});

export const { updateCartTotal } = cartSlice.actions;
export default cartSlice.reducer;
