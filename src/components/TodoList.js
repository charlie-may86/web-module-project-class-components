// your components will all go in this `component` directory.
// feel free to change this component.js into TodoList.js

import { render } from "@testing-library/react";
import React, { Component } from "react";
import Todo from "./Todo";

const TodoList = (props) => {
   const list = props.list
    return (
        <div>
          <Todo list={list}/>
          <div>This says something else: {list[0].task}</div>
        </div>
      );
    
}
   

export default TodoList;
