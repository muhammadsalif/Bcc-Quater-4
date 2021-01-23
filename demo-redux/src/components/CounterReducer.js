const initialState = {
    counter: 0,
    user: {
        name: "abc",
        age: 20
    }
}

export const counterReducer = (state = initialState, action) => {

    switch (action.type) {

        case "INCREMENT": {
            return {
                ...state, counter: state.counter + 1
            }
        }
        case "DECREMENT": {
            return {
                ...state, counter: state.counter - 1
            }
        }
        case "INCREMENT_BY_VALUE": {
            return {
                ...state, counter: state.counter + action.payload.value
            }
        }
        default: {
            return state
        }
    }
}