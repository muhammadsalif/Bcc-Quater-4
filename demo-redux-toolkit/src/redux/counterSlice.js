import { createSlice } from "@reduxjs/toolkit";

export const counterSlice = createSlice({
    name: "Counter Slice",
    initialState: {
        counter: 0,
        user: {
            name: "Salif",
            roll: 2
        }
    },
    reducers: {
        // NOT workiing
        // increment: (state) =>  state.counter += 1,

        increment: (state) => { state.counter += 1 },

        // NOT workiing
        // decrement: state => { state.counter - 1 },

        decrement: state => { state.counter -= 1 },

        incrementByValue: (state, action) => { state.counter += action.payload },

        updateName: (state, action) => { state.user.name = action.payload }
    }
})

export const { increment, decrement, incrementByValue, updateName } = counterSlice.actions
export const counterReducer = counterSlice.reducer