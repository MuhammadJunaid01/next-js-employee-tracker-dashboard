import React, { useEffect, useState } from "react";
// import { Badge, Calendar } from "antd";

import AbsentEmployeeList from "../component/absentEmployee-list";
import LeaveCalendar from "../component/leave-calendar/Index";
import {
  useApplyLeaveMutation,
  useGetApplyEmployeeQuery,
} from "../redux/reducers/apply-for-leave";

const leavsEmploy = () => {
  /* A hook that is used to call the mutation. */
  const [applyLeave, { data, error, isSuccess }] = useApplyLeaveMutation();
  const { data: applyLeaveData } = useGetApplyEmployeeQuery();
  const [open, setOpen] = useState(false);
  const [multipleDate, setMultipleDate] = useState();
  const [reason, setReason] = useState("");
  const [employee, setEmployee] = useState("");

  const absent = [
    { date: [10], month: 1, reson: "this sick" },
    { date: [22, 23, 24], month: 2, reson: "this oooo" },
    { date: [1], month: 5, reson: "this pppppp" },
    { date: [12, 13, 14, 18, 28], month: 9, reson: "this 122222" },
    { date: [18], month: 9, reson: "this 18888" },
    { date: [25, 26, 27], month: 10, reson: "this 255555" },
  ];
  /* A hook that is called when the component is mounted. */
  useEffect(() => {
    const empl = JSON.parse(localStorage.getItem("user"));
    setEmployee(empl);
  }, []);
  console.log("applyLeaveData", applyLeaveData);

  /**
   * When the user clicks the button, the function will be called and the data will be sent to the
   * server.
   */
  const handleApplyLeave = () => {
    if (multipleDate === "" || reason === "") {
      return alert("vhvghv");
    }
    const data = {
      reason: reason,
      multipleDate: multipleDate,
      employee: employee.user.email,
    };
    console.log();
    applyLeave(data);
  };
  return (
    <div>
      <LeaveCalendar
        setMultipleDate={setMultipleDate}
        buttonText={"Select date for leave"}
        setReason={setReason}
        applyBtnText={"Apply for leave"}
        handleApplyLeave={handleApplyLeave}
      />

      <AbsentEmployeeList absentEmployee={absent} />
    </div>
  );
};

export default leavsEmploy;
