import React, { Component } from "react";
import { Link } from "react-router-dom";

export default class Home extends Component {
  render() {
    return (
      <div className="h-screen m-auto text-center">
        <div className="pt-12 px-6">
          <h1 className="text-2xl font-bold mb-2">MENTAL HEALTH</h1>
          <p className="text-sm">
            Periksa kesehatan mentalmu secara rutin disini agar tidak gila
          </p>
          <img src="/images/ilus-home.svg" alt="" />
          <Link to="/questions">
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
          </p>
        </div>
      </div>
    );
  }
}
