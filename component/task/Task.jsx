import { useEffect } from "react";
import { useState } from "react";
import useSWR from "swr";
const fetcher = async (url) => {
  const res = await fetch("http://localhost:3004/tasks");
  const data = await res.json();
  return data;
};
const Task = () => {
  const [my, setMy] = useState([]);
  const user = JSON.parse(localStorage.getItem("user"));
  // const user = localStorage.getItem("user");
  const { data, error } = useSWR("/tasks", fetcher);

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
        if (user.email.toLowerCase() === member.value.toLowerCase()) {
          mytask.push(task);
        }
      });
    });

    setMy(mytask);
  }, []);

  const text = "kkmmkmk";
  console.log("my task", my);
  return (
    <div>
      <h1>hhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhh</h1>
    </div>
  );
};

export default Task;
