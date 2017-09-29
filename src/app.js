import React, { Component } from "react";
import "./app.css";

class App extends Component {
  render() {
    return (
      <div className="app">
        <button onClick={this.props.increaseCounter}>btn</button>
        <div>{this.props.app.counter}</div>
      </div>
    );
  }
}

export default App;
