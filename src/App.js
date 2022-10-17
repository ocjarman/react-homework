import React, { useState } from "react";
import { SingleToDo } from "./components/SingleToDo";
import { Filter } from "./components/Filter";
import "./App.css";

const dummyItems = ["drink a lot of coffee", "walk Karat", "feed Dean", "code"];

//this is the parent/main component where states live
function App() {
  const [toDoItems, setToDoItems] = useState(dummyItems);
  const [filter, setFilter] = useState("all"); // //'all' is the default value for selected filter
  const [newTask, setNewTask] = useState("");
  // state is handled in the component and can update it inside component.
  // when you change the state inside your app, itll re-render that section of the app
  // props are handled outside of component, must be updated outside component
  const handleChange = (event) => {
    setNewTask(event.target.value);
  };

  const addTask = () => {
    //make an array composed of everything in original list, plus new added tasks
    const newToDoList = [...toDoItems, newTask];
    //set original list to the new list!
    setToDoItems(newToDoList);
  };

  return (
    <div className="App">
      <h1>To Dos:</h1>
      <div className="container">
        <div id="list">
          <ul>
            <li>
              {toDoItems.map((item) => {
                return (
                  <SingleToDo key={item} toDoName={item} filter={filter} />
                );
              })}
            </li>
          </ul>
        </div>
      </div>
      {/*---------------form just for show --------*/}
      <div className="addTask">
        <input onChange={handleChange} />
        <button onClick={addTask}>Add Task</button>
      </div>
      <br></br>
      <Filter filter={filter} setFilter={setFilter} />
    </div>
  );
}

export default App;
