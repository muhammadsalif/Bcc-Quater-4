const INCREMENT = "INCREMENT"
const DECREMENT = "DECREMENT"
const INCREMENT_BY_VALUE = "INCREMENT_BY_VALUE"

export const increment = () => {
    return { type: INCREMENT }
}

export const decrement = () => {
    return { type: DECREMENT }
}

export const incrementByValue = (value) => {
    return { type: INCREMENT_BY_VALUE, payload: { value } }
}