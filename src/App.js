import React, { useState } from "react";
import SingleToDo from "./SingleToDo";
import Filter from "./Filter";
import "./App.css";

const dummyItems = ["walk karat", "feed baby", "code"];

//this is the parent/main component where states live
function App() {
  const [toDos] = useState(dummyItems);
  const [selectedFilter, setFilter] = useState("all"); // //'all' is the default value for selected filter

  // state is handled in the component and can update it inside component.
  // when you change the state inside your app, itll re-render that section of the app
  // props are handled outside of component, must be updated outside component

  return (
    <div className="App">
      <h1>To Do List:</h1>
      <div className="container">
        <div id="list">
          {toDos.map((toDoName) => (
            <SingleToDo
              key={toDoName}
              toDoName={toDoName}
              selectedFilter={selectedFilter}
            />
          ))}
        </div>
      </div>
      <input type="text" placeholder="add new todo"></input>{" "}
      <input id="submitBtn" type="submit" value="add"></input>
      <br></br>
      <Filter selectedFilter={selectedFilter} setFilter={setFilter} />
    </div>
  );
}

export default App;
