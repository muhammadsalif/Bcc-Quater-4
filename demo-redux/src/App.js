import './App.css';
import { useDispatch, useSelector } from 'react-redux';
import { useState } from 'react';
import { increment, decrement, incrementByValue } from './components/Actions';

function App() {
  const counterValue = useSelector((initialState) => initialState.counter)
  const dispatch = useDispatch();
  const [value, setValue] = useState(null)
  return (
    <>
      <h2>
        counter value {counterValue}
      </h2>
      <button onClick={() => dispatch(increment())}>
        +
      </button>
      <button onClick={() => dispatch(decrement())}>
        -
      </button>
      <br></br>
      <input value={value} type="number" onChange={(e) => setValue(Number(e.target.value))}>
      </input>
      <button onClick={() => {
        dispatch(incrementByValue(value))
      }
      }>
        Increment by value
      </button>
    </>
  );
}

export default App;
