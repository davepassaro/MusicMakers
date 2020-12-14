import React from "react";
import TriadQuiz from "./TriadQuiz";
import InteralQuiz from "./IntervalQuiz";
import FretBoard from "./FretBoard";

export default function Quiz() {
  return (
    <div className="text-center">
      <br />
      <TriadQuiz />
      <br />
      <InteralQuiz />
      <br />
      <FretBoard />
    </div>
  );
}
