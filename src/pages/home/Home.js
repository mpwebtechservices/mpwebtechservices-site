import React, { Component } from "react";
import CovidInfo from "../covidInfo";
class Home extends Component {
  state = {};
  render() {
    console.log("this.props HOME : ", this.props);
    return <h3 id="welcome-text">Home</h3>;
  }
}

export default Home;
