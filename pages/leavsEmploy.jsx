import React, { useState } from "react";
// import { Badge, Calendar } from "antd";

import AbsentEmployeeList from "../component/absentEmployee-list";
import LeaveCalendar from "../component/leave-calendar/Index";

const leavsEmploy = () => {
  const [open, setOpen] = useState(false);
  const [multipleDate, setMultipleDate] = useState();
  const [reason, setReason] = useState("");
  console.log("multipleDate", multipleDate);
  const absent = [
    { date: [10], month: 1, reson: "this sick" },
    { date: [22, 23, 24], month: 2, reson: "this oooo" },
    { date: [1], month: 5, reson: "this pppppp" },
    { date: [12, 13, 14, 18, 28], month: 9, reson: "this 122222" },
    { date: [18], month: 9, reson: "this 18888" },
    { date: [25, 26, 27], month: 10, reson: "this 255555" },
  ];
  return (
    <div>
      <LeaveCalendar
        setMultipleDate={setMultipleDate}
        buttonText={"Select date for leave"}
        setReason={setReason}
        applyBtnText={"Apply for leave"}
      />

      <AbsentEmployeeList absentEmployee={absent} />
    </div>
  );
};

export default leavsEmploy;
