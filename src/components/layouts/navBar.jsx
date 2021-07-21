import React, { Component } from "react";

class NavBar extends Component {
  render() {
    return (
      <div className="bg-danger">
        <h1 className="p-2">
          <i className="fab fa-github" />
          {this.props.title}
        </h1>
      </div>
    );
  }
}

export default NavBar;
