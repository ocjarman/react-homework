import React from "react";

//the filter component has buttons that change the state 'filter' of the main component in App.js.
export const Filter = ({filter, setFilter}) => {
    
    //to make obvious which is selected
    const currentFilter = {boxShadow: '2px 2px'}
    
    //setFilter function in line 13 of App.js can be used here to change the 'filter' state
    //when a button is pressed, its value is set as the 'filter' through the setFilter func inherited by the main componet in app
    return (
    <div>
    <button style={filter==='all' ? currentFilter : null } value="all" onClick={(event) => setFilter(event.target.value)}>All</button>
    <button style={filter==='active' ? currentFilter : null }value="active" onClick={(event) => setFilter(event.target.value)}>Active</button>
    <button style={filter==='completed' ? currentFilter : null }value="completed" onClick={(event) => setFilter(event.target.value)}>Completed</button>
    </div> 
    )
}

