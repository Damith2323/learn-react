import React, { Component } from "react";
import Ninjas from "./Ninjas";
import AddNinja from "./AddNinja";

class App extends Component {
  state = {
    ninjas: [
      { name: "Raptor", age: 24, belt: "Black", id: 1 },
      { name: "Mia", age: 22, belt: "Red", id: 2 },
      { name: "Hype", age: 25, belt: "Black", id: 3 }
    ]
  };
  addNinja = ninja => {
    ninja.id = Math.random();
    let tempNinjas = [...this.state.ninjas, ninja];
    this.setState({
      ninjas: tempNinjas
    });
  };
  render() {
    return (
      <div className="App">
        <h1>My first React App</h1>
        <p>Welcome</p>
        <Ninjas ninjas={this.state.ninjas} />
        <AddNinja addNinja={this.addNinja} />
      </div>
    );
  }
}

export default App;
