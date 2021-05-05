import React, { Component } from "react";

const Todo = (props) => {
  const item = props.item;
  return (
    <div>
      <p>{item.task} </p>
    </div>
  );
};

export default Todo;
