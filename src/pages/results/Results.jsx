import React, { Component } from "react";
import { Link } from "react-router-dom";

export default class Results extends Component {
  render() {
    const totalScore = this.props.answers.reduce((acc, cur) => acc + cur, 0);
    // const result = totalScore <= 7 ? "Baik" : "Gangguan";
    return (
      <main className="h-screen m-auto text-center">
        <div className="pt-8 px-6">
          <p className="text-sm">HASIL TES KAMU :</p>
          <h1 className="text-2xl font-bold">
            {totalScore <= 7
              ? "Hai, mental kamu baik!"
              : "Wah, mental kamu gangguan"}
          </h1>
          {totalScore <= 7 ? (
            <img src="/images/ilusquestions/good.svg" alt="" />
          ) : (
            <img src="/images/ilusquestions/bad.svg" alt="" />
          )}
          <p className="text-sm">
            {totalScore <= 7
              ? `Hasil tes nya menunjukkan kesehatan mentalmu masih aman. Tetap jaga
            pikiran, hati, serta jiwamu ya, kamu berhak bahagia dan tersenyum.
            Masih banyak orang-orang yang menyayangimu. Semangat terus ya`
              : `Hasil tes nya menunjukkan kesehatan sedikit terganggu. Jangan pernah sungkan untuk bercerita ke orang-orang terdekatmu, jangan dipendam sendiri terus-terusan. Selalu ingat bahwa kamu juga berhak untuk bahagia`}
          </p>
          <Link to="/">
            <button className="bg-black hover:bg-slate-800 w-full py-4 mt-12 rounded-lg text-sm text-white">
              Selesai
            </button>
          </Link>
          {/* <img
            src={totalScore <= 7 ? "/images/7.svg" : "/images/9.svg"}
            alt=""
          /> */}
          {/* <Link to="/questions">
            <button className="bg-black hover:bg-slate-800 w-full py-4 mt-12 rounded-lg text-sm text-white">
              Coba Langsung{" "}
              <i class="bx bx-fw bx-right-arrow-alt bx-fade-right"></i>
            </button>
          </Link>
          <button className="bg-white hover:bg-black border-2 border-black w-full py-4 mt-3 rounded-lg text-sm text-black font-semibold hover:text-white">
            Login
          </button>
          <p className="text-xs mt-14">
            Developer by Reza Febriansyah &hearts;
          </p> */}
        </div>
      </main>
    );
  }
}
