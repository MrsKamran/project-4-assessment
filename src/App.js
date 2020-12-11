import React, { Component } from "react";
import "./App.css";
import CircleSelector from "./components/CircleSelector/CircleSelector";
import Circles from "./components/Circles/Circles";

class App extends Component {
  constructor() {
    super();
    this.state = {
      btn1: true,
      btn2: false,
      btn3: false,
      btn4: false,
    };
  }
  handleClick = () => {
    this.setState({ btn1: this.state.btn1 ? false : true });
  };
  handleClick2 = () => {
    this.setState({ btn2: this.state.btn2 ? false : true });
  };
  handleClick3 = () => {
    this.setState({ btn3: this.state.btn3 ? false : true });
  };
  handleClick4 = () => {
    this.setState({ btn4: this.state.btn4 ? false : true });
  };

  render() {
    return (
      <div className="App">
        <header className="App-header">UNIT 4 FINAL ASSESSMENT</header>
        <main>
          <CircleSelector
            state={this.state}
            handleClick={this.handleClick}
            handleClick2={this.handleClick2}
            handleClick3={this.handleClick3}
            handleClick4={this.handleClick4}
          />
          <Circles state={this.state} />
        </main>
      </div>
    );
  }
}

export default App;
