import React, { useState } from "react";
import { Badge, Calendar } from "antd";
import AbsentEmployeeList from "../component/absentEmployee-list";

const leavsEmploy = () => {
  const [open, setOpen] = useState(false);
  const absent = [
    { date: 10, reson: "this sick" },
    { date: 14, reson: "this oooo" },
    { date: 1, reson: "this pppppp" },
    { date: 12, reson: "this 122222" },
    { date: 18, reson: "this 18888" },
    { date: 25, reson: "this 255555" },
  ];
  return (
    <div>
      <AbsentEmployeeList absentEmployee={absent} />
    </div>
  );
};

export default leavsEmploy;
