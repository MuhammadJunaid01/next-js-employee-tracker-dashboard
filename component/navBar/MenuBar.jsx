import {
  RadarChartOutlined,
  MenuUnfoldOutlined,
  SearchOutlined,
  BellOutlined,
  MessageOutlined,
} from "@ant-design/icons";
import { useDispatch, useSelector } from "react-redux";
import React, { useState } from "react";
import styles from "../../styles/menubar.module.css";
import { collapseMenu } from "../../redux/reducers/collapse/collapse";
const MenuBar = () => {
  const dispatch = useDispatch();
  const { coollapse } = useSelector((stae) => stae.collapse);
  const handleCollapse = () => {
    dispatch(collapseMenu());
  };

  return (
    <div className={styles.menu_bar_container}>
      <div className={styles.menubar_content}>
        <div
          style={{
            display: "flex",
            alignItems: "center",

            width: "30%",
          }}
        >
          <div style={coollapse ? {} : { width: "40%" }}>
            <RadarChartOutlined style={{ fontSize: "40px" }} />
          </div>
          <div>
            <MenuUnfoldOutlined
              style={{ fontSize: "20px" }}
              onClick={handleCollapse}
            />
          </div>
        </div>
        <div className={styles.notificationMSG_container}>
          <div className={styles.serch_box}>
            <input type="text" />
            <p>
              <SearchOutlined />
            </p>
          </div>
          <p>
            <BellOutlined />
          </p>
          <p>
            <MessageOutlined />
          </p>

          <span>pro</span>
        </div>
      </div>
    </div>
  );
};

export default MenuBar;
