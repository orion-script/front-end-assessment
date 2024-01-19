// redux/slices/cartSlice.ts
"use client";
import { createSlice, PayloadAction } from "@reduxjs/toolkit";

// Create Initial State
type CartItem = {
  id: number;
  title: string;
  price: number;
  qty: number;
  image: string;
};

const initialState: CartItem[] = [];

// Create the slice with Reducers
const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    addToCart: (state, action: PayloadAction<CartItem>) => {
      const { id, title, price, image } = action.payload;
      const existingItem = state.find((item) => item.id === id);

      if (existingItem) {
        existingItem.qty += 1;
      } else {
        state.push({ id, title, price, qty: 1, image });
      }
    },
    removeFromCart: (state, action: PayloadAction<any>) => {
      const cartId = action.payload;
      return state.filter((item) => item.id !== cartId);
    },
    incrementQty: (state, action: PayloadAction<number>) => {
      const cartId = action.payload;
      const cartItem = state.find((item) => item.id === cartId);
      if (cartItem) {
        cartItem.qty += 1;
      }
    },
    decrementQty: (state, action: PayloadAction<number>) => {
      const cartId = action.payload;
      const cartItem = state.find((item) => item.id === cartId);
      if (cartItem && cartItem.qty > 1) {
        cartItem.qty -= 1;
      }
    },
  },
});

// Export the reducers(actions)
export const { addToCart, removeFromCart, incrementQty, decrementQty } =
  cartSlice.actions;
export default cartSlice.reducer;
