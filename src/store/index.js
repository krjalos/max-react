import { configureStore } from "@reduxjs/toolkit";
import cartSlice from "./cart";
import menuSlice from "./menu";

const store = configureStore({
  reducer: {
    cart: cartSlice.reducer,
    menu: menuSlice.reducer
  }
});

export default store;