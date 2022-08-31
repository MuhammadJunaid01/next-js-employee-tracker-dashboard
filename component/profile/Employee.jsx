import { Row } from "antd";
import { employeeProfileData } from "../../assets/data";
import { Timeline } from "antd";

import styles from "../../styles/employee.module.css";
const Employee = () => {
  return (
    <div className={styles.container}>
      {employeeProfileData?.map((data, index) => {
        return (
          <div className={styles.content} key={index}>
            {data?.profileDetails?.map((proData, i) => {
              return (
                <div key={i}>
                  <div className={styles.peronalnfo}>
                    <h3>Personal Informations</h3>
                    <div
                      style={{
                        display: "flex",
                        justifyContent: "space-between",
                      }}
                    >
                      <p>Passport No: </p>
                      <p>{proData.passport}</p>
                    </div>
                    <div
                      style={{
                        display: "flex",
                        justifyContent: "space-between",
                      }}
                    >
                      <p>Passport Exp Date: </p>
                      <p>{proData.passportExp}</p>
                    </div>
                    <div
                      style={{
                        display: "flex",
                        justifyContent: "space-between",
                      }}
                    >
                      <p>phone:</p>
                      <p>{proData.phone}</p>
                    </div>
                    <div
                      style={{
                        display: "flex",
                        justifyContent: "space-between",
                      }}
                    >
                      <p>Nationality :</p>
                      <p>{proData.nattionality}</p>
                    </div>
                    <div
                      style={{
                        display: "flex",
                        justifyContent: "space-between",
                      }}
                    >
                      <p>Religion :</p>
                      <p>{proData.religion}</p>
                    </div>
                    <div
                      style={{
                        display: "flex",
                        justifyContent: "space-between",
                      }}
                    >
                      <p>Marital status :</p>
                      <p>{proData.maritalStatus}</p>
                    </div>
                  </div>
                </div>
              );
            })}
            {data?.emerGencyContact?.map((emer, i) => {
              return (
                <div key={i}>
                  <div className={styles.emerGencyContact}>
                    <h3>Emergency Contact </h3>
                    <p>Primary</p>
                    <div
                      style={{
                        display: "flex",
                        justifyContent: "space-between",
                      }}
                    >
                      <p style={{ margin: "0px" }}>Name:</p>
                      <p style={{ margin: "0px" }}>{emer.name}</p>
                    </div>
                    <div
                      style={{
                        display: "flex",
                        justifyContent: "space-between",
                      }}
                    >
                      <p style={{ margin: "4px 0px" }}>Relationship :</p>
                      <p style={{ margin: "2px 0px" }}>{emer.rela}</p>
                    </div>
                    <div
                      style={{
                        display: "flex",
                        justifyContent: "space-between",
                        borderBottom: "1px dashed gray",
                      }}
                    >
                      <p style={{ margin: "4px 0px" }}>Phone :</p>
                      <p style={{ margin: "2px 0px" }}>{emer.phone}</p>
                    </div>
                    {/* secoundary info */}
                    <p style={{ margin: "5px 0px" }}>Secoundary</p>
                    <div
                      style={{
                        display: "flex",
                        justifyContent: "space-between",
                      }}
                    >
                      <p style={{ margin: "2px 0px" }}>Name :</p>
                      <p style={{ margin: "2px 0px" }}>{emer.scNmae}</p>
                    </div>
                    <div
                      style={{
                        display: "flex",
                        justifyContent: "space-between",
                      }}
                    >
                      <p style={{ margin: "2px 0px" }}>Relationship :</p>
                      <p style={{ margin: "2px 0px" }}>{emer.scRela}</p>
                    </div>
                    <div
                      style={{
                        display: "flex",
                        justifyContent: "space-between",
                      }}
                    >
                      <p style={{ margin: "2px 0px" }}>Phone :</p>
                      <p style={{ margin: "2px 0px" }}>{emer.scPhone}</p>
                    </div>
                  </div>
                </div>
              );
            })}
            {data?.bankInfo?.map((bank, i) => {
              return (
                <div key={i}>
                  <div className={styles.bankInfo}>
                    <h3>Bank information</h3>
                    <div
                      style={{
                        display: "flex",
                        justifyContent: "space-between",
                      }}
                    >
                      <p style={{ margin: "2px 0px" }}>Bank name :</p>
                      <p style={{ margin: "2px 0px" }}>{bank.bankName}</p>
                    </div>
                    <div
                      style={{
                        display: "flex",
                        justifyContent: "space-between",
                      }}
                    >
                      <p style={{ margin: "2px 0px" }}>Bank account No. :</p>
                      <p style={{ margin: "2px 0px" }}>{bank.acc}</p>
                    </div>
                    <div
                      style={{
                        display: "flex",
                        justifyContent: "space-between",
                      }}
                    >
                      <p style={{ margin: "2px 0px" }}>Bank name :</p>
                      <p style={{ margin: "2px 0px" }}>{bank.bankName}</p>
                    </div>
                  </div>
                </div>
              );
            })}
            {data?.experience?.map((exp, i) => {
              return (
                <div key={i}>
                  <div className={styles.experience}>
                    <h3>Experience</h3>
                    {/* <p>Bank name : {exp.first}</p> */}
                    <Timeline.Item label={""}>
                      <div style={{}}>
                        <p style={{ margin: "0px" }}>{exp.first}</p>
                        <p
                          style={{
                            margin: "0px 0px",
                            color: "gray",
                            fontSize: "13px",
                          }}
                        >
                          {exp.firstjobDate}
                        </p>
                      </div>
                    </Timeline.Item>
                    <Timeline.Item label={""}>
                      <div style={{}}>
                        <p style={{ margin: "0px" }}>{exp.secound}</p>
                        <p
                          style={{
                            margin: "0px 0px",
                            color: "gray",
                            fontSize: "13px",
                          }}
                        >
                          {exp.secoundjobDate}
                        </p>
                      </div>
                    </Timeline.Item>
                    <Timeline.Item label={""}>
                      <div style={{}}>
                        <p style={{ margin: "0px" }}>{exp.third}</p>
                        <p
                          style={{
                            margin: "0px 0px",
                            color: "gray",
                            fontSize: "13px",
                          }}
                        >
                          {exp.thirdjobDate}
                        </p>
                      </div>
                    </Timeline.Item>
                  </div>
                </div>
              );
            })}
          </div>
        );
      })}
    </div>
  );
};

export default Employee;
