import {createSlice} from "@reduxjs/toolkit";

const initialMenu = [
  {
    id:"m1",
    title:"test",
    description: "This is a first product - amazing!",
    price: 6
  },
  {
    id:"m2",
    title:"Sushi",
    description: "TMy sushu shushi",
    price: 4.5
  }
]

const menuSlice = createSlice({
  name: "menu",
  initialState: initialMenu,
  reducers: {
    updateItems(state, action){
      state = action.items
    }
  }
});

export default menuSlice;
export const menuActions = menuSlice.actions;