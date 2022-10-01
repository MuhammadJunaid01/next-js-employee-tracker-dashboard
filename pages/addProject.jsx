import { Button, Modal } from "antd";
import React, { useEffect, useState } from "react";
import { DatePicker } from "antd";
import styles from "../styles/task.module.css";
import useSWR from "swr";
import Select from "react-select";
import { useAddProjectMutation } from "../redux/reducers/project/project";
import UploadButton from "../component/uploadBTN/UploadButton";
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
  const [
    addProject,
    { data, error: taskMutationError, isSuccess: taskSuccess },
  ] = useAddProjectMutation();
  const [modal2Visible, setModal2Visible] = useState(false);
  const [user, setUser] = useState(undefined);
  const [startDate, setStartDate] = useState("");
  const [endDate, setEndDate] = useState("");
  const [taskName, setTaskName] = useState("");
  const [priority, setPriority] = useState("");
  const [teamLead, setTeamLead] = useState([]);
  const [teamMember, setTeamMember] = useState([]);
  const [image, setImage] = useState(undefined);
  const [cost, setCost] = useState(0);
  const [hours, setHours] = useState(0);
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
    console.log(taskName);
    const formData = new FormData();

    try {
      formData.append("image", image);
      formData.append("projectName", taskName);
      formData.append("taskpriority", priority);
      formData.append("taskStartDate", startDate);
      formData.append("taskEndDate", endDate);
      formData.append("teamLead", teamLead);
      formData.append("teamMember", teamMember);
      formData.append("totalhours", hours);
      formData.append("totalcost", cost);
      addProject(formData);
      // setModal2Visible(false);
    } catch (error) {
      alert(error.message);
      console.log(error.message);
    }
  };
  // const ttt = [...teamMember];
  console.log("teamMember", teamMember);
  const option2 = users?.map((user) => {
    return {
      label: user.name,
      value: user.email,
    };
  });

  if (!users) {
    return <h1>Loading...........</h1>;
  }
  return (
    <div>
      <Button type="primary" onClick={() => setModal2Visible(true)}>
        Add Project
      </Button>
      <Modal
        className={styles.mdl}
        title="Add Project"
        centered
        visible={modal2Visible}
        onOk={handleTaskSubmit}
        onCancel={() => setModal2Visible(false)}
      >
        <div>
          <p style={{ margin: "3px 0px" }}>Task Name:</p>
          <input
            onBlur={(e) => setTaskName(e.target.value)}
            style={{
              width: "100%",
              border: "1px solid gray",
              padding: "5px",
              borderRadius: "15px",
              outline: "none",
            }}
            type="text"
          />
        </div>
        <div>
          <p style={{ margin: "3px 0px" }}>Task Priority:</p>
          <input
            onBlur={(e) => setPriority(e.target.value)}
            style={{
              width: "100%",
              border: "1px solid gray",
              padding: "5px",
              borderRadius: "15px",
              outline: "none",
            }}
            type="text"
          />
        </div>
        <div
          style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
            marginTop: "10px",
          }}
        >
          <div>
            <p style={{ margin: "3px 0px" }}>Cost:</p>
            <input
              onBlur={(e) => setCost(e.target.value)}
              style={{
                width: "100%",
                border: "1px solid gray",
                padding: "5px",
                borderRadius: "15px",
                outline: "none",
              }}
              type="text"
            />
          </div>
          <div>
            <p style={{ margin: "3px 0px" }}>Total Hours:</p>
            <input
              onBlur={(e) => setHours(e.target.value)}
              style={{
                width: "100%",
                border: "1px solid gray",
                padding: "5px",
                borderRadius: "15px",
                outline: "none",
              }}
              type="text"
            />
          </div>
        </div>
        <p style={{ margin: "3px 0px" }}>Add Description:</p>
        <textarea
          style={{
            width: "100%",
            minHeight: "80px",
            maxHeight: "170px",
            border: "1px solid gray",
            padding: "5px",
            borderRadius: "15px",
            outline: "none",
          }}
        ></textarea>
        <UploadButton text="upload project picture" setImage={setImage} />
        <br />
        <br />
        <p style={{ margin: "3px 0px" }}>Set Project Deadline:</p>
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
