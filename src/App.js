import React from "react";
// import ReactDOM from "react-dom";
import TodoList from "./components/TodoList";
import ListForm from "./components/TodoForm";

const list = [
  {
    task: "Organize Garage",
    id: 0,
    completed: false,
  },
  {
    task: "Bake Cookies",
    id: 1,
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

  //handle an item add
  itemAdd = (itemName) => {
    const item = {
      task: itemName,
      id: this.state.list.length,
      completed: false,
    };
    const newList = [...this.state.list, item];

    this.setState({
      list: newList,
    });
  };

  handleComplete = (itemId) => {
    this.setState({
      list: this.state.list.map((item) => {
        if (itemId === item.id) {
          return {
            ...item,
            completed: !item.completed,
          };
        }
        return item;
      }),
    });
  };

  handleClear = () => {
    const newList = this.state.list.filter((item) => {
      return !item.completed;
    });

    this.setState({
      list: newList,
    });
  };

  render() {
    return (
      <div>
        <h2>Welcome to your Todo App!</h2>
        <div>
          <TodoList
            list={this.state.list}
            handleComplete={this.handleComplete}
            handleClear={this.handleClear}
          />
        </div>
        <ListForm itemAdd={this.itemAdd} />
      </div>
    );
  }
}

export default App;
