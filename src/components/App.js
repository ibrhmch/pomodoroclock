import React, { useState, useEffect } from "react";
import "./App.scss";
import Pomodoro from "./Pomodoro";
import SetPomodoro from "./SetPomodoro";
import Contact from "./Contact";

const App = () => {
  const [min, setMin] = useState("00");
  const [sec, setSec] = useState("00");
  const [miliSec, setMiliSec] = useState("00");

  return (
    <div className="container">
      <h4 className="heading">Pomodoro Clock</h4>
      <Pomodoro message={"Break"} mins={min} secs={sec} milisecs={miliSec} />
      <SetPomodoro />
      <Contact name="ibrahim" twitter="ibrhmch" github="ibrhmch" />
    </div>
  );
};

export default App;
