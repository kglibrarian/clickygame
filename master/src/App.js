import React, { Component } from "react";
// import Counter from "./components/Counter/Counter";
import CardBody from "./components/CardBody/CardBody";
import FriendCard from "./components/FriendCard/FriendCard";
import Wrapper from "./components/Wrapper/Wrapper";
import Title from "./components/Title/Title";
import friends from "../src/friend.json";
import "./App.css";


class App extends Component {
  // Setting this.state.friends to the friends json array
  state = {
    friends,
    count: 0
  };

  handleItemClick = (id) => {
    

    this.handleIncrement()
  }
    
  
  shuffleFriend = id => {
    // Filter this.state.friends for friends with an id not equal to the id being removed
    const friends = this.state.friends.filter(friend => friend.id !== id);
    // Set this.state.friends equal to the new friends array
    this.setState({ friends });
  };

  // handleIncrement increases this.state.count by 1
  handleIncrement = () => {
    // We always use the setState method to update a component's state
    this.setState({ count: this.state.count + 1 });
  };

  // handleDecrement decreases this.state.count by 1
  handleDecrement = () => {
    // We always use the setState method to update a component's state
    this.setState({ count: this.state.count - 1 });
  };

  // Map over this.state.friends and render a FriendCard component for each friend object
  render() {
    return (
     <div>   
        <div class="jumbotron">
            <div class="container">
                <h1 class="display-4">Memory Game</h1>
                <p class="lead">Click on an image to increase your points. But don't click the same image twice, or your score resets to zero!</p>
            </div>
            <CardBody
            count={this.state.count}
            handleIncrement={this.handleIncrement}
            handleDecrement={this.handleDecrement}
            />
        </div>
        
      
        
        <Title>Friends List</Title>
        {this.state.friends.map(friend => (
          <Wrapper>
          <FriendCard
            handleClick={this.handleItemClick}
            id={friend.id}
            key={friend.id}
            image={friend.image}
            
          />
           </Wrapper>
        ))}
     
    </div>
    );
  }
}

export default App;
