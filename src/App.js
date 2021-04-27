import React from "react";
import ReactDOM from "react-dom";

import Game from "./Game";
import Moves from "./Moves";

class App extends React.Component {
  render() {
    return (
      <div className="App">
        <h1 style={styles.heading}>Tic Tac Toe</h1>
        <div className="main">
          <Game />
          <Moves />
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
