import React, { Component } from "react";
import { Route, Routes } from "react-router-dom";
import Home from "../../pages/home/Home";
import Questions from "../../pages/questions/Questions";

export default class OnBoarding extends Component {
  render() {
    return (
      <div className="onboarding">
        <main>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/questions" element={<Questions />} />
          </Routes>
        </main>
      </div>
    );
  }
}
