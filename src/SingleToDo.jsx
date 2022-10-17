import React, { useState } from "react";
//completed task strike
const crossOut = {textDecoration: 'line-through'}


const SingleToDo = ({ toDoName, selectedFilter }) => {

    //second arg is a func that alters useState
    //value prop = will be unchecked(false) by default, but set to true when checked
    const [completed, setCompleted] = useState(false); // -> [thing, setThing]

    //toggling the value of completed thru useState
    const toggleCompleted = () => {
        setCompleted(!completed);
      };

      //if 'active' button is selected, completed items will not show, incomplete ones WILL
      if (selectedFilter === 'active') {
          return completed ? null : (
            <div>
               <input 
               type="checkbox"
               onClick={toggleCompleted}
               value={completed}
               selectedFilter={selectedFilter} >
               </input>
            <p style={completed ? crossOut : null}>{toDoName}</p>
            </div>
          );
    
    //if 'completed' button is selected, completed items WILL render, incomplete ones will return empty string
      } else if (selectedFilter === 'completed') {
        return completed ? (
            <div>
               <input 
               type="checkbox"
               onClick={toggleCompleted}
               value={completed}
               selectedFilter={selectedFilter} 
               checked>
               </input>
            <p style={completed ? crossOut : null}>{toDoName}</p>
            </div>
          ) : null;
      } else {
        //otherwise, return all items. if completed make sure they stay crossed out AND checked
        return completed ? (
            <div>
               <input 
               type="checkbox"
               onClick={toggleCompleted}
               value={completed}
               selectedFilter={selectedFilter} 
               checked>
               </input>
            <p style={completed ? crossOut : null}>{toDoName}</p>
            </div>
          ) : (
            <div>
               <input 
               type="checkbox"
               onClick={toggleCompleted}
               value={completed}
               selectedFilter={selectedFilter} >
               </input>
            <p style={completed ? crossOut : null}>{toDoName}</p>
            </div>
          ) 
      }


};




export default SingleToDo;
