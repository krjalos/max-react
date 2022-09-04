import {createSlice} from "@reduxjs/toolkit";

const cartSlice = createSlice({
  name: "cart",
  initialState: {
    totalItems: 0,
    items: [],
    showCart: false,
    notification: null
  },
  reducers: {
    addItem(state, action){
      const existingIndex = state.items.findIndex(item => item.id === action.payload.id);
      if(existingIndex > -1) {
        state.items[existingIndex].amount += action.payload.amount
      }else {
        state.items.push({
          id:action.payload.id,
          title:action.payload.title,
          price:action.payload.price,
          amount: action.payload.amount
        });
      }

      state.totalItems += action.payload.amount;
    },
    removeItem(state, action) {
      const existingIndex = state.items.findIndex(item => item.id === action.payload.id);

      if(existingIndex > -1) {
        if(state.items[existingIndex].amount <= action.payload.amount) {
          state.totalItems -= state.items[existingIndex].amount;
          state.items.splice(existingIndex, 1);
        }else {
          state.totalItems -= action.payload.amount;
          state.items[existingIndex].amount -= action.payload.amount
        }
      }
    },
    toggleCart(state) {
      state.showCart = !state.showCart;
    },
    replaceCart(state, action) {
      state.items = action.payload;
      state.totalItems = action.payload.reduce((total, item) => item.amount + total, 0);
    },
    setNotification(state, action) {
      if(action.payload.status === "null"){
        state.payload.notification = null;
      }else {
        state.notification = {
          status: action.payload.status,
          title: action.payload.title,
          message: action.payload.message
        };
      }

    }
  }
});

export const cartActions = cartSlice.actions;

export default cartSlice;