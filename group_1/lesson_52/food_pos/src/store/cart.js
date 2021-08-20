import { createSlice } from "@reduxjs/toolkit";

export const cartSlice = createSlice({
  name: "cart",
  initialState: {
    products: {},
  },
  reducers: {
    addToCart: (state, { payload: [product, count] }) => {
      if (state.products[product.id]) {
        if (!count) count = undefined;

        if (count) {
          state.products[product.id].count = count;
        } else {
          state.products[product.id].count++;
        }
      } else {
        state.products[product.id] = {
          count: 1,
          product: product,
        };
      }
    },
    removeFromCart: (state, { payload: product }) => {
      if (state.products[product.id]) {
        if (state.products[product.id].count > 1) {
          state.products[product.id].count--;
        } else {
          delete state.products[product.id];
        }
      }
    },
  },
});

export const { addToCart, removeFromCart } = cartSlice.actions;

export default cartSlice.reducer;
