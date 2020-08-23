import React, { Component } from "react";
import "./App.css";

class App extends Component {
  constructor() {
    super();
    this.state = {
      monsters: [
        {
          id: 1,
          name: "Aman",
        },
        {
          id: 2,
          name: "Risat",
        },
        {
          id: 3,
          name: "Asif",
        },
        {
          id: 4,
          name: "Rohan",
        },
        {
          id: 5,
          name: "Mamu",
        },
      ],
    };
  }
  render() {
    return (
      <div className="App">
        {this.state.monsters.map((monster) => (
          <h1 key={monster.id}>{monster.name}</h1>
        ))}
      </div>
    );
  }
}

export default App;
