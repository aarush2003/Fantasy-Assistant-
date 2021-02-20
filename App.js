import React, { Component } from "react";
import axios from "axios";
import Players from "./Player";
import LineChart from "./Line";
import LineChart1 from "./assist";
import LineChart2 from "./Rebounds";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      playerName: "",
      finalName: "",
      playerStats: {},
      pts1: [],
      ast1: [],
      reb1: [],
      playerName2: "",
      finalName2: "",
      playerStats2: {},
      pts2: [],
      ast2: [],
      reb2: [],
      playerName3: "",
      finalName3: "",
      playerStats3: {},
      pts3: [],
      ast3: [],
      reb3: [],
      rawdata: false,
    };
  }

  handleSubmit = (event) => {
    event.preventDefault();

    if (event.target.id === "form1") {
      this.getPlayerId(this.state.playerName, "form1");
      this.getAllstats();
      const final = this.setState((prevState) => ({
        finalName: prevState.playerName.split("_").join(" "),
      }));
    } else if (event.target.id === "form2") {
      this.getPlayerId(this.state.playerName2, "form2");
      const final = this.setState((prevState) => ({
        finalName2: prevState.playerName2.split("_").join(" "),
      }));
    } else if (event.target.id === "form3") {
      this.getPlayerId(this.state.playerName3, "form3");
      const final = this.setState((prevState) => ({
        finalName3: prevState.playerName3.split("_").join(" "),
      }));
    }
  };

  handleChange = (event) => {
    if (event.target.id === "form1") {
      this.setState({ playerName: event.target.value.split(" ").join("_") });
    } else if (event.target.id === "form2") {
      this.setState({ playerName2: event.target.value.split(" ").join("_") });
    } else if (event.target.id === "form3") {
      this.setState({ playerName3: event.target.value.split(" ").join("_") });
    } else {
      if (event.target.name == "rawdata") {
        this.setState({
          rawdata: event.target.value,
        });
      }
    }
  };

  render() {
    return (
      <div>
        <div className="header">Fantasy Asssitant</div>
        <div>
          <form
            id="form1"
            onSubmit={this.handleSubmit}
            style={{ position: "absolute", top: 100, left: 10 }}
          >
            <label className="new-search">
              <input
                id="form1"
                type="text"
                style={{
                  width: 200,
                  font: "Courier New",
                }}
                value={this.state.value}
                onChange={this.handleChange}
                placeholder="Enter Name (e.g Lebron James)"
                className="att"
              />
            </label>
            <input type="submit" value="Submit" className="button" />
          </form>

          <form
            id="form2"
            onSubmit={this.handleSubmit}
            style={{ position: "absolute", top: 100, right: "47.57%" }}
          >
            <label className="new-search">
              <input
                id="form2"
                type="text"
                style={{
                  width: 200,
                  font: "Courier New",
                }}
                value={this.state.value}
                onChange={this.handleChange}
                placeholder="Enter Name (e.g Lebron James)"
                className="att"
              />
            </label>
            <input type="submit" value="Submit" className="button" />
          </form>

          <form
            id="form3"
            onSubmit={this.handleSubmit}
            style={{ position: "absolute", top: 100, left: "80%" }}
          >
            <label className="new-search">
              <input
                id="form3"
                type="text"
                style={{
                  width: 200,
                  font: "Courier New",
                }}
                value={this.state.value}
                onChange={this.handleChange}
                placeholder="Enter Name (e.g Lebron James)"
                className="att"
              />
            </label>
            <input type="submit" value="Submit" className="button" />
          </form>

          <label style={{ position: "absolute", top: 125, left: 10 }}>
            <Players
              stats={this.state.playerStats}
              name={this.state.finalName}
            />
          </label>
          <label style={{ position: "absolute", top: 125, right: "44.28%" }}>
            <Players
              stats={this.state.playerStats2}
              name={this.state.finalName2}
            />
          </label>
          <label style={{ position: "absolute", top: 125, left: "80%" }}>
            <Players
              stats={this.state.playerStats3}
              name={this.state.finalName3}
            />
          </label>
          <span>
            <span>
              <LineChart
                name1={this.state.finalName}
                data1={this.state.pts1}
                name2={this.state.finalName2}
                data2={this.state.pts2}
                name3={this.state.finalName3}
                data3={this.state.pts3}
              />
            </span>
          </span>
          <span>
            <span>
              <LineChart1
                name1={this.state.finalName}
                data1={this.state.ast1}
                name2={this.state.finalName2}
                data2={this.state.ast2}
                name3={this.state.finalName3}
                data3={this.state.ast3}
              />
            </span>
          </span>
          <span>
            <span>
              <LineChart2
                name1={this.state.finalName}
                data1={this.state.reb1}
                name2={this.state.finalName2}
                data2={this.state.reb2}
                name3={this.state.finalName3}
                data3={this.state.reb3}
              />
            </span>
          </span>
        </div>
      </div>
    );
  }

  getPlayerId = (name, str) => {
    axios
      .get(`https://www.balldontlie.io/api/v1/players?search=${name}`)
      .then(async (res) => {
        if (res.data.data[0] === undefined) {
          alert("This player is either injured or hasn't played yet!");
        } else if (res.data.data.length > 1) {
          alert("Pleases specify the name more!");
        } else {
          await this.getPlayerStats(res.data.data[0].id, str);
        }
      });
  };

  getPlayerStats = (playerId, str) => {
    axios
      .get(
        `https://www.balldontlie.io/api/v1/season_averages?season=2019&player_ids[]=${playerId}`
      )
      .then(async (res) => {
        if (str === "form1") {
          this.setState({ playerStats: res.data.data[0] });
          this.getAllstats(playerId, str);
        } else if (str === "form2") {
          this.setState({ playerStats2: res.data.data[0] });
          this.getAllstats(playerId, str);
        } else if (str === "form3") {
          this.setState({ playerStats3: res.data.data[0] });
          this.getAllstats(playerId, str);
        }
      });
  };

  getAllstats = (playerId, str) => {
    axios
      .get(
        `https://www.balldontlie.io/api/v1/stats?seasons[]=2019&player_ids[]=${playerId}&start_date=2019-11-12`
      )
      .then(async (res) => {
        if (str === "form1") {
          const newobj = res.data.data.map((item) => ({
            points: item["pts"],
            assists: item["ast"],
            rebounds: item["reb"],
          }));
          this.setState({
            pts1: newobj.map((item) => item.points),
            ast1: newobj.map((item) => item.assists),
            reb1: newobj.map((item) => item.rebounds),
          });
        } else if (str === "form2") {
          const newobj2 = res.data.data.map((item) => ({
            points: item["pts"],
            assists: item["ast"],
            rebounds: item["reb"],
          }));
          this.setState({
            pts2: newobj2.map((item) => item.points),
            ast2: newobj2.map((item) => item.assists),
            reb2: newobj2.map((item) => item.rebounds),
          });
        } else if (str == "form3") {
          const newobj3 = res.data.data.map((item) => ({
            points: item["pts"],
            assists: item["ast"],
            rebounds: item["reb"],
          }));
          this.setState({
            pts3: newobj3.map((item) => item.points),
            ast3: newobj3.map((item) => item.assists),
            reb3: newobj3.map((item) => item.rebounds),
          });
        }
      });
  };
}
export default App;
