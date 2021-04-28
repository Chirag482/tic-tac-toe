import React from "react";

class Moves extends React.Component {
  render() {
    return (
      <div className="moveslist">
        <ul>{this.props.movess}</ul>
      </div>
    );
  }
}

export default Moves;
