import React, { useState } from "react";
import styles from "../../styles/customModal.module.css";
const MyModal = ({ openBtnName, Icon }) => {
  const [open, setOpen] = useState(false);
  return (
    <div>
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
        <button className={styles.openbtn}>{openBtnName} </button>
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
    </div>
  );
};

export default MyModal;
