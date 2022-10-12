import { Col, Row } from "antd";
import React from "react";
import { useEffect } from "react";
import useHolyDays from "../utils/getHolydays";

const holyDays = () => {
  /* Destructuring the return value of the useHolyDays hook. */
  const [contrys, holydays] = useHolyDays("BD");

  return (
    <div>
      <Row gutter={16}>
        {holydays?.map((holy, index) => {
          return (
            <Col xs={24} md={6} key={index}>
              <div
                style={{
                  backgroundColor: "gray",
                  padding: "5px 7px",
                  borderRadius: "5px",
                  marginBottom: "10px",
                }}
              >
                <p style={{ margin: "0px", padding: "0px", color: "white" }}>
                  {holy.date}
                </p>
                <p style={{ margin: "0px", padding: "0px", color: "white" }}>
                  {holy.name}
                </p>
                <p style={{ margin: "0px", padding: "0px", color: "white" }}>
                  {holy.rule}
                </p>

                <p style={{ margin: "0px", padding: "0px", color: "white" }}>
                  {holy.start.getDay()}-{holy.start.getMonth()}-
                  {holy.start.getFullYear()}
                </p>
                {/* <p style={{ margin: "0px", padding: "0px", color: "white" }}>
                  {holy.start}
                </p> */}
                {/* <p style={{ margin: "0px", padding: "0px", color: "white" }}>
                  {holy.date}
                </p>
                <p style={{ margin: "0px", padding: "0px", color: "white" }}>
                  start Date: {holy.start}
                </p>
                <p style={{ margin: "0px", padding: "0px", color: "white" }}>
                  end Date: {holy.end}
                </p>
                <p style={{ margin: "0px", padding: "0px", color: "white" }}>
                  name: {holy.name}
                </p> */}
              </div>
            </Col>
          );
        })}
      </Row>
    </div>
  );
};

export default holyDays;
