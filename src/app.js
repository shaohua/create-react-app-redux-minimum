import React, { Component } from "react";
import logo from "./logo.svg";
import "./app.css";

class App extends Component {
  render() {
    return (
      <div className="app">
        <div className="app-header">
          <img src={logo} className="app-logo" alt="logo" />
          <h2>Welcome to React</h2>
        </div>
        <div className="app-intro">
          <button onClick={this.props.increaseCounter}>btn</button>
          <div>{this.props.app.counter}</div>
        </div>
      </div>
    );
  }
}

export default App;
