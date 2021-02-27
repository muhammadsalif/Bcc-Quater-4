# Getting Started with React-Redux 🚀

## Guidelines || Basic Instructions.

* Create a store file and use `createStore()` hook in it, this hook takes reducer as parameter. This hook can be imported from *redux* library
* `createStore()` can also takes multiple reducers as an argument with `combineReducer()` function *Eg:* `createStore(combineReducer({"Your all reducers here as an object with key value pairs"}))`

* Create a reducer *(Should be pure function)* that accepts initial state and action in its parameter.

* Use `<Provider store={"Your Store name here."}>` in your main file & wrap all your components inside it that wants data from store.

* `useSelector((state)=>state.*"Your property to be select"*)` hook used to get data from your store that accept a function in it through which you can get or select store values or data.

* `useDispatch({type:"CASE OF YOUR REDUCER", PAYLOAD:"YOUR DATA"})` hook to be used to dispatch a message to reducer to update that particular state. Additionaly you can also dispatch `payload:"Your data"` to reducer to set that data to particular case in the store.

* Actions.js file should be create to reduce to chances of errors in dispatch functions, That have all your cases that will be passed to reducer as a functions.
