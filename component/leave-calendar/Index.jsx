import { Col, Row } from "antd";
import React, { useState } from "react";
import Calendar from "react-select-date";
import Image from "next/image";
import apllyLogo from "../../public/apply-for-leave.gif";
/* A function component. */
const LeaveCalendar = ({
  buttonText,
  setMultipleDate,
  setReason,
  applyBtnText,
  handleApplyLeave,
}) => {
  const [show, setShow] = useState(false);
  return (
    <div style={{ color: "black", marginBottom: "10px", marginTop: "50px" }}>
      <Row gutter={16}>
        <Col xs={24} md={7}></Col>
        <Col xs={24} md={10}>
          <div
            style={{
              background: "transparent",
              border: "1px solid #1890FF",
              borderRadius: "5px",
              padding: "0px 10px",
            }}
          >
            <div style={{ width: "50%", margin: "0 auto", marginTop: "-50px" }}>
              <Image src={apllyLogo} height="200px" width="200px"></Image>
            </div>
            <input
              style={{
                display: "block",
                width: "90%",
                margin: "0 auto",
                background: "transparent",
                color: "white",
                border: "1px solid #1890FF",
                outline: "none",
                padding: "6px 7px ",
                borderRadius: "5px",
                marginBottom: "9px",
              }}
              type="text"
              placeholder="write your leave for reason! "
              onBlur={(e) => setReason(e.target.value)}
            />

            <button
              onClick={() => setShow((prev) => !prev)}
              style={{
                cursor: "pointer",
                backgroundColor: "transparent",
                padding: "5px 20px",
                border: "1px solid #1890FF",
                color: "white",
                borderRadius: "5px",
                display: "block",
                width: "90%",
                margin: "0 auto",
                marginBottom: "9px",
              }}
            >
              {buttonText}
            </button>
            <button
              onClick={handleApplyLeave}
              style={{
                cursor: "pointer",
                backgroundColor: "transparent",
                padding: "5px 20px",
                border: "1px solid #1890FF",
                color: "white",
                borderRadius: "5px",
                display: "block",
                width: "90%",
                margin: "0 auto",
                marginBottom: "9px",
              }}
            >
              {applyBtnText}
            </button>
          </div>
          {show && (
            <div style={{ color: "black", marginLeft: "60px" }}>
              <Calendar
                onSelect={(date) => setMultipleDate(date)}
                templateClr="blue"
                selectDateType="multiple"
                showDateInputField={false}
              />
            </div>
          )}
        </Col>
      </Row>
    </div>
  );
};

export default LeaveCalendar;
