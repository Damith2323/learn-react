import React, { Component } from "react";
import Ninjas from "./Ninjas";

class App extends Component {
  render() {
    return (
      <div className="App">
        <h1>My first React App</h1>
        <p>Welcome</p>
        <Ninjas name="Mia" age="22s" belt="black" />
      </div>
    );
  }
}

export default App;
