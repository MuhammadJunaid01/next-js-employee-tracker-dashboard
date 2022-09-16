import { Col, Row } from "antd";
import React, { useState } from "react";
import { useEffect } from "react";
import styles from "../../styles/employeeTask.module.css";
import { CircularProgressbar } from "react-circular-progressbar";
import "react-circular-progressbar/dist/styles.css";
import { Button, Dropdown, Menu } from "antd";
import { useStopwatch } from "react-timer-hook";
import { useRouter } from "next/router";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

function MyStopwatch({ fn }) {
  const { seconds, minutes, hours, days, isRunning, start, pause, reset } =
    useStopwatch({ autoStart: false });
  return (
    <div style={{ width: "100%" }}>
      <div style={{ fontSize: "40px" }}>
        <span>{days}</span>:<span>{hours + 2}</span>:<span>{minutes + 50}</span>
        :<span>{seconds}</span>
      </div>
      <p>{isRunning ? "Running" : "Not running"}</p>
      <button className={styles.timerBtn} onClick={start}>
        Start
      </button>
      <button className={styles.timerBtn} onClick={pause}>
        Pause
      </button>
    </div>
  );
}
const Index = ({ data }) => {
  console.log("hello data", data);
  const router = useRouter();

  const [complete, setComplete] = useState([]);
  const [inComplete, seInComplete] = useState([]);
  const percentage = 50;

  useEffect(() => {
    const inc = [];
    const comp = [];
    data.tasks?.forEach((task) => {
      if (task.isCompleate) {
        comp.push(task);
      } else {
        inc.push(task);
      }
    });
    setComplete(comp);
    seInComplete(inc);
  }, [data]);
  const handleClick = async (item) => {
    // console.log("item", item);
    data.tasks.forEach(async (act) => {
      if (act.id == item.id) {
        console.log("hello match", act);
        const { isCompleate, ...rest } = act;
        isCompleate = false;
        const res = await fetch(
          `http://localhost:3004/tasks/${router.query.employeeTask}`,
          {
            method: "PUT",
            headers: {
              "Content-type": "application/json",
            },
            body: JSON.stringify(act),
          }
        );
        const resdata = await res.json();
        console.log("hello match resulrt", resdata);
      }
    });
  };
  const handleStart = (task) => {
    console.log(task);
  };
  const handleToast = () => {
    toast.warn("alert you are trackin.....", {
      position: "bottom-right",
      autoClose: 2000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: false,
      draggable: true,
      progress: undefined,
    });
    console.log("calleddddddddddd");
  };
  useEffect(() => {
    const MINUTE_MS = 300000;
    const interval = setInterval(async () => {
      handleToast();
      // const res = await fetch("http://localhost:3000/api/screen");
      // const data = res.json();
      // console.log(data);
    }, MINUTE_MS);
    return () => clearInterval(interval);
  }, []);
  return (
    <div>
      <ToastContainer
        position="bottom-right"
        autoClose={5000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
      />
      <h1> {router.query.employeeTask}</h1>
      <Row gutter={10}>
        <Col xs={24} md={17}>
          <div className={styles.info}>
            <h1 style={{ color: "#bbc4cc", margin: "0px 0px" }}>
              {data?.projectName}
            </h1>
            <p style={{ color: "#BBC4CC", margin: "0px 0px" }}>
              {inComplete.length}
              <span style={{ color: "#8e8e8e" }}> open tasks </span>,{" "}
              {complete.length}
              <span style={{ color: "#8e8e8e" }}> tasks completed </span>
            </p>
            <p style={{ color: "#BBC4CC" }}>{data?.dec}</p>
          </div>
        </Col>
        <Col xs={24} md={7}>
          <div className={styles.details}>
            <h3 style={{ color: "#bbc4cc", margin: "0px 0px" }}>
              Project details
            </h3>
            <div
              style={{
                display: "flex",
                alignItems: "center",
                justifyContent: "space-between",
                backgroundColor: "#2C3034",
                padding: "8px",
              }}
            >
              <p style={{ margin: "0px 0px", fontWeight: "700" }}>Cost: </p>
              <p style={{ margin: "0px 0px", fontWeight: "700" }}>
                ${data.cost}
              </p>
            </div>
            <div
              style={{
                display: "flex",
                alignItems: "center",
                justifyContent: "space-between",
                backgroundColor: "#212529",
                color: "#bbc4cc",
                padding: "8px",
              }}
            >
              <p style={{ margin: "0px 0px", fontWeight: "700" }}>
                Total Hours:
              </p>
              <p style={{ margin: "0px 0px", fontWeight: "700" }}>
                {data.totalHours} Hours
              </p>
            </div>
            <div
              style={{
                display: "flex",
                alignItems: "center",
                justifyContent: "space-between",
                backgroundColor: "#2C3034",

                padding: "8px",
              }}
            >
              <p style={{ margin: "0px 0px", fontWeight: "700" }}>Created:</p>
              <p style={{ margin: "0px 0px", fontWeight: "700" }}>
                {data.taskStart}
              </p>
            </div>
            <div
              style={{
                display: "flex",
                alignItems: "center",
                justifyContent: "space-between",
                backgroundColor: "#212529",
                color: "#bbc4cc",
                padding: "8px",
              }}
            >
              <p style={{ margin: "0px 0px", fontWeight: "700" }}>Deadline:</p>
              <p style={{ margin: "0px 0px", fontWeight: "700" }}>
                {data.taskEndDate}
              </p>
            </div>
            <div
              style={{
                display: "flex",
                alignItems: "center",
                justifyContent: "space-between",
                backgroundColor: "#2C3034",

                padding: "8px",
              }}
            >
              <p style={{ margin: "0px 0px", fontWeight: "700" }}>Priority:</p>
              <p style={{ margin: "0px 0px", fontWeight: "700" }}>
                {data.taskpriority}
              </p>
            </div>
          </div>
          <div
            style={{ marginTop: "10px", color: "white" }}
            className={styles.details}
          >
            <h3
              style={{
                color: "#bbc4cc",
                margin: "0px 0px",
                textAlign: "center",
              }}
            >
              Task Board
            </h3>
            <div>
              {inComplete.map((comp, index) => {
                return (
                  <div className={styles.taskBoard} key={index}>
                    <p style={{ color: "#bbc4cc" }}>
                      {comp.taksName.slice(0, 15)}...
                    </p>
                    <button
                      onClick={() => handleStart(comp)}
                      className={styles.btn}
                    >
                      start
                    </button>
                    <button
                      onClick={() => handleClick(comp)}
                      className={styles.btn}
                    >
                      finish
                    </button>
                  </div>
                );
              })}
            </div>
            <div className={styles.progress}>
              <CircularProgressbar
                strokeWidth={6}
                value={percentage}
                text={`${percentage}%`}
              />
            </div>
            <MyStopwatch fn={handleStart} />
          </div>
        </Col>
      </Row>
    </div>
  );
};
export const getStaticPaths = async () => {
  console.log("genarating / re-genartin product list");
  const res = await fetch("http://localhost:3004/tasks");
  const data = await res.json();
  const paths = data.map((data) => {
    return {
      params: { employeeTask: `${data.id}` },
    };
  });
  return {
    paths,
    fallback: true,
  };
};
export const getStaticProps = async (context) => {
  const { params } = context;

  const res = await fetch(`http://localhost:3004/tasks/${params.employeeTask}`);
  const data = await res.json();
  return {
    props: { data },
  };
};
export default Index;
