import React from "react";

class Newtable extends React.Component {
  constructor() {
    super();
  }
  render() {
    return (
      <table style={{ borderSpacing: "10px", borderCollapse: "collapse" }}>
        <thead style={{ color: "white" }}>
          <tr>
            <th>Player</th>
            <th> Points</th>
            <th> Assists</th>
            <th> Rebounds</th>
            <th> Games Played</th>
          </tr>
        </thead>
        <tbody>
          <tr style={{ color: "white" }}>
            <td>{this.props.name}</td>
            <td>{this.props.points}</td>
            <td>{this.props.assists}</td>
            <td>{this.props.rebounds}</td>
            <td>{this.props.GamesPlayed}</td>
          </tr>
        </tbody>
      </table>
    );
  }
}

export default Newtable;
