import React, { useState } from "react";
import "./App.css";

export default function App() {
  const [time, setTime] = useState(0);
  const reset = () => {
    setTime(0);
  };
  return (
    <div className="App">
      <h1 className="mainHeading">Counter App With Reset</h1>
      <button className="count">{time}</button>
      <div className="buttons">
        <button
          onClick={() => {
            setTime(time + 1);
          }}
        >
          Add Count +
        </button>
        <button onClick={reset}>Reset !</button>
        <button
          onClick={() => {
            setTime(time - 1);
          }}
        >
          Sub Count -
        </button>
      </div>
    </div>
  );
}
