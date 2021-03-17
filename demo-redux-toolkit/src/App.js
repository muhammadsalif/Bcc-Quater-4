import './App.css';
import { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { increment } from "./redux/counterSlice"
import { decrement } from "./redux/counterSlice"
import { incrementByValue } from "./redux/counterSlice"
import { updateName } from "./redux/counterSlice"

function App() {
  const [value, setValue] = useState();
  const [name, setName] = useState();

  const dispatch = useDispatch();

  const count = useSelector(state => state.counterReducer.counter)

  const storeName = useSelector(state => state.counterReducer.user.name)

  return (
    <>
      counter value {count}

      <br></br>
      <button onClick={() => dispatch(increment())}>+</button>
      <button onClick={() => dispatch(decrement())}>-</button>
      <br></br>


      <label>Increment by value</label>
      <input type="number" value={value} onChange={(e) => setValue(Number(e.target.value))} />
      <button onClick={(e) => dispatch(incrementByValue(value))} >Increment by value</button>

      <br></br>
      <br></br>

      Name   {storeName}

      <br></br>
      <br></br>


      <label>Update Name</label>
      <input type="text" value={name} onChange={(e) => setName(e.target.value)} />
      <button onClick={(e) => dispatch(updateName(name))} >Update Name</button>

      <br></br>



    </>
  );
}

export default App;
