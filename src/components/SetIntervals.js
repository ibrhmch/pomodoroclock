import React from "react";
import moment from "moment";

const SetIntervals = ({ changeSession, changeBreak, session, breakLength }) => {
  const breakLengthInMinutes = moment.duration(breakLength, "s").asMinutes();
  const sessionLengthInMinutes = moment.duration(session, "s").asMinutes();
  return (
    <div className="set">
      <div className="option">
        <span>break</span>
        <div className="option-buttons">
          <button onClick={() => changeBreak.incBreak()}>
            <i className="fas fa-arrow-up" />
          </button>
          {breakLengthInMinutes}
          <button onClick={() => changeBreak.decBreak()}>
            {" "}
            <i className="fas fa-arrow-down" />
          </button>
        </div>
      </div>

      <div className="option">
        <span>session</span>
        <div className="option-buttons">
          <button onClick={() => changeSession.incSession()}>
            <i className="fas fa-arrow-up" />
          </button>
          {sessionLengthInMinutes}
          <button onClick={() => changeSession.decSession()}>
            <i className="fas fa-arrow-down" />
          </button>
        </div>
      </div>
    </div>
  );
};

export default SetIntervals;
