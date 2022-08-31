import { useState } from "react";
import { Col, Row } from "antd";
import { Modal } from "antd";
import { DatePicker, Space } from "antd";
import { useForm } from "react-hook-form";
import { FaRegEdit } from "react-icons/fa";
import { employeeProfileData, tabsData } from "../assets/data";
import Button from "../shared/Button";
import Image from "next/image";
import styles from "../styles/employeeProfile.module.css";
import { PlusCircleOutlined } from "@ant-design/icons";
import Employee from "../component/profile/Employee";
const employeProfile = () => {
  const [modal1Visible, setModal1Visible] = useState(false);
  const [modal2Visible, setModal2Visible] = useState(false);
  const [comp, setComp] = useState(undefined);
  const handleSubmitModal = () => {
    setModal2Visible(true);
  };
  const handleTabs = (data) => {
    setComp(data);
  };
  return (
    <div className={styles.container}>
      <div style={{ display: "flex" }}>
        <Button name="Dashboard" link="" /> <span> / Profile</span>
      </div>
      <div className={styles.content}>
        <Row>
          {employeeProfileData?.map((data, index) => {
            return (
              <Col key={index} xs={24} md={24}>
                <div className={styles.data_container}>
                  <div className={styles.profile_sec_1}>
                    <Image
                      style={{ borderRadius: "50%" }}
                      src={data.profileImg}
                      width={100}
                      height={100}
                    ></Image>
                    <div>
                      <h2 style={{ color: "#ABC4CC", margin: "3px 0px" }}>
                        {data.name}
                      </h2>
                      <p
                        style={{
                          margin: "2px 0px",
                          padding: "0",
                          color: "#8E8E8A",
                          fontSize: "16px",
                          lineHeight: "30px",
                        }}
                      >
                        {data.title.toString()}
                      </p>
                      <p
                        style={{
                          margin: "2px 0px",
                          padding: "0",
                          color: "#8E8E8A",
                          fontSize: "16px",
                          lineHeight: "30px",
                        }}
                      >
                        Employee ID: {data.employeeId}
                      </p>
                      <p
                        style={{
                          margin: "2px 0px",
                          padding: "0",
                          color: "#8E8E8A",
                          fontSize: "16px",
                          lineHeight: "30px",
                        }}
                      >
                        Date of Join:{data.joiningDate}
                      </p>
                      <button className={styles.send_message}>
                        Send Message
                      </button>
                    </div>
                  </div>
                  <div
                    className={styles.profile_sec_2}
                    style={{
                      width: "50%",
                      padding: "0px 16px",
                    }}
                  >
                    <p
                      style={{
                        margin: "2px 0px",
                        padding: "0",
                        color: "#BBC4CC",
                        fontSize: "16px",
                        lineHeight: "30px",
                      }}
                    >
                      Phone:
                      <span style={{ marginLeft: "11px" }}>{data.phone}</span>
                    </p>
                    <p
                      style={{
                        margin: "2px 0px",
                        padding: "0",
                        color: "#BBC4CC",
                        fontSize: "16px",
                        lineHeight: "30px",
                      }}
                    >
                      Email:
                      <span style={{ marginLeft: "11px" }}>{data.email}</span>
                    </p>
                    <p
                      style={{
                        margin: "2px 0px",
                        padding: "0",
                        color: "#BBC4CC",
                        fontSize: "16px",
                        lineHeight: "30px",
                      }}
                    >
                      Birthday:
                      <span style={{ marginLeft: "11px" }}>
                        {data.birthDay}
                      </span>
                    </p>
                    <p
                      style={{
                        margin: "2px 0px",
                        padding: "0",
                        color: "#BBC4CC",
                        fontSize: "16px",
                        lineHeight: "30px",
                      }}
                    >
                      Address: <span></span> {data.address}
                    </p>
                    <p
                      style={{
                        margin: "2px 0px",
                        padding: "0",
                        color: "#BBC4CC",
                        fontSize: "16px",
                        lineHeight: "30px",
                      }}
                    >
                      Gender: {data.gender}
                    </p>
                    <p
                      onClick={() => setModal2Visible(true)}
                      className={styles.profileEdit}
                    >
                      <FaRegEdit />
                    </p>
                  </div>
                </div>

                {/* MODAL DATA */}
                <Modal
                  centered
                  visible={modal2Visible}
                  onOk={() => handleSubmitModal()}
                  onCancel={() => setModal2Visible(false)}
                >
                  <div style={{ textAlign: "center" }}>
                    <Image
                      style={{ borderRadius: "50%" }}
                      src={data.profileImg}
                      width={70}
                      height={70}
                    ></Image>
                  </div>
                  <div className={styles.input_box}>
                    <input type="text" />
                  </div>
                </Modal>
              </Col>
            );
          })}
        </Row>
      </div>
      <div className={styles.data_tabs}>
        {tabsData?.map((data, index) => {
          return (
            <div key={index} className={styles.data_tabs_btn_box}>
              <button onClick={() => handleTabs(data.comp)}>{data.name}</button>
            </div>
          );
        })}
      </div>
      {comp ? comp : <Employee />}
    </div>
  );
};

export default employeProfile;
