import React from "react";

import Board from "./Board";

class Game extends React.Component {
  render() {
    return (
      <div className="game">
        <div className="status">{this.props.status}</div>
        <Board
          squares={this.props.squares}
          onClick={(i) => this.props.onClick(i)}
        />
      </div>
    );
  }
}

export default Game;
