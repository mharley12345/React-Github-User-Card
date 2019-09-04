import React from "react";
import Followers from "./Followers"

const UserCard = props => {
  return (
    <div>
      <img className="pic-spin" src={props.user.avatar_url} alt={`This is ${props.user.name}`} />
      
      <h1>Name: {props.user.name}</h1>
      <p>User Name : {props.user.login}</p>
      <h4>Location : {props.user.location}</h4>
      <h3>Followers:</h3>
      <Followers/>
   
    
    </div>
  );
};
export default UserCard