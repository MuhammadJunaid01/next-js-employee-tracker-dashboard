import { Col, Row } from "antd";
import React from "react";
import styles from "../styles/allemployee.module.css";
import UserImage from "../public/empolyee.jpg";
import { RadarChartOutlined } from "@ant-design/icons";
import Image from "next/image";
const employee = [
  {
    id: 1,
    employe: "Muhammad Junaid",
    email: "jhon@gmail.com",
    img: UserImage,
    roll: "frontend developer",
    blod: "B+ive",
    phone: "(+88) 01634900664",
    office: "20,andarkilla,Chittagong,Bangladesh. ",
    home: "40, saral bazar, Banskhali, Chittagong,Bangladesh.",
    supportEmail: "support@hotmail.com",
    supportNum: "(+88) 01837893042",
  },
  {
    id: 2,
    employe: "Muhammad Zahid",
    email: "jhon@gmail.com",
    img: UserImage,
    roll: "backend developer",
    blod: "B+ive",
    phone: "(+88) 01634900664",
    office: "20,andarkilla,Chittagong,Bangladesh. ",
    home: "40, saral bazar, Banskhali, Chittagong,Bangladesh.",
    supportEmail: "support@hotmail.com",
    supportNum: "(+88) 01837893042",
  },
  {
    id: 3,
    employe: "Muhammad Sohel",
    email: "jhon@gmail.com",
    img: UserImage,
    roll: "Team Lead",
    blod: "B+ive",
    phone: "(+88) 01634900664",
    office: "20,andarkilla,Chittagong,Bangladesh. ",
    home: "40, saral bazar, Banskhali, Chittagong,Bangladesh.",
    supportEmail: "support@hotmail.com",
    supportNum: "(+88) 01837893042",
  },
  {
    id: 4,
    employe: "Muhammad Mahin",
    email: "jhon@gmail.com",
    img: UserImage,
    roll: "marketing manager",
    blod: "B+ive",
    phone: "(+88) 01634900664",
    office: "20,andarkilla,Chittagong,Bangladesh. ",
    home: "40, saral bazar, Banskhali, Chittagong,Bangladesh.",
    supportEmail: "support@hotmail.com",
    supportNum: "(+88) 01837893042",
  },
  {
    id: 5,
    employe: "Muhammad Harun",
    email: "jhon@gmail.com",
    img: UserImage,
    roll: "Sr. frontend developer",
    blod: "B+ive",
    phone: "(+88) 01634900664",
    office: "20,andarkilla,Chittagong,Bangladesh. ",
    home: "40, saral bazar, Banskhali, Chittagong,Bangladesh.",
    supportEmail: "support@hotmail.com",
    supportNum: "(+88) 01837893042",
  },
  {
    id: 6,
    employe: "Muhammad Parvej",
    email: "jhon@gmail.com",
    img: UserImage,
    roll: "frontend developer",
    blod: "B+ive",
    phone: "(+88) 01634900664",
    office: "20,andarkilla,Chittagong,Bangladesh. ",
    home: "40, saral bazar, Banskhali, Chittagong,Bangladesh.",
    supportEmail: "support@hotmail.com",
    supportNum: "(+88) 01837893042",
  },
  {
    id: 7,
    employe: "Muhammad Akkas",
    email: "jhon@gmail.com",
    img: UserImage,
    roll: "Sr. backend developer",
    blod: "B+ive",
    phone: "(+88) 01634900664",
    office: "20,andarkilla,Chittagong,Bangladesh. ",
    home: "40, saral bazar, Banskhali, Chittagong,Bangladesh.",
    supportEmail: "support@hotmail.com",
    supportNum: "(+88) 01837893042",
  },
  {
    id: 8,
    employe: "Muhammad Jamir",
    email: "jhon@gmail.com",
    img: UserImage,
    roll: "frontend developer",
    blod: "B+ive",
    phone: "(+88) 01634900664",
    office: "20,andarkilla,Chittagong,Bangladesh. ",
    home: "40, saral bazar, Banskhali, Chittagong,Bangladesh.",
    supportEmail: "support@hotmail.com",
    supportNum: "(+88) 01837893042",
  },
];
const allEmployees = () => {
  return (
    <div className={styles.container}>
      <Row gutter={16}>
        {employee?.map((empl, index) => {
          return (
            <Col key={index} xs={24} md={8}>
              <div className={styles.card}>
                <div className={styles.cardAngle}></div>
                <div className={styles.cardItem}>
                  <Image
                    className={styles.image}
                    src={empl.img}
                    height={80}
                    width={80}
                    alt="image"
                  />
                  <div style={{ marginTop: "-16px", marginLeft: "-22px" }}>
                    <p
                      style={{
                        margin: "0px",
                        padding: "0px",
                        fontSize: "17px",
                      }}
                    >
                      {empl.employe}
                    </p>
                    <p style={{ margin: "0px", padding: "0px" }}>{empl.roll}</p>
                  </div>
                </div>
                <div className={styles.cardInfo}>
                  <div style={{ borderRight: "2px solid red", width: "" }}>
                    <p style={{ margin: "0px", padding: "0px" }}>
                      {empl.phone}
                    </p>
                    <p style={{ margin: "0px", padding: "0px" }}>
                      {empl.email}
                    </p>
                    <p style={{ margin: "0px", padding: "0px" }}>{empl.home}</p>
                  </div>
                  <div style={{ width: "70%" }}>
                    <p style={{ margin: "0px", padding: "0px" }}>
                      {empl.supportEmail}
                    </p>
                    <p style={{ margin: "0px", padding: "0px" }}>
                      {empl.supportNum}
                    </p>
                    <p style={{ margin: "0px", padding: "0px" }}>
                      {empl.office}
                    </p>
                  </div>
                </div>
              </div>
            </Col>
          );
        })}
      </Row>
    </div>
  );
};

export default allEmployees;
