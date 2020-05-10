import React, { useState, useEffect } from "react";
import "./App.scss";
import Pomodoro from "./Pomodoro";
import SetIntervals from "./SetIntervals";
import Contact from "./Contact";

const App = () => {
  const [session, setSession] = useState(25 * 60);
  const [breakLength, setBreak] = useState(1 * 60);
  useEffect(() => {});

  const incSession = () =>
    session < 60 * 60 ? setSession(parseInt(session) + 60) : null;
  const decSession = () =>
    session > 1 * 60 ? setSession(parseInt(session) - 60) : null;

  const incBreak = () =>
    breakLength < 60 * 60 ? setBreak(parseInt(breakLength) + 60) : null;
  const decBreak = () =>
    breakLength > 1 * 60 ? setBreak(parseInt(breakLength) - 60) : null;
  return (
    <div className="container">
      <h4 className="heading">Pomodoro Clock</h4>

      <Pomodoro sessionLength={session} breakLength={breakLength} />

      <SetIntervals
        changeSession={{ incSession, decSession }}
        session={session}
        changeBreak={{ incBreak, decBreak }}
        breakLength={breakLength}
      />

      <Contact name="ibrahim" twitter="ibrhmch" github="ibrhmch" />
    </div>
  );
};

export default App;
