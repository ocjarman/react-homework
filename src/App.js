import React, { useState } from "react";
import { SingleToDo } from "./components/SingleToDo";
import { Filter } from "./components/Filter";
import "./App.css";

const dummyItems = ["drink a lot of coffee", "walk Karat", "feed Dean", "code"];

//this is the parent/main component where states live
function App() {
  const [toDoItems] = useState(dummyItems);
  const [filter, setFilter] = useState("all"); // //'all' is the default value for selected filter

  // state is handled in the component and can update it inside component.
  // when you change the state inside your app, itll re-render that section of the app
  // props are handled outside of component, must be updated outside component

  return (
    <div className="App">
      <h1>To Dos:</h1>
      <div className="container">
        <div id="list">
          {toDoItems.map((item) => {
            return <SingleToDo key={item} toDoName={item} filter={filter} />;
          })}
        </div>
      </div>
      {/*---------------form just for show --------*/}
      <input type="text" placeholder="add new todo" />
      <input id="submitBtn" type="submit" value="add" />
      <br></br>
      <Filter filter={filter} setFilter={setFilter} />
    </div>
  );
}

export default App;
