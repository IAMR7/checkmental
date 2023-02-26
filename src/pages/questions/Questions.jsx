import React, { Component } from "react";
import questionList from "../../utils/QuestionsList.json";
import Results from "../results/Results";

export default class Questions extends Component {
  constructor(props) {
    super(props);
    this.state = {
      currentQuestionNo: 1,
      answers: Array(questionList.length).fill(null),
    };
    this.handleNextQuestion = this.handleNextQuestion.bind(this);
  }
  handleAnswerYes() {
    this.saveAnswer(1);
  }
  handleAnswerNo() {
    this.saveAnswer(0);
  }
  saveAnswer(answer) {
    const currentAnswers = [...this.state.answers];
    currentAnswers[this.state.currentQuestionNo - 1] = answer;
    this.setState({ answers: currentAnswers });
  }
  handleNextQuestion() {
    this.setState((prevState) => ({
      currentQuestionNo: prevState.currentQuestionNo + 1,
    }));
  }
  render() {
    const currentQuestion = questionList.find(
      (questionObj) => questionObj.no === this.state.currentQuestionNo
    );
    console.log(this.state.answers);
    return (
      <main>
        {this.state.currentQuestionNo <= questionList.length ? (
          <>
            <h1>QUESTIONS</h1>
            <h3>{currentQuestion.question}</h3>
            <span>
              <button onClick={() => this.handleAnswerYes()}>Yes</button>
              <button onClick={() => this.handleAnswerNo()}>No</button>
            </span>
            <button onClick={this.handleNextQuestion}>Next</button>
          </>
        ) : (
          <Results answers={this.state.answers} />
        )}
      </main>
    );
  }
}
