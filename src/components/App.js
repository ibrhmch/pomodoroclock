import React, { useState, useEffect } from "react";
import "./App.scss";
import Pomodoro from "./Pomodoro";
import SetIntervals from "./SetIntervals";
import Contact from "./Contact";

const App = () => {
  const [sessionLength, setSessionLength] = useState(0.1 * 60);
  const [breakLength, setBreakLength] = useState(1 * 60);
  const [sessionType, setSessionType] = useState("session");
  const [intervalId, setIntervalId] = useState(null);
  const [timeLeft, setTimeLeft] = useState(sessionLength);
  const [started, setStarted] = useState(false);

  useEffect(() => {
    setTimeLeft(sessionLength);
  }, [sessionLength]);
  useEffect(() => {
    if (timeLeft === 0) {
      if (sessionType === "session") {
        setSessionType("break");
        setTimeLeft(breakLength);
      } else {
        setSessionType("session");
        setTimeLeft(sessionLength);
      }
    }
  }, [timeLeft, breakLength, sessionLength, sessionType]);

  const incSession = () =>
    sessionLength < 60 * 60 && !started
      ? setSessionLength(sessionLength + 60)
      : null;
  const decSession = () =>
    sessionLength > 1 * 60 && !started
      ? setSessionLength(sessionLength - 60)
      : null;

  const incBreak = () =>
    breakLength < 60 * 60 && !started ? setBreakLength(breakLength + 60) : null;
  const decBreak = () =>
    breakLength > 1 * 60 && !started ? setBreakLength(breakLength - 60) : null;

  const handleStartStopClick = () => {
    if (intervalId !== null) {
      clearInterval(intervalId);
      setIntervalId(null);
      setStarted(false);
    } else {
      setStarted(true);
      const newIntervalId = setInterval(() => {
        setTimeLeft((prevTime) => prevTime - 1);
      }, 1000);
      setIntervalId(newIntervalId);
    }
  };

  const handleResetButton = () => {
    setStarted(false);
    clearInterval(intervalId);

    setIntervalId(null);
    setSessionLength(60 * 1);
    setBreakLength(60 * 1);
    setSessionType("session");
    setTimeLeft(60 * 1);
  };
  return (
    <div className="container">
      <h4 className="heading">Pomodoro Clock</h4>

      <Pomodoro
        timeLeft={timeLeft}
        handleStartStopClick={handleStartStopClick}
        timerLabel={sessionType}
        handleResetButton={handleResetButton}
      />

      <SetIntervals
        changeSession={{ incSession, decSession }}
        session={sessionLength}
        changeBreak={{ incBreak, decBreak }}
        breakLength={breakLength}
      />

      <Contact name="ibrahim" twitter="ibrhmch" github="ibrhmch" />
    </div>
  );
};

export default App;
