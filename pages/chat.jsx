import {
  BellOutlined,
  SearchOutlined,
  PlusCircleOutlined,
} from "@ant-design/icons";
import { Col, Row } from "antd";
import Image from "next/image";
import React from "react";
import styles from "../styles/chat.module.css";
import User from "../public/empolyee.jpg";
const chat = () => {
  const users = [
    { name: "junaid" },
    { name: "Sohel" },
    { name: "Zahed" },
    { name: "Mahin" },
    { name: "Hasan" },
    { name: "Hossain" },
    { name: "Karim" },
    { name: "Jamir" },
    { name: "Jaker" },
    { name: "Faruk" },
  ];
  const groups = [
    { name: "web development" },
    { name: "app development" },
    { name: "UI/UX Designer" },
  ];
  return (
    <div className={styles.container}>
      <div className={styles.top_bar}>
        <div className={styles.searchBar}>
          <p>
            <SearchOutlined />
          </p>
          <input type="text" placeholder="Find person,group name..." />
        </div>
        <div style={{ display: "flex", alignItems: "center", gap: "22px" }}>
          <p style={{ margin: "0px", padding: "0px", fontSize: "22px" }}>
            <BellOutlined />
          </p>
          <Image
            style={{ borderRadius: "50%" }}
            src={User}
            height={45}
            width={45}
          ></Image>
        </div>
      </div>
      <Row gutter={16}>
        <Col xs={24} md={6}>
          <div className={styles.messageList}>
            <div style={{ display: "flex", justifyContent: "space-between" }}>
              <p style={{ margin: "0px", padding: "0px" }}>Message</p>
              <p style={{ margin: "0px", padding: "0px" }}>
                <PlusCircleOutlined />
              </p>
            </div>
          </div>
        </Col>
        <Col xs={24} md={6}></Col>
        <Col xs={24} md={6}></Col>
      </Row>
    </div>
  );
};

export default chat;
