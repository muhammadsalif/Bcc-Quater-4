import { createSlice } from "@reduxjs/toolkit";
const todoSlice = createSlice({
  name: "Todo list slice",
  initialState: {
    list: []
  },
  reducers: {
    add: (state, action) => {
      state.list.push(action.payload)
    },
    remove: (state, action) => {
      // console.log("dfsadfasdfsa",action.payload)
      state.list = state.list.filter((eachItem, ind) => ind !== action.payload);
    },
    update: (state, action) => {
      // state.list = state.list.filter((eachItem, ind) => ind !== action.payload);

    },
  }
})

export const { add, remove, update } = todoSlice.actions

export default todoSlice.reducer
