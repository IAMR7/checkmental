import React, { Component } from "react";
import { Link } from "react-router-dom";

export default class Results extends Component {
  render() {
    const totalScore = this.props.answers.reduce((acc, cur) => acc + cur, 0);
    const result = totalScore <= 7 ? "Baik" : "Gangguan";
    return (
      <main>
        <p>{result}</p>
        <Link to="/">Back</Link>
      </main>
    );
  }
}
