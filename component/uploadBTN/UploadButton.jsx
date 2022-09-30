import React from "react";
import { InboxOutlined, UploadOutlined } from "@ant-design/icons";
import { message, Upload, Button } from "antd";
import ImgCrop from "antd-img-crop";
import { useState } from "react";
const { Dragger } = Upload;

const UploadButton = ({ text, setImage }) => {
  /* A function that is being called in the Upload component. */
  const props = {
    name: "file",
    multiple: true,

    onChange(info) {
      const { status } = info.file;
      console.log("file onch", info.file.originFileObj);
      setImage(info.file.originFileObj);
      if (status !== "uploading") {
        console.log(info.file, info.fileList);
      }

      if (status === "done") {
        message.success(`${info.file.name} file uploaded successfully.`);
      } else if (status === "error") {
        message.error(`${info.file.name} file upload failed.`);
      }
    },

    onDrop(e) {
      console.log("Dropped files", e.dataTransfer.files);
    },
  };

  return (
    <div>
      <Dragger {...props}>
        <p className="ant-upload-drag-icon">
          <InboxOutlined />
        </p>
        <p className="ant-upload-text">
          Click or drag file to this area to upload
        </p>
        <p className="ant-upload-hint">
          Support for a single or bulk upload. Strictly prohibit from uploading
          company data or other band files
        </p>
      </Dragger>
    </div>
  );
};

export default UploadButton;
