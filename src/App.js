import React from "react";

import Game from "./Game";
import Moves from "./Moves";

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      history: [
        {
          squares: Array(9).fill(null),
        },
      ],
      xIsNext: true,
      stepNumber: 0,
    };
  }

  handleClick(i) {
    const history = this.state.history.slice(0, this.state.stepNumber + 1);
    const current = history[history.length - 1];
    const squares = current.squares.slice();
    if (this.calculateWinner(squares) || squares[i]) {
      return;
    }
    squares[i] = this.state.xIsNext ? "X" : "O";
    this.setState({
      history: history.concat([
        {
          squares: squares,
        },
      ]),
      stepNumber: history.length,
      xIsNext: !this.state.xIsNext,
    });
  }
  jumpTo(step) {
    this.setState({
      stepNumber: step,
      xIsNext: step % 2 === 0,
    });
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
    const history = this.state.history;
    const current = history[this.state.stepNumber];

    const winner = this.calculateWinner(current.squares);
    let status;
    if (winner) {
      status = "Winner : " + winner;
    } else {
      status = "Next Player : " + (this.state.xIsNext ? "X" : "O");
    }
    const moves = history.map((step, move) => {
      const desc = move ? "Move #" + move : "Go To Start Game";
      const tooltiptext = "Click to travel to Move:" + move;
      return (
        <li key={move}>
          <button className="tooltip" onClick={() => this.jumpTo(move)}>
            {desc}
            <span className="tooltiptext">{tooltiptext}</span>
          </button>
        </li>
      );
    });
    return (
      <div className="App">
        <h1 style={styles.heading}>Tic Tac Toe</h1>
        <div className="main">
          <Game
            squares={current.squares}
            onClick={(i) => this.handleClick(i)}
            status={status}
          />
          <Moves movess={moves} />
        </div>
      </div>
    );
  }
}

const styles = {
  heading: {
    textAlign: "center",
    background: "#4367b2",
    height: 70,
    marginTop: 0,
    color: "white",
    paddingTop: 15,
  },
};

export default App;
