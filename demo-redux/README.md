# Getting Started with React-Redux 🚀

## Guidelines || Basic Instructions.

* Create a store file and use createStore hook in it, this hook takes reducer as parameter. This hook can be imported from *redux* library

* Create a reducer *(Should be pure function)* that accepts initial state and action in its parameter.

* Use <Provider store={"Your Store name here."}> in your main file.

* useSelector hook used to get data from your store that accept a function in it through which you can get state values.

* useDispatch hook to be used to dispatch a message to reducer to update that particular state.

* Actions.js file should be create to reduce to chances of errors in dispatch functions.