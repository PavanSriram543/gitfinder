import axios from "axios";
import React, { Component } from "react";
import "./App.css";
import NavBar from "./components/layouts/navBar";
import Search from "./components/users/Search";
import Users from "./components/users/Users";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = { users: [], loading: false };
  }
  // async componentDidMount() {
  //   this.setState({ loading: true });
  //   const res = await axios.get("https://api.github.com/users");
  //   this.setState({ users: res.data, loading: false });
  // }

  //SearchGithubUsers
  searchUsers = async (text) => {
    this.setState({ loading: true });
    const res = await axios.get(
      `https://api.github.com/search/users?q=${text}`
    );
    this.setState({ users: res.data.items, loading: false });
  };
  // clearUesrs
  clearUesrs = () => {
    this.setState({ users: [], loading: false });
  };

  render() {
    const { users, loading } = this.state;
    return (
      <div className="App">
        <NavBar title="githubFinder" />
        <div className="container">
          <Search
            searchUsers={this.searchUsers}
            clearUesrs={this.clearUesrs}
            showClear={users.length > 0 ? true : false}
          />
          <Users users={users} loading={loading} />
        </div>
      </div>
    );
  }
}

export default App;
