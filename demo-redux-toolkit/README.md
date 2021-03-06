# Getting Started with Redux-toolkit 🚀

## Guidelines || Basic Instructions.

* Create a store.js file and use `configureStore({ reducers:{"All your reducers as key value pairs"} })` hook in it, this hook takes multiple reducers as an object in parameter. This hook can be imported from *@reduxjs/toolkit* library

* Create reducers & actions with `createSlice({})` hook  that accepts `name:"Your slice name"`, `initialState:{}`, `reducers: { All your actions with keys having function as values}`

* All actions and reducers must be exported from slice file. 

* Use `<Provider store={"Your Store name here."}>` in your main file & wrap all your components inside it that wants data from store.

* `useSelector((state)=>state.*"Your property to be select"*)` hook used to get data from your store that accept a function in it through which you can get or select store values or data.

* `useDispatch("your action with having data in its parameter")` hook to be used to dispatch a message to reducer to update that particular state.

[Link to official redux getting started](https://redux-toolkit.js.org/introduction/getting-started)
