import { UpCircleOutlined } from "@ant-design/icons";
import React from "react";
import SimpleBreef from "../simpleBreef/SimpleBreef";
import { FaThLarge } from "react-icons/fa";
import { Col, Row } from "antd";
import BarChart from "../chart/BarChart";
import BumpChart from "../chart/BumpChart";

const DashBoardAdminHome = ({ Icon, title }) => {
  return (
    <div>
      <h1>hello home</h1>
      <Row gutter={16}>
        <Col xs={24} md={6}>
          <SimpleBreef Icon={FaThLarge} count={20} title={"Projects"} />
        </Col>
        <Col xs={24} md={6}>
          <SimpleBreef Icon={FaThLarge} count={20} title={"Projects"} />
        </Col>
        <Col xs={24} md={6}>
          <SimpleBreef Icon={FaThLarge} count={20} title={"Projects"} />
        </Col>
        <Col xs={24} md={6}>
          <SimpleBreef Icon={FaThLarge} count={20} title={"Projects"} />
        </Col>
        <Col xs={24} md={12}>
          <BarChart />
        </Col>
        <Col xs={24} md={12}>
          <BumpChart />
        </Col>
      </Row>
    </div>
  );
};

export default DashBoardAdminHome;
