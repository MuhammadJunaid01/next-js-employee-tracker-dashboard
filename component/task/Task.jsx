import { useEffect } from "react";
import styles from "../../styles/tasks.module.css";
import useSWR from "swr";
import { Col, Row, Checkbox, Button } from "antd";
import Link from "next/link";
import { useState } from "react";
import { SwapRightOutlined } from "@ant-design/icons";
/**
 * Fetcher is a function that takes an object as an argument and returns a promise that resolves to an
 * array of objects.
 * @returns An object with a data property that contains an array of objects.
 */
const fetcher = async ({}) => {
  const res = await fetch("http://localhost:3004/tasks");
  const data = await res.json();
  return data;
};
const Task = () => {
  /* A hook that is used for data fetching, setting up a subscription, or manually changing the DOM in
React components. */
  const [checked, setChecked] = useState(true);

  /* Getting the user from local storage. */
  const user = JSON.parse(localStorage.getItem("user"));
  // const user = localStorage.getItem("user");
  const { data, error } = useSWR("/tasks", fetcher);
  const [mytasks, setMyTasks] = useState([]);
  /* A hook that is used for data fetching, setting up a subscription, or manually changing the DOM in
 React components. */
  useEffect(() => {
    const mytask = [];
    const mylead = [];

    data?.map((task) => {
      task.teamLead?.forEach((lead) => {
        if (lead.label == user.name) {
          mylead.push(lead);
        }
      });
      task.teamMember?.forEach((member) => {
        if (user?.email?.toLowerCase() === member.value.toLowerCase()) {
          mytask.push(task);
        }
      });
    });

    setMyTasks(mytask);
  }, []);
  let comp = 0;
  let incomp = 0;
  /**
   * When the toggleChecked function is called, it will set the checked state to the opposite of what it
   * currently is.
   */
  const toggleChecked = () => {
    setChecked(!checked);
  };

  /**
   * OnChange is a function that takes an event as an argument and sets the state of the checkbox to the
   * value of the event's target's checked property.
   */
  const onChange = (e) => {
    console.log("checked = ", e.target.checked);
    setChecked(e.target.checked);
  };
  return (
    <div className={styles.container}>
      <div>
        <Row gutter={10}>
          /* A map function. */
          {mytasks.map((data, index) => {
            return (
              <Col xs={24} md={8} key={index}>
                <Link href={`/employeProfile/${data.id}`}>
                  <a>
                    <div className={styles.content}>
                      <h3 style={{ color: "#BBC4CC", margin: "0px 0px" }}>
                        {data.projectName}
                      </h3>
                      {data.tasks.map((task, i) => {
                        if (task.isCompleate) {
                          comp++;
                        } else {
                          incomp++;
                        }
                      })}
                      <p style={{ margin: "3px 0px" }}>
                        <span style={{ color: "#BBC4CC" }}> {incomp}</span> open
                        tasks, <span style={{ color: "#BBC4CC" }}>{comp} </span>
                        tasks completed
                      </p>
                      <p
                        style={{
                          fontSize: "15px",
                          fontFamily: "CircularStd, sans-serif",
                          color: "#8e8e8e",
                          fontWeight: "400",
                          lineHeight: "23px",
                        }}
                      >
                        {data.dec}
                      </p>
                      <p style={{ color: "#bbc4cc" }}>
                        Deadline:
                        <span style={{ display: "block", color: "#8e8e8e" }}>
                          {data.taskEndDate}
                        </span>
                      </p>
                      {data.teamLead.map((lead, ind) => {
                        return (
                          <p
                            key={ind}
                            style={{ color: "#bbc4cc", margin: "3px 0px" }}
                          >
                            Team Leader: <SwapRightOutlined />
                            <span
                              style={{ color: "#8e8e8e", marginLeft: "7px" }}
                            >
                              {lead.label}
                            </span>
                          </p>
                        );
                      })}

                      {data.teamMember.map((member, ind) => {
                        return (
                          <p
                            key={ind}
                            style={{ color: "#bbc4cc", margin: "3px 0px" }}
                          >
                            Team Member: <SwapRightOutlined />
                            <span
                              style={{ color: "#8e8e8e", marginLeft: "7px" }}
                            >
                              {member.label}
                            </span>
                          </p>
                        );
                      })}
                    </div>
                  </a>
                </Link>
              </Col>
            );
          })}
        </Row>
      </div>
    </div>
  );
};

export default Task;
