import React from "react";
import { UploadOutlined } from "@ant-design/icons";
import { Upload, Button } from "antd";

const UploadButton = ({ text, setImage }) => {
  const props = {
    beforeUpload: (file) => {
      const isPNG = file.type === "image/png";

      if (!isPNG) {
        message.error(`${file.name} is not a png file`);
      }

      return isPNG || Upload.LIST_IGNORE;
    },
    onChange: (info) => {
      console.log("info", info);
      console.log(info.fileList);
    },
  };

  return (
    <div>
      <Upload {...props}>
        <Button icon={<UploadOutlined />}>{text}</Button>
      </Upload>
    </div>
  );
};

export default UploadButton;
