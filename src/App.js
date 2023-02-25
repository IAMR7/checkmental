import "./App.css";
import { Route, Routes } from "react-router-dom";
import OnBoarding from "./pages/onboarding/OnBoarding";
import Questions from "./pages/questions/Questions";

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<OnBoarding />} />
        <Route path="/questions" element={<Questions />} />
      </Routes>
    </>
  );
}

export default App;
