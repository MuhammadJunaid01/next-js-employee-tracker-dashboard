import React, { useEffect } from "react";
import useTimer from "../../utils/timer/useTimer";
import styles from "../../styles/employeeTask.module.css";
import { useDispatch, useSelector } from "react-redux";
import { toast, ToastContainer } from "react-toastify";

import { startTimeChecker } from "../../redux/reducers/collapse/collapse";
import { useTakeScreenShotMutation } from "../../redux/reducers/api/takescreenShot";
const Timer = () => {
  const { seconds, minutes, hours, days, isRunning, start, pause } = useTimer();
  const { isTimerRun } = useSelector((state) => state.collapse);
  const [takeScreenShot, { data, isSuccess, error }] =
    useTakeScreenShotMutation();
  const dispatch = useDispatch();

  const handleToast = () => {
    toast.warn("alert you are track.....", {
      position: "bottom-right",
      autoClose: 2000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: false,
      draggable: true,
      progress: undefined,
    });
  };
  useEffect(() => {
    const MINUTE_MS = 480000;
    const timer = setInterval(async () => {
      handleToast();
      takeScreenShot();
    }, MINUTE_MS);
    if (!isTimerRun) {
      clearInterval(timer);
    }
    return () => clearInterval(timer);
  }, [isTimerRun]);
  const handleStart = () => {
    start();
    dispatch(startTimeChecker(true));
  };
  const handleStop = () => {
    pause();
    dispatch(startTimeChecker(false));
  };
  return (
    <div>
      <div style={{ width: "100%" }}>
        <div style={{ fontSize: "40px" }}>
          <span>{days}</span>:<span>{hours + 22}</span>:
          <span>{minutes + 50}</span>:<span>{seconds}</span>
        </div>
        <p>{isRunning ? "Running" : "Not running"}</p>
        <button className={styles.timerBtn} onClick={() => handleStart()}>
          Start
        </button>
        <button className={styles.timerBtn} onClick={() => handleStop()}>
          Pause
        </button>
      </div>
      <h1>hello</h1>
    </div>
  );
};

export default Timer;
