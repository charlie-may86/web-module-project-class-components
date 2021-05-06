import React from "react";
import './Todo.css'

const Todo = (props) => {
  const item = props.item;
  const handleClick = () => {
      props.handleComplete(props.item.id)
      console.log(props.item.id)
  }
  return (
    <div onClick = {handleClick} className = {item.completed ? 'complete' : 'notComplete'} >
      <p>{item.task} </p>
    </div>
  );
};

export default Todo;
