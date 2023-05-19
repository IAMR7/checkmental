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
    this.handlePrevQuestion = this.handlePrevQuestion.bind(this);
  }
  handleAnswerYes() {
    this.saveAnswer(1);
    if (this.state.currentQuestionNo >= 1) {
      this.setState((prevState) => ({
        currentQuestionNo: prevState.currentQuestionNo + 1,
      }));
    } else {
      this.setState((prevState) => ({
        currentQuestionNo: prevState.currentQuestionNo - 1,
      }));
    }
  }
  handleAnswerNo() {
    this.saveAnswer(0);
    if (this.state.currentQuestionNo >= 1) {
      this.setState((prevState) => ({
        currentQuestionNo: prevState.currentQuestionNo + 1,
      }));
    } else {
      this.setState((prevState) => ({
        currentQuestionNo: prevState.currentQuestionNo - 1,
      }));
    }
  }
  saveAnswer(answer) {
    const currentAnswers = [...this.state.answers];
    currentAnswers[this.state.currentQuestionNo - 1] = answer;
    this.setState({ answers: currentAnswers });
  }
  handlePrevQuestion() {
    this.setState((prevState) => ({
      currentQuestionNo: prevState.currentQuestionNo - 1,
    }));
  }
  render() {
    const currentQuestion = questionList.find(
      (questionObj) => questionObj.no === this.state.currentQuestionNo
    );
    return (
      <main className="h-screen m-auto text-center">
        {this.state.currentQuestionNo <= questionList.length ? (
          <div className="flex flex-col justify-center items-center pt-14 px-6">
            <h1 className="text-2xl font-bold">{`PERTANYAAN ${currentQuestion.no}`}</h1>
            <img
              className="mt-5"
              width="80%"
              src={`/images/ilusquestions/${currentQuestion.image}`}
              alt=""
            />
            <p className="text-sm mb-8 mt-5">{currentQuestion.question}</p>
            <span>
              <button
                className={
                  this.state.answers[currentQuestion.no - 1] !== 1
                    ? "bg-white border-2 border-black rounded-md py-2 text-sm mr-3 px-5"
                    : "bg-black border-2 border-transparent rounded-md text-white py-2 text-sm mr-3 px-5"
                }
                onClick={() => this.handleAnswerYes()}
              >
                Iya
              </button>
              <button
                className={
                  this.state.answers[currentQuestion.no - 1] !== 0
                    ? "bg-white border-2 border-black rounded-md py-2 text-sm px-5"
                    : "bg-black border-2 border-transparent rounded-md text-white py-2 text-sm px-5"
                }
                onClick={() => this.handleAnswerNo()}
              >
                Tidak
              </button>
            </span>
            {this.state.currentQuestionNo !== 1 ? (
              <p className="mt-16" onClick={this.handlePrevQuestion}>
                <i className="bx bx-fw bx-left-arrow-alt"></i> Mundur
              </p>
            ) : (
              ""
            )}
          </div>
        ) : (
          <Results answers={this.state.answers} />
        )}
      </main>
    );
  }
}
