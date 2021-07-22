import React, { Component } from "react";

class Search extends Component {
  constructor(props) {
    super(props);
    this.state = { text: "" };
  }

  onChange = (e) => this.setState({ [e.target.name]: e.target.value });
  onSubmit = (e) => {
    e.preventDefault();
    if (this.state.text === "") {
      //   return alert("please enter some");
      this.props.setAlert("please enter something", "bg-light");
    } else {
      this.props.searchUsers(this.state.text);
      this.setState({ text: "" });
    }
  };
  render() {
    const { showClear, clearUesrs } = this.props;
    return (
      <div>
        <form className="form" onSubmit={this.onSubmit}>
          <input
            className="form-control"
            type="text"
            name="text"
            placeholder="Search Users..."
            value={this.state.text}
            onChange={this.onChange}
          />
          <input type="submit" value="search" className="btn btn-dark  w-100" />
        </form>
        {showClear && (
          <button className="btn btn-light w-100" onClick={clearUesrs}>
            clear
          </button>
        )}
      </div>
    );
  }
}

export default Search;
