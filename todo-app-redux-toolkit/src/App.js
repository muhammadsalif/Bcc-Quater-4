import logo from './logo.svg';
import './App.css';
import { useDispatch, useSelector } from 'react-redux';
import { remove, add } from "./store/todoSlice"
import { useRef, useState } from 'react';
function App() {
  const list = useSelector((state) => state.list)
  console.log("list", list)

  const dispatch = useDispatch()

  let item = useRef("")

  return (
    <div style={{ width: "50%", margin: "0 auto", display: "flex", alignItems: "center", flexDirection: "column", border: "2px solid khaki", minHeight: "90vh" }}>
      <h2>Lists Items</h2>
      <ul>
        {list.map((eachItem, index) => {
          return (
            <div style={{ display: "flex", justifyContent: "space-between", border: "1px dotted grey", margin: "1rem", padding: "1rem" }} key={index}>
              <li>
                {eachItem}
                <div>
                  <button onClick={() => dispatch(remove(index))}>Delete</button>
                  <button>Update</button>
                </div>
              </li>
            </div>
          )
        })}
      </ul>
      <span style={{ backgroundColor: "brown",width:"50rem",height:"0.2rem" }}></span>
      <h2>Add items in list</h2>
      <form onSubmit={(e) => {
        e.preventDefault()
        dispatch(add(item.current.value))
        item.current.value = ""
      }}>
        <input required ref={item}></input>
        <button>Add Item</button>
      </form>
    </div>
  );
}

export default App;
