import React, { useState } from "react";
import styles from "../../styles/customModal.module.css";

import { DatePicker, Space } from "antd";
const { RangePicker } = DatePicker;

/* A function that takes in props and returns a modal. */
const MyModal = ({ openBtnName, Icon, UploadImage, employee }) => {
  const [open, setOpen] = useState(false);
  const [employeeSelect, setEmployeeSelect] = useState("");
  const [show, setShow] = useState(false);

  /**
   * HandleEmployee is a function that takes in a name and sets the state of employeeSelect to the name
   * that was passed in.
   */
  const handleEmployee = (name) => {
    console.log("hello name", name);
    setEmployeeSelect(name);
  };
  /**
   * When the user clicks the button, toggle the value of the show variable.
   */
  const handleShow = () => {
    setShow((prev) => !prev);
  };
  /**
   * The function handleOpen is a function that takes no parameters and returns a function that takes a
   * parameter called open and returns the opposite of the value of open.
   */
  const handleOpen = () => {
    setOpen((open) => !open);
  };
  /**
   * A function that takes two parameters, date and dateString. It then logs the two parameters to the
   * console.
   */
  const onChange = (date, dateString) => {
    console.log(date, dateString);
  };
  /**
   * A function that is called when the user clicks the OK button.
   */
  const onOk = (value) => {
    console.log("onOk: ", value);
  };
  const handleSubmit = () => {
    console.log("handle submit");
  };
  return (
    <div className={styles.container}>
      <div
        style={{
          width: "150px",
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
          backgroundColor: "#1890FF",
          marginBottom: "10px",
          padding: "1px 10px",
          borderRadius: "5px",
        }}
      >
        <button onClick={handleOpen} className={styles.openbtn}>
          {openBtnName}{" "}
        </button>
        <p
          style={{
            padding: "0px",
            margin: "0px",
            fontSize: "25px",
            cursor: "pointer",
          }}
        >
          {<Icon />}
        </p>
      </div>
      {open && (
        <div className={styles.add_task}>
          {employee && (
            <>
              <p
                style={{
                  color: "black",
                  fontSize: "22px",
                  margin: "0px",
                  padding: "0px",
                }}
              >
                Select Employee
              </p>
              <div onClick={handleShow}>
                <input
                  style={{
                    outline: "none",
                    border: "1px solid gainsboro",
                    width: "100%",
                    padding: "5px 7px",
                    borderRadius: "3px",
                    cursor: "pointer",
                    color: "black",
                  }}
                  type="text"
                  value={employeeSelect ? employeeSelect : "Select Employee"}
                  disabled
                />
              </div>
            </>
          )}
          {show && employeeSelect
            ? null
            : employee.map((emp, index) => {
                return (
                  <p
                    style={{
                      color: "black",
                      fontSize: "18px",
                      cursor: "pointer",
                      margin: "0px ",
                      padding: "0px",
                    }}
                    key={index}
                    onClick={() => handleEmployee(emp.name)}
                  >
                    {emp.name}
                  </p>
                );
              })}

          {UploadImage && (
            <div style={{ display: "flex", gap: "20px", margin: "10px 0px" }}>
              <p style={{ color: "black", margin: "0px", padding: "0px" }}>
                Add png file
              </p>
              <UploadImage />
            </div>
          )}
          <div
            style={{
              display: "flex",
              justifyContent: "space-around",
              gap: "30px",
            }}
          >
            <div style={{ width: "50%" }}>
              <p
                style={{
                  color: "black",
                  margin: "0px",
                  padding: "0px",
                  fontSize: "19px",
                }}
              >
                Explain about task
              </p>
              <textarea
                style={{
                  border: "1px solid gray",
                  outline: "none",
                  color: "black",
                  padding: "4px ",
                  borderRadius: "5px",
                  width: "100%",
                  maxHeight: "200px",
                  minHeight: "80px",
                }}
                type="text"
              />
            </div>
            <div style={{ width: "50%", marginTop: "1px" }}>
              <p
                style={{
                  color: "black",
                  margin: "0px",
                  padding: "0px",
                  fontSize: "19px",
                }}
              >
                Deadline
              </p>
              {/* <DatePicker showTime onChange={onChange} onOk={onOk} /> */}
              <RangePicker
                showTime={{
                  format: "HH:mm",
                }}
                format="YYYY-MM-DD HH:mm"
                onChange={onChange}
                onOk={onOk}
              />
            </div>
          </div>
          <div style={{ display: "flex", justifyContent: "flex-end" }}>
            <button
              onClick={handleSubmit}
              style={{
                backgroundColor: "#1890FF",
                cursor: "pointer",
                border: "none",
                padding: "4px 20px",
                borderRadius: "3px",
              }}
            >
              Submit
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default MyModal;
