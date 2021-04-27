import React from "react";
import ReactDOM from "react-dom";

import Board from "./Board";

class Game extends React.Component {
  render() {
    return (
      <div className="game">
        <Board
          squares={this.props.squares}
          onClick={(i) => this.props.onClick(i)}
        />
        <div className="status">{this.props.status}</div>
      </div>
    );
  }
}

export default Game;
