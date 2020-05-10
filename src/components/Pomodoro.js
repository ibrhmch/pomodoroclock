import React from "react";

const Pomodoro = (props) => {
  return (
    <div className="pomodoro">
      <span className="pomodoro-message">{props.message}</span>
      <span className="pomodoro-display">
        {props.mins}:{props.secs}:{props.milisecs}
      </span>
      <div className="pomodoro-buttons">
        <button className="toggle">
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
