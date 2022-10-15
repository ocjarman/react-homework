import React from "react";
import PropTypes from "prop-types"

const SingleToDo = (props) => {
    const toDoStyles = {
        backgroundColor: 'aliceBlue',
        border: '5px solid cornSilk',
        textDecoration: 'none'
    }

    const changeStatus = () => {
        console.log('hello')
        //how to change the status on the item when clicked 
        // if (props.items.id === )
        // let currentProp = props.items
    }

    const ToDo = (props) => {
        return <p>{props.toDoName}</p>
    }

    //when the input checkbox is clicked, the item is crossed out
    const handleClick = (event) => {
        const itemStyle = event.target.parentElement.style
        itemStyle.textDecoration ? itemStyle.removeProperty('text-decoration') : itemStyle.setProperty('text-decoration', 'line-through');
        //how can i also make the specific item's status change in the same on
        changeStatus();
    }

  return (
    <div>
        {props.items.map((item) => {
          return (
           <div style={toDoStyles}>
                <p key={item.id} >
                    <input type="checkbox" onClick={handleClick}></input>
                    {item.toDoName} Status: {item.completed}
                </p>
                {/* <ToDo toDoName="clean car"/> */}
            </div>
          );
        })}
    </div>
  );
};

SingleToDo.propTypes = {
    status: PropTypes.bool,
    setStatus: PropTypes.func
}


export default SingleToDo;
