import { useEffect, useState } from "react";
import "../Clock/styles.css";

export const Clock = ({ duration, timeEnd, changeState, stopGame }) => {
  const [time, setTime] = useState(duration);

  useEffect(() => {
    let timer = setTimeout(() => {
      if (time > 0) {
        setTime(time - 1000);
      }
    }, 1000);
    return () => {
      if (time === 0) {
        return clearTimeout(timer);
      }
    };
  }, [time]);

  const getFormattedTime = (miliseconds) => {
    if (miliseconds) {
      let total_seconds = parseInt(Math.floor(miliseconds / 1000));
      let total_minutes = parseInt(Math.floor(total_seconds / 60));

      let seconds = parseInt(total_seconds % 60);
      let minutes = parseInt(total_minutes % 60);

      return `${minutes < 10 ? "0" + minutes : minutes}:${
        seconds < 10 ? "0" + seconds : seconds
      } `;
    } else {
      return "End!";
    }
  };

  useEffect(() => {
    if (time === 0 && !timeEnd) {
      changeState("end");
      return stopGame();
    }
  }, [time, timeEnd]);

  return <div className="clock">{getFormattedTime(time)}</div>;
};
