import React, { Component } from "react";
import { Link } from "react-router-dom";

export default class OnBoarding extends Component {
  render() {
    return (
      <>
        <h1>ONBOARDING</h1>
        <Link to={"/questions"}>
          <button>Masuk</button>
        </Link>
      </>
    );
  }
}
