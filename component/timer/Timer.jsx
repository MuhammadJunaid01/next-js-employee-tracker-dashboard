import React from "react";
import useTimer from "../../utils/timer/useTimer";
import styles from "../../styles/employeeTask.module.css";
const Timer = () => {
  const { seconds, minutes, hours, days, isRunning, start, pause } = useTimer();

  return (
    <div>
      <div style={{ width: "100%" }}>
        <div style={{ fontSize: "40px" }}>
          <span>{days}</span>:<span>{hours + 22}</span>:
          <span>{minutes + 50}</span>:<span>{seconds}</span>
        </div>
        <p>{isRunning ? "Running" : "Not running"}</p>
        <button className={styles.timerBtn} onClick={start}>
          Start
        </button>
        <button className={styles.timerBtn} onClick={pause}>
          Pause
        </button>
      </div>
      <h1>hello</h1>
    </div>
  );
};

export default Timer;
