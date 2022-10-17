import React from "react";

//the filter component has buttons that change the state 'selectedFilter' of the main component in App.js.
const Filter = ({selectedFilter, setFilter}) => {
    
    //to make obvious which is selected
    const currentFilter = {boxShadow: '2px 2px'}
    
    
    //setFilter function in line 13 of App.js can be used here to change the 'filter' state
    //when a button is pressed, its value is set as the 'selectedFilter' through the setFilter func inherited by the main componet in app
    return (
    <div>
    <button style={selectedFilter==='all' ? currentFilter : null } value="all" onClick={(event) => setFilter(event.target.value)}>All</button>
    <button style={selectedFilter==='active' ? currentFilter : null }value="active" onClick={(event) => setFilter(event.target.value)}>Active</button>
    <button style={selectedFilter==='completed' ? currentFilter : null }value="completed" onClick={(event) => setFilter(event.target.value)}>Completed</button>
    </div> 
    )
}

export default Filter;