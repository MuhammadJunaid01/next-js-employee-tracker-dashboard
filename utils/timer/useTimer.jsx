import { useStopwatch } from "react-timer-hook";
import styles from "../../styles/employeeTask.module.css";
const useTimer = () => {
  const { seconds, minutes, hours, days, isRunning, start, pause, reset } =
    useStopwatch({ autoStart: false });
  return { seconds, minutes, hours, days, isRunning, start, pause };
};

export default useTimer;
