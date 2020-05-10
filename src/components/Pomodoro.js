import React, { useState, useEffect } from "react";
import moment from "moment";
import momentDurationFormatSetup from "moment-duration-format";

momentDurationFormatSetup(moment);

const Pomodoro = ({ sessionLength, breakLength }) => {
  const [sessionType, setSessionType] = useState("session");
  const [intervalId, setIntervalId] = useState(null);
  const [timeLeft, setTimeLeft] = useState(sessionLength);
  useEffect(() => {
    setTimeLeft(sessionLength);
  }, [sessionLength]);

  const handleStartStopClick = () => {
    if (intervalId !== null) {
      clearInterval(intervalId);
      setIntervalId(null);
    } else {
      const newIntervalId = setInterval(() => {
        setTimeLeft((prevTime) => {
          if (prevTime - 1 >= 0) return prevTime - 1;
          if (sessionType === "session") {
            setTimeLeft(breakLength);
            setSessionType("break");
          } else if (sessionType === "break") {
            setTimeLeft(sessionLength);
            setSessionType("session");
          }
        });
      }, 1000);
      setIntervalId(newIntervalId);
    }
  };

  const formattedTimeLeft = moment
    .duration(timeLeft, "s")
    .format("mm:ss", { trim: false });

  return (
    <div className="pomodoro">
      <span className="pomodoro-message">{sessionType}</span>
      <span className="pomodoro-display">{formattedTimeLeft}</span>
      <div className="pomodoro-buttons">
        <button onClick={() => handleStartStopClick()} className="toggle">
          <i className="fas fa-pause" />
          <i className="fas fa-play" />
        </button>
        <button className="reset">
          <i className="fas fa-sync-alt" />
        </button>
      </div>
    </div>
  );
};

export default Pomodoro;
