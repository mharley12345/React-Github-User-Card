import React from "react";
import axios from "axios";

class Follower extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      followers: []
    };
  }

  componentDidMount() {
    this.fetchFollowers();
  }
  fetchFollowers = () => {
    axios
      .get(`https://api.github.com/users/mharley12345/followers`)
      .then(response => {
        this.setState({ followers: response.data });
      })
      .catch(err => console.log(err));
  };

  render() {
    return (
      <div>
        {this.state.followers.map(follower => {
          return (
            <div className="followers" key={follower.id}>
              <img
                src={follower.avatar_url}
                alt={`This is ${follower.login}`}
              />
              <h4>{follower.login}</h4>
              <a href={follower.html_url}>{follower.html_url}</a>
            </div>
          );
        })}
      </div>
    );
  }
}

export default Follower;