import React, { useState } from "react";

//completed task strike style

const crossOut = {textDecoration: 'line-through'}


export const SingleToDo = ({ toDoName, filter }) => {

//second arg is a func that alters useState
//value prop = will be unchecked(false) by default, but set to true when checked
  
const [completed, setCompleted] = useState(false); // -> [thing, setThing]

//--------------------toggling the value of 'completed' thru useState--------------

    const toggleCompleted = () => {
        setCompleted(!completed);
      };

//--------------------SHOWING ITEMS BASED ON FILTER SELECTED//--------------------

      //if 'active' button is selected, completed items will not show, incomplete ones WILL
      if (filter === 'active') {
          return completed ? null : (
            <div>
               <input 
               type="checkbox"
               onClick={toggleCompleted}
               value={completed}
               filter={filter} >
               </input>
            <p style={completed ? crossOut : null}>{toDoName}</p>
            </div>
          );
    
    //if 'completed' button is selected, completed items WILL render, incomplete ones will return empty string
      } else if (filter === 'completed') {
        return completed ? (
            <div>
               <input 
               type="checkbox"
               onClick={toggleCompleted}
               value={completed}
               filter={filter} 
               checked>
               </input>
            {completed && <p style={crossOut}>{toDoName}</p>}            
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
               filter={filter} 
               checked>
               </input>
            {completed && <p style={crossOut}>{toDoName}</p>}            
            </div>
          ) : (
            <div>
               <input 
               type="checkbox"
               onClick={toggleCompleted}
               value={completed}
               filter={filter} >
               </input>
            <p style={completed ? crossOut : null}>{toDoName}</p>
            </div>
          ) 
      }
};



