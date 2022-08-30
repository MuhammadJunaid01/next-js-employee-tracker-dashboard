import { useState } from "react";
import { Col, Row } from "antd";
import { Modal } from "antd";
import { DatePicker, Space } from "antd";
import { useForm } from "react-hook-form";
import { FaRegEdit } from "react-icons/fa";
import { employeeProfileData } from "../assets/data";
import Button from "../shared/Button";
import Image from "next/image";
import styles from "../styles/employeeProfile.module.css";
import { PlusCircleOutlined } from "@ant-design/icons";
const employeProfile = () => {
  const [modal1Visible, setModal1Visible] = useState(false);
  const [modal2Visible, setModal2Visible] = useState(false);
  const {
    register,
    formState: { errors },
    handleSubmit,
  } = useForm();

  const onSubmit = (data) => console.log(data);
  const onChange = (date, dateString) => {
    console.log(date, dateString);
  };
  return (
    <div className={styles.container}>
      <div style={{ display: "flex" }}>
        <Button name="Dashboard" link="" /> <span>/Profile</span>
      </div>
      <div className={styles.content}>
        <Row gutter={7}>
          {employeeProfileData.map((data, index) => {
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
                        {data.title}
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
                        s
                      >
                        Date of Join:{data.joiningDate}
                      </p>
                      <button className={styles.send_message}>
                        Send Message
                      </button>
                    </div>
                  </div>
                  <div
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
                <Modal
                  centered
                  visible={modal2Visible}
                  onOk={() => setModal2Visible(false)}
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
                  <form onSubmit={handleSubmit(onSubmit)}>
                    <div className={styles.input_box}>
                      <input {...register("name", { required: true })} />
                      <br />
                      {errors.name?.type === "required" && "name is required"}

                      <DatePicker
                        style={{ width: "50%" }}
                        onChange={onChange}
                      />
                      <br />
                      {errors.birthDate && (
                        <p style={{ display: "block" }}>
                          birth Date is required
                        </p>
                      )}
                    </div>

                    <input
                      {...register("email", {
                        required: "Email Address is required",
                      })}
                    />
                    <p>{errors.mail?.message}</p>

                    <input type="submit" />
                  </form>
                </Modal>
              </Col>
            );
          })}
        </Row>
      </div>
    </div>
  );
};

export default employeProfile;
