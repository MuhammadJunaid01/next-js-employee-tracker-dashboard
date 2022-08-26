import React, { useState } from "react";
import { useSelector } from "react-redux";

import { Button, Menu } from "antd";
import styles from "../../styles/sidebar.module.css";
import { items } from "../../assets/data";

const SideBarMenu = () => {
  const { coollapse } = useSelector((stae) => stae.collapse);
  console.log("collapse", coollapse);
  const [current, setCurrent] = useState("1");

  const handle = (t) => {
    console.log("object", t);
  };
  return (
    <div className={styles.container}>
      <div className={styles.content}>
        <Menu
          style={{
            paddingBottom: "30px ",
          }}
          onClick={handle}
          defaultSelectedKeys={["1"]}
          defaultOpenKeys={["sub1"]}
          mode="inline"
          theme="dark"
          inlineCollapsed={coollapse}
          items={items}
        />
      </div>
    </div>
  );
};

export default SideBarMenu;
