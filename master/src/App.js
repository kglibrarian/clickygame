import React, { Component } from "react";
import CardBody from "./components/CardBody/CardBody";
import FriendCard from "./components/FriendCard/FriendCard";
import Wrapper from "./components/Wrapper/Wrapper";
import Container from "./components/Container/Container";
import friends from "../src/friend.json";
import "./App.css";


//Random Shuffle of the friends array. Takes in old friends array 
//and returns shuffled old friends array which is actually new friends.
function randomFriends(array) {
  for (let i = array.length - 1; i > 0; i--) {
    let j = Math.floor(Math.random() * (i + 1));
    [array[i], array[j]] = [array[j], array[i]];
  }
  return array;
};


//Sets the state of components in the app. 
class App extends Component {
  // Setting this.state.friends to the friends json array
  state = {
    friends,
    count: 0,
    wins: 0,
    clicked: []
  };


// componentDidMount() {
//   this.setState({friends: this.randomFriends(this.state.friends)})
// }
 
//handleShuffle takes in the newly randomized friends array 
//and sets the state to that array
handleShuffle = () => {
  let shuffledFriends = randomFriends(friends);
  this.setState({ friends: shuffledFriends });
};

 
// handleIncrement increases this.state.count by 1 and runs the 
//handleShuffle function
handleIncrement = () => {
  const newScore = this.state.count + 1;
  if (newScore < 5) {
  this.setState({ count: newScore })
  } else if (newScore === 5) {
    console.log("You Win!")
    this.setState({ wins: this.state.wins + 1});
    this.handleReset();
} 
  this.handleShuffle();
};

  
handleClick = id => {
  if (this.state.clicked.includes(id)){
    this.handleReset();
    console.log("Oops, you clicked this image twice!");
  } else if (this.state.clicked.indexOf(id) === -1) {
    this.handleIncrement(this.state.friends)
    this.setState({ clicked: this.state.clicked.concat(id) });
    console.log("You clicked a new image");
  } else {
    this.handleReset();
    console.log("Oops!");
  }
};

  

handleReset = () => {
  this.setState({
    clicked: [],
    count: 0
  });
    this.handleShuffle();
};
  
  // Map over this.state.friends and render a FriendCard component for each friend object
  render() {
    return (
     <div>   
        <div className="jumbotron">
            <div className="container">
                <h1 className="display-4">Memory Game</h1>
                <p className="lead">Click on an image to increase your points. Click on five distinct images to win. But don't click the same image twice, or your score resets to zero!</p>
            </div>
        </div>
            <CardBody
            count={this.state.count}
            wins={this.state.wins}
            />
        
        <Container>
          {this.state.friends.map(friend => (
            <Wrapper>
              <FriendCard
                id={friend.id}
                key={friend.id}
                image={friend.image}
                handleClick={this.handleClick}
                handleIncrement={this.handleIncrement}
                handleReset={this.handleReset}
                handleShuffle={this.handleShuffle}
               
              />
            </Wrapper>
          ))}
        </Container>
      </div>
    );
  }
}

export default App;
