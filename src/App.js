import axios from "axios";
import React, { Component } from "react";
import "./App.css";
import Alert from "./components/layouts/Alert";
import NavBar from "./components/layouts/navBar";
import Search from "./components/users/Search";
import Users from "./components/users/Users";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = { users: [], loading: false, alert: null };
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
  // setAlert
  setAlert = (msg, type) => {
    this.setState({ alert: { msg, type } });
    setTimeout(() => this.setState({ alert: null }), 4000);
  };

  render() {
    const { users, loading } = this.state;
    return (
      <div className="App">
        <NavBar title="githubFinder" />
        <div className="container">
          <Alert alert={this.state.alert} />
          <Search
            searchUsers={this.searchUsers}
            clearUesrs={this.clearUesrs}
            showClear={users.length > 0 ? true : false}
            setAlert={this.setAlert}
          />
          <Users users={users} loading={loading} />
        </div>
      </div>
    );
  }
}

export default App;
