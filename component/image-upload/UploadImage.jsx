import { DownloadOutlined } from "@ant-design/icons";
import React, { useState } from "react";
import ImageUploading from "react-images-uploading";

const UploadImage = () => {
  const [images, setImages] = useState([]);
  const maxNumber = 69;

  /**
   * OnChange is a function that takes two arguments, imageList and addUpdateIndex, and returns
   * undefined.
   */
  const onChange = (imageList, addUpdateIndex) => {
    // data for submit
    console.log(imageList, addUpdateIndex);
    setImages(imageList);
  };

  return (
    <div>
      <div className="App">
        <ImageUploading
          multiple
          value={images}
          onChange={onChange}
          maxNumber={maxNumber}
          dataURLKey="data_url"
        >
          {({
            imageList,
            onImageUpload,
            onImageRemoveAll,
            onImageUpdate,
            onImageRemove,
            isDragging,
            dragProps,
          }) => (
            // write your building UI
            <div className="upload__image-wrapper">
              <div style={{ display: "flex", gap: "20px" }}>
                <button
                  style={{ color: "black", cursor: "pointer" }}
                  onClick={onImageUpload}
                  {...dragProps}
                >
                  Click or Drop here
                  <DownloadOutlined style={{ fontSize: "20px" }} />
                </button>
              </div>
              &nbsp;
              {imageList.map((image, index) => (
                <div key={index} className="image-item">
                  <img src={image["data_url"]} alt="" width="100" />
                  <div className="image-item__btn-wrapper">
                    <button onClick={() => onImageUpdate(index)}>Update</button>
                    <button onClick={() => onImageRemove(index)}>Remove</button>
                  </div>
                </div>
              ))}
            </div>
          )}
        </ImageUploading>
      </div>
    </div>
  );
};

export default UploadImage;
