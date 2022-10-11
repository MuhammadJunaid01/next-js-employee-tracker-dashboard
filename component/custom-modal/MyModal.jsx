import React, { useState } from "react";
import styles from "../../styles/customModal.module.css";
import { Modal } from "react-responsive-modal";
import "react-responsive-modal/styles.css";

const MyModal = ({ openBtnName, Icon, UploadImage }) => {
  const [open, setOpen] = useState(false);
  const lorem = (
    <p>
      Mauris ac arcu sit amet dui interdum bibendum a sed diam. Praesent rhoncus
      congue ipsum elementum lobortis. Ut ligula purus, ultrices id condimentum
      quis, tincidunt quis purus. Proin quis enim metus. Nunc feugiat odio at
      eros porta, ut rhoncus lorem tristique. Nunc et ipsum eu ex vulputate
      consectetur vel eu nisi. Donec ultricies rutrum lectus, sit ame feugiat
      est semper vitae. Proin varius imperdiet consequat. Proin eu metus nisi.
      In hac habitasse platea dictumst. Vestibulum ac ultrices risus.
      Pellentesque arcu sapien, aliquet sed orci sit amet, pulvinar interdum
      velit. Nunc a rhoncus ipsum, maximus fermentum dolor. Praesent aliquet
      justo vitae rutrum volutpat. Ut quis pulvinar est.
    </p>
  );
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
        <button onClick={() => setOpen(true)} className={styles.openbtn}>
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
      <Modal open={open} onClose={() => setOpen(false)}>
        <h2>Big modal</h2>
        {UploadImage && <UploadImage />}
      </Modal>
    </div>
  );
};

export default MyModal;
