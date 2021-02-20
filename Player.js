import React from "react";
import Newtable from "./Table";

class Players extends React.Component {
  constructor() {
    super();
    this.state = {};
  }
  render() {
    return (
      <div>
        <div>
          <Newtable
            name={this.props.name}
            points={this.props.stats["pts"]}
            assists={this.props.stats["ast"]}
            rebounds={this.props.stats["reb"]}
            GamesPlayed={this.props.stats["games_played"]}
          />
        </div>
      </div>
    );
  }
}

export default Players;
