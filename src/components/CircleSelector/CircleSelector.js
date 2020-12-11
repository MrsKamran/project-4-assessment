import React from "react";
import "./CircleSelector.css";

class CirclesSelector extends React.Component {
  render() {
    console.log(this.props.state.btn1);
    return (
      <div className="CircleSelector">
        <button
          className={this.props.state.btn1 ? "selected" : ""}
          onClick={this.props.handleClick}
        >
          Select Circle 1
        </button>
        <button
          className={this.props.state.btn2 ? "selected" : ""}
          onClick={this.props.handleClick2}
        >
          Select Circle 2
        </button>
        <button
          className={this.props.state.btn3 ? "selected" : ""}
          onClick={this.props.handleClick3}
        >
          Select Circle 3
        </button>
        <button
          className={this.props.state.btn4 ? "selected" : ""}
          onClick={this.props.handleClick4}
        >
          Select Circle 4
        </button>
      </div>
    );
  }
}

export default CirclesSelector;
