import React from "react";

const SetPomodoro = (props) => {
  return (
    <div className="set">
      <div className="option">
        <span>break</span>
        <div className="option-buttons">
          <button>
            <i className="fas fa-arrow-up" />
          </button>
          <button>
            {" "}
            <i className="fas fa-arrow-down" />
          </button>
        </div>
      </div>

      <div className="option">
        <span>session</span>
        <div className="options-buttons">
          <button>
            <i className="fas fa-arrow-up" />
          </button>
          <button>
            <i className="fas fa-arrow-down" />
          </button>
        </div>
      </div>
    </div>
  );
};

export default SetPomodoro;
