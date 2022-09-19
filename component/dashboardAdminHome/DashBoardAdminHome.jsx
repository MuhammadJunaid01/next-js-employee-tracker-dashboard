import { UpCircleOutlined } from "@ant-design/icons";
import React from "react";
import SimpleBreef from "../simpleBreef/SimpleBreef";
import { FaMemory } from "react-icons/fa";

const DashBoardAdminHome = ({ Icon, title }) => {
  return (
    <div>
      <h1>hello home</h1>
      <SimpleBreef
        Icon={FaMemory}
        title={"props from dashboard admin jjjjjjj"}
      />
    </div>
  );
};

export default DashBoardAdminHome;
