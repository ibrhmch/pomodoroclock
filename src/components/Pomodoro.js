import React from "react";
import moment from "moment";
import momentDurationFormatSetup from "moment-duration-format";

momentDurationFormatSetup(moment);

const Pomodoro = ({
  handleResetButton,
  handleStartStopClick,
  timerLabel,
  timeLeft,
}) => {
  const formattedTimeLeft = moment
    .duration(timeLeft, "s")
    .format("mm:ss", { trim: false });

  return (
    <div
      className="pomodoro"
      style={
        timerLabel === "break"
          ? {
              animation: "break .2s ease-in",
              animationFillMode: "forwards",
            }
          : null
      }
    >
      <span className="pomodoro-message">{timerLabel}</span>
      <span className="pomodoro-display">{formattedTimeLeft}</span>
      <div className="pomodoro-buttons">
        <button onClick={() => handleStartStopClick()} className="toggle">
          <i className="fas fa-pause" />
          <i className="fas fa-play" />
        </button>
        <button onClick={() => handleResetButton()} className="reset">
          <i className="fas fa-sync-alt" />
        </button>
      </div>
    </div>
  );
};

export default Pomodoro;
