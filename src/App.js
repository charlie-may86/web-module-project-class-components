import React from "react";
import ReactDOM from 'react-dom'
import TodoList from "./components/TodoList";

const list = [
  {
    task: "Organize Garage",
    id: Date.now(),
    completed: false,
  },
  {
    task: "Bake Cookies",
    id: Date.now(),
    completed: false,
  },
];

class App extends React.Component {
  // you will need a place to store your state in this component.
  // design `App` to be the parent component of your application.
  // this component is going to take care of state, and any change handlers you need to work with your state
  constructor() {
    super();
    this.state = {
      list: list,
    };
  }

  render() {
    return (
      <div>
        <h2>Welcome to your Todo App!</h2>
        <TodoList list={this.state.list} />
      </div>
    );
  }
}

export default App;
