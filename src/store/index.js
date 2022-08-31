import { createSlice, configureStore} from "@reduxjs/toolkit";

const counterSlice = createSlice({
  name: "counter",
  initialState: {counter: 0, show: true},
  reducers: {
    increment(state, action) {
      state.counter += action.payload;
    },
    decrement(state, action){
      console.log(action);
      state.counter -= action.payload;
    },
    toggle(state) {
      state.show = !state.show
    }
  }
});


const store = configureStore({
  reducer: counterSlice.reducer
});

export const counterActions = counterSlice.actions;

export default store;
