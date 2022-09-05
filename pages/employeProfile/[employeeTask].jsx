import { Col, Row } from "antd";
import React, { useState } from "react";
import { useEffect } from "react";
import styles from "../../styles/employeeTask.module.css";

const Index = ({ data }) => {
  const [complete, setComplete] = useState([]);
  const [inComplete, seInComplete] = useState([]);
  useEffect(() => {
    const inc = [];
    const comp = [];
    data.tasks.forEach((task) => {
      if (task.isCompleate) {
        comp.push(task);
      } else {
        inc.push(task);
      }
    });
    setComplete(comp);
    seInComplete(inc);
  }, [data]);
  return (
    <div>
      <Row gutter={10}>
        <Col xs={24} md={18}>
          <div className={styles.info}>
            <h1 style={{ color: "#bbc4cc", margin: "0px 0px" }}>
              {data.projectName}
            </h1>
            <p style={{ color: "#BBC4CC", margin: "0px 0px" }}>
              {inComplete.length}
              <span style={{ color: "#8e8e8e" }}> open tasks </span>,{" "}
              {complete.length}
              <span style={{ color: "#8e8e8e" }}> tasks completed </span>
            </p>
            <p style={{ color: "#BBC4CC" }}>{data.dec}</p>
          </div>
        </Col>
        <Col xs={24} md={6}>
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
