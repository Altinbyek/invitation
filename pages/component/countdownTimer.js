// Countdown.js
import React from "react";
import Countdown from "react-countdown";

// Renderer function to customize the countdown display
const renderer = ({ days, hours, minutes, seconds, completed }) => {
  if (completed) {
    // Render a completed state
    return <span>Хуримын өдөр!</span>;
  } else {
    // Render the countdown
    return (
      <div className="flex gap-x-2 items-center justify-center w-full">
        <div className="timer">
          <span>{days} </span>
          <span>
            <span>өдөр</span>
          </span>
        </div>
        <span className="timer-center">:</span>
        <div className="timer">
          <span>{hours} </span>
          <span>
            <span>цаг</span>
          </span>
        </div>
        <span className="timer-center">:</span>
        <div className="timer">
          <span>{minutes}</span>
          <span>
            <span>минут</span>
          </span>
        </div>
        <span className="timer-center">:</span>
        <div className="timer">
          <span>{seconds}</span>
          <span>
            <span>секунд</span>
          </span>
        </div>
      </div>
    );
  }
};

const CountdownTimer = () => {
  // Date to countdown to (July 15, 2024)
  const countdownDate = new Date("2024-07-15T19:00:00").getTime();

  return <Countdown date={countdownDate} renderer={renderer} />;
};

export default CountdownTimer;
