import React, { Component } from "react";
import List from "./List";
import Title from "./Title";

class Main extends Component {
  render() {
    return (
      <div>
        <Title title={"To Do list"} />
        <List values={["python", "c", "matlab", "c++"]} />
        <List values={["man vs wild", "family man", "robot man"]} />
      </div>
    );
  }
}

export default Main;
