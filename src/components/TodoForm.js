import React from "react";

class ListForm extends React.Component {
  constructor() {
    super();
    this.state = {
      inputValue: "",
    };
  }
  handleChanges = (e) => {
    this.setState({
      inputValue: e.target.value,
    });
  };

  onSubmit = (e) => {
    e.preventDefault();
    // console.log(this.state.inputValue);
    this.props.itemAdd(this.state.inputValue);
    this.setState({
      inputValue: "",
    });
  };

  render() {
    return (
      <form onSubmit={this.onSubmit}>
        <input
          value={this.state.inputValue}
          type="text"
          name="newItem"
          placeholder="...what else?"
          onChange={this.handleChanges}
        />
        <button>Add Todo</button>
      </form>
    );
  }
}

export default ListForm;
