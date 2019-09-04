import React from "react";
import "./App.css";
import axios from "axios";
import UserCard from "./Components/UserCard"

class App extends React.Component {
  constructor() {
    super();
    this.state = {
      users: []
    };
  }

  componentDidMount() {
    this.getUser();
  }

  getUser = () => {
    axios
      .get(`https://api.github.com/users/mharley12345`)
      .then(response => {
        this.setState({ users: response.data });
      })
      .catch(err => console.log(err));
  };

  render() {
    return (
      <div className="App">
        <UserCard user={this.state.users} />
  
      </div>
    );
  }
}

export default App
