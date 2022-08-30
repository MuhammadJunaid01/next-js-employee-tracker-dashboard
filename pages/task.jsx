import { Button, Modal } from "antd";
import React, { useEffect, useState } from "react";
import { DatePicker } from "antd";
import styles from "../styles/task.module.css";
import useSWR from "swr";
import Select from "react-select";
const fetcher = async () => {
  const res = await fetch(`http://localhost:3004/tasks`);
  const data = await res.json();
  return data;
};
const usersFetcher = async () => {
  const res = await fetch(`http://localhost:3004/users`);
  const data = await res.json();
  return data;
};
const { RangePicker } = DatePicker;

const task = () => {
  const { data: task, error: taskError } = useSWR("tasks", fetcher);
  const { data: users, error: userError } = useSWR("users", usersFetcher);
  const [modal2Visible, setModal2Visible] = useState(false);
  const [user, setUser] = useState(undefined);
  const [startDate, setStartDate] = useState("");
  const [endDate, setEndDate] = useState("");
  const [taskName, setTaskName] = useState("");
  const [priority, setPriority] = useState("");
  const [teamLead, setTeamLead] = useState(null);
  const [teamMember, setTeamMember] = useState(null);

  useEffect(() => {
    const user = JSON.parse(localStorage.getItem("user"));
    setUser(user);
  }, []);

  const onChange = (value, dateString) => {
    console.log("Selected Time: ", value);
    console.log("Formatted Selected Time: ", dateString);
    dateString.map((date, index) => {
      if (index == 0) {
        setStartDate(date);
      } else {
        setEndDate(date);
      }
    });
  };
  const onOk = (value) => {
    console.log("onOk: ", value);
  };

  //test tree
  const handleTaskSubmit = async () => {
    const res = await fetch("  http://localhost:3004/tasks", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        taskName: taskName,
        taskpriority: priority,
        taskStart: startDate,
        taskEndDate: endDate,
        teamLead: teamLead,
        teamMember: teamMember,
      }),
    });
    const data = res.json();
    if (data) {
      setModal2Visible(false);
    } else {
      alert("something Wrong!");
    }
  };

  const option2 = users?.map((user) => {
    return {
      label: user.name,
      value: user.email,
    };
  });

  if (!users) {
    return <h1>Loading...........</h1>;
  }
  console.log("teamMember", teamMember);
  console.log("teamLead", teamLead);
  return (
    <div>
      <Button type="primary" onClick={() => setModal2Visible(true)}>
        Add Task
      </Button>
      <Modal
        className={styles.mdl}
        title="Add Task"
        centered
        visible={modal2Visible}
        onOk={handleTaskSubmit}
        onCancel={() => setModal2Visible(false)}
      >
        <div>
          <p style={{ margin: "3px 0px" }}>Task Name:</p>
          <input
            onBlur={(e) => setTaskName(e.target.value)}
            style={{ width: "100%" }}
            type="text"
          />
        </div>
        <div>
          <p style={{ margin: "3px 0px" }}>Task Priority:</p>
          <input
            onBlur={(e) => setPriority(e.target.value)}
            style={{ width: "100%" }}
            type="text"
          />
        </div>
        <br />
        <br />
        <RangePicker
          showTime={{
            format: "HH:mm",
          }}
          format="YYYY-MM-DD HH:mm"
          onChange={onChange}
          onOk={onOk}
        />
        <p style={{ margin: "3px 0px" }}>Team Lead</p>
        <Select
          styles={{ color: "black" }}
          defaultValue={teamLead}
          onChange={setTeamLead}
          options={option2}
          isSearchable={true}
          isMulti
        />
        <p style={{ margin: "3px 0px" }}>Team Member</p>
        <Select
          styles={{ color: "black" }}
          defaultValue={teamMember}
          onChange={setTeamMember}
          options={option2}
          isSearchable={true}
          isMulti
        />
      </Modal>
    </div>
  );
};

export default task;
