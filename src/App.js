import React, { Component } from "react";
import logo from "./logo.svg";
import "./App.css";

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <p>Hello Aman!</p>
          <a
            className="App-link"
            href="https://aamanpro.com"
            target="_blank"
            rel="noopener noreferrer"
          >
            Go to AamanPro.com
          </a>
        </header>
      </div>
    );
  }
}

export default App;
