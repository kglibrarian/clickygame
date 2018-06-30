import React from "react";
import "./FriendCard.css";

const FriendCard = props => (
  <div className="card">
    <div className="card-img-top">
      <img alt={props.name} src={props.image} />
    </div>
    
    <span onClick={() => props.handleClick(props.id)} className="shuffle">
     
    </span>
  </div>
);

export default FriendCard;