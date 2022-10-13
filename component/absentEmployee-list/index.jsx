import React from "react";
import { Badge, Calendar } from "antd";

const AbsentEmployeeList = ({ absentEmployee }) => {
  const getListData = (value) => {
    // console.log(value);
    let listData;

    absentEmployee.map((data) => {
      data.date.map((date) => {
        if (date == value.date() && value._d.getMonth() == data.month) {
          listData = [
            {
              type: "njjnjnnjnjknj",
              content: data.reson,
            },
          ];
        }
      });
    });
    return listData || [];
  };

  const getMonthData = (value) => {
    if (value.month()) {
      return 1394;
    }
  };
  const monthCellRender = (value) => {
    const num = getMonthData(value);
    console.log("hello num", num);
    return num ? (
      <div className="notes-month">
        <section>{num}</section>
        <span>Backlog number</span>
      </div>
    ) : (
      "ncvdnv k vfckxv bfxlb v"
    );
  };

  const dateCellRender = (value) => {
    const listData = getListData(value);
    return (
      <ul className="events">
        {listData.map((item) => (
          <li key={item.content}>
            <Badge status={item.type} text={item.content} />
          </li>
        ))}
      </ul>
    );
  };

  return (
    <div>
      <Calendar
        dateCellRender={dateCellRender}
        monthCellRender={monthCellRender}
      />
    </div>
  );
};

export default AbsentEmployeeList;
