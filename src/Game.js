import React from "react";
import ReactDOM from "react-dom";

import Board from "./Board";

class Game extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      squares: Array(9).fill(null),
      xIsNext: true,
    };
  }

  handleClick(i) {
    const squares = this.state.squares.slice();
    if (this.calculateWinner(squares) || squares[i]) {
      return;
    }
    squares[i] = this.state.xIsNext ? "X" : "O";
    this.setState({
      squares: squares,
      xIsNext: !this.state.xIsNext,
    });
    console.log("handled");
  }
  calculateWinner(squares) {
    const lines = [
      [0, 1, 2],
      [3, 4, 5],
      [6, 7, 8],
      [0, 3, 6],
      [1, 4, 7],
      [2, 5, 8],
      [0, 4, 8],
      [2, 4, 6],
    ];
    for (let i = 0; i < lines.length; i++) {
      const [a, b, c] = lines[i];
      if (
        squares[a] &&
        squares[a] === squares[b] &&
        squares[a] === squares[c]
      ) {
        return squares[a];
      }
    }
    return null;
  }
  render() {
    const square = this.state.squares.slice();
    const winner = this.calculateWinner(this.state.squares);
    let status;
    if (winner) {
      status = "Winner : " + winner;
    } else {
      status = "Next Player : " + (this.state.xIsNext ? "X" : "O");
    }
    return (
      <div className="game">
        <Board squares={square} onClick={(i) => this.handleClick(i)} />
        <div className="status">{status}</div>
      </div>
    );
  }
}

export default Game;
