import { createSlice } from "@reduxjs/toolkit";

let cart = localStorage.getItem("shop-cart")
  ? JSON.parse(localStorage.getItem("shop-cart"))
  : [];

const cartSlice = createSlice({
  name: "cartSlice",
  initialState: cart,
  reducers: {
    addToCart: (state, action) => {
      let productFound = state.find((el) => el.id == action.payload.id);
      if (productFound) {
        productFound.quantity += 1;
      } else {
        state.push({ ...action.payload, quantity: 1 });
      }
    },
    decreaseCartQuantity: (state, action) => {
      let productFound = state.find((el) => el.id == action.payload.id);
      if (productFound.quantity > 1) productFound.quantity -= 1;
      else return state.filter((el) => el.id !== action.payload.id);
    },
    removeFromCart: (state, action) => {
      return state.filter((el) => el.id !== action.payload.id);
    },
    clearCart: (state, action) => {
      return (state = []);
    },
  },
});

export const { addToCart, decreaseCartQuantity, removeFromCart, clearCart } =
  cartSlice.actions;
export default cartSlice.reducer;
