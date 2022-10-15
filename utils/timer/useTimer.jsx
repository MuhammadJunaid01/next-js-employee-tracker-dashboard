import { useState, useReducer } from "react";
import { useEffect } from "react";
import { useStopwatch } from "react-timer-hook";
import { useRouter, Router } from "next/router";

import styles from "../../styles/employeeTask.module.css";
const useTimer = () => {
  const [timer, setTimer] = useState({
    days,
    hours,
    minutes,
    seconds,
  });
  const { seconds, minutes, hours, days, isRunning, start, pause, reset } =
    useStopwatch({ autoStart: false });
  const router = useRouter();
  const [notSaved, setNotSaved] = useState(true);
  const alertUser = (e) => {
    e.preventDefault();
    e.returnValue = "";
  };
  useEffect(() => {
    const confirmationMessage = "Changes you made may not be saved.";
    const beforeUnloadHandler = (BeforeUnloadEvent) => {
      (BeforeUnloadEvent || window.event).returnValue = confirmationMessage;
      return confirmationMessage; // Gecko + Webkit, Safari, Chrome etc.
    };
    const beforeRouteHandler = (url) => {
      if (Router.pathname !== url && !confirm(confirmationMessage)) {
        // to inform NProgress or something ...
        Router.events.emit("routeChangeError");
        // tslint:disable-next-line: no-string-throw
        throw `Route change to "${url}" was aborted (this error can be safely ignored). See https://github.com/zeit/next.js/issues/2476.`;
      }
    };
    if (notSaved) {
      window.addEventListener("beforeunload", beforeUnloadHandler);
      Router.events.on("routeChangeStart", beforeRouteHandler);
    } else {
      window.removeEventListener("beforeunload", beforeUnloadHandler);
      Router.events.off("routeChangeStart", beforeRouteHandler);
    }
    return () => {
      window.removeEventListener("beforeunload", beforeUnloadHandler);
      Router.events.off("routeChangeStart", beforeRouteHandler);
    };
  }, [notSaved]);
  useEffect(() => {
    window.addEventListener("beforeunload", alertUser);
    return () => {
      window.removeEventListener("beforeunload", alertUser);
    };
  }, []);
  useEffect(() => {
    if (typeof window !== "undefined") {
      if (seconds > 0) {
        const data = JSON.parse(localStorage.getItem("timer"));
        console.log(";;;;;;;;;;;;;;;;;;;;", data);
        setTimer({
          days: days,
          hours: hours,
          minutes: minutes,
          seconds: seconds,
        });
        localStorage.setItem("timer", JSON.stringify(timer));
      }

      return;
    } else {
      alert("else block");
      return;
    }
  }, [seconds]);

  return { seconds, minutes, hours, days, isRunning, start, pause };
};

export default useTimer;
