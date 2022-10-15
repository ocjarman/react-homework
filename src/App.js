import React, { useState } from "react";
import SingleToDo from "./SingleToDo";

const dummyItems = [
  { id: 1, toDoName: "clean house", completed: "false" },
  { id: 2, toDoName: "feed baby", completed: "false" },
  { id: 3, toDoName: "code some react", completed: "false" },
];

//make an array that filters completed items, get the length & return it in the complete button
const done = dummyItems.filter((item) => item.completed === "true");
//make an array that filters incomplete items, get the length & return it in the complete button
const incomplete = dummyItems.filter((item) => item.completed === "false");

function App({ key }) {
  const [items, setItem] = useState(dummyItems); // -> [thing, setThing]
  const [completed, setStatus] = useState(false); // -> [thing, setThing]

  const toggleCompleted = (item) => {
    setStatus((completed) => !completed);
  };

  return (
    <div className="App">
      <h1>To Do List:</h1>
      <div id="container">
        {
          <SingleToDo
            items={items}
            completed={completed}
            onClick={toggleCompleted}
          />
        }
      </div>
      <button>Complete ({done.length})</button>
      <button>Incomplete ({incomplete.length})</button>
      <button>Add new item</button>
    </div>
  );
}

export default App;
