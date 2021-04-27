import React from "react";
import ReactDOM from "react-dom";

class Moves extends React.Component {
  render() {
    return (
      <div className="moveslist">
        <ol>{this.props.movess}</ol>
      </div>
    );
  }
}

export default Moves;
