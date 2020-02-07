import React, { Component } from "react";

class List extends Component {
  render() {
    return (
      <ol>
        {this.props.values.map((value, index) => (
          <li key={index}> {value} </li>
        ))}
      </ol>
    );
  }
}

export default List;
