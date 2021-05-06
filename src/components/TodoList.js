// your components will all go in this `component` directory.
// feel free to change this component.js into TodoList.js

import React from "react";
import Todo from "./Todo";

const TodoList = (props) => {
  const handleComplete = props.handleComplete;
  const handleClick = () => {
    props.handleClear();
  };
  return (
    <div>
      {props.list.map((item) => (
        <Todo handleComplete={handleComplete} item={item} key={item.id} />
      ))}
      <button onClick={handleClick} className="clear-btn">
        Clear Completed
      </button>
    </div>
  );
};

export default TodoList;
