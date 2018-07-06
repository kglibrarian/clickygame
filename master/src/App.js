import React, { Component } from "react";
import CardBody from "./components/CardBody/CardBody";
import FriendCard from "./components/FriendCard/FriendCard";
import Wrapper from "./components/Wrapper/Wrapper";
import Container from "./components/Container/Container";
import friends from "../src/friend.json";
import "./App.css";


class App extends Component {
  // Setting this.state.friends to the friends json array
  state = {
    friends,
    count: 0
  };


componentDidMount() {
  this.setState({friends: this.shuffleData(this.state.friends)})
}
 
    
  
  //takes in old friends and returns shuffled old friends which is actually new friends
    shuffleData = data => {
      let i = data.length - 1;
        while (i > 0) {
          const j = Math.floor(Math.random() * (i + 1));
          const temp = data[i];
          data[i] = data[j];
          data[j] = temp;
          i--;
        }
        return data;
    };

  // handleIncrement increases this.state.count by 1
  handleIncrement = oldFriends => {
    // We always use the setState method to update a component's state
    this.setState({ 
      count: this.state.count + 1,
      friends: this.shuffleData(oldFriends) 
    });
    
  };

  handleItemClick = id => {
    console.log("I'm here");
    this.handleIncrement(this.state.friends)
  }
  
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
            />
        </div>
        <Container>
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
        </Container>
      </div>
    );
  }
}

export default App;
