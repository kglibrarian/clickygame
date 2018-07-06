import React from "react";
import "./FriendCard.css";

const FriendCard = props => (
  <div className="card shuffle" onClick={() => props.handleClick(props.id)}>
    <div className="img-container">
      <img alt={props.name} src={props.image} />
    </div>
    
    {/* <span onClick={() => props.handleClick(props.id)} className="shuffle">
     
    </span> */}
  </div>
);

export default FriendCard;