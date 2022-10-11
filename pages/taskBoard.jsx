import React, { useState } from "react";
import styles from "../styles/tasksBoard.module.css";
import {
  ReOrderableItem,
  ReOrderableList,
  ReOrderableListGroup,
} from "react-reorderable-list";
import "react-reorderable-list/dist/index.css";
import MyModal from "../component/custom-modal/MyModal";
import { Button, Modal } from "antd";
import { PlusCircleOutlined } from "@ant-design/icons";
import UploadImage from "../component/image-upload/UploadImage";

const taskBoard = () => {
  const tasks = [
    { name: "h1" },
    { name: "h2" },
    { name: "h3" },
    { name: "h4" },
    { name: "h5" },
    { name: "h6" },
  ];
  const [groups, setGroup] = useState([
    {
      id: 1,
      name: "Tasks",
      tasks: [
        { id: 1, name: "complete login" },
        { id: 2, name: "Hello" },
        { id: 3, name: "World!" },
      ],
    },
    {
      id: 2,
      name: "Progress",
      tasks: [
        { id: 1, name: "Item" },
        { id: 2, name: "Name" },
      ],
    },
    {
      id: 3,
      name: "Complete",
      tasks: [
        { id: 1, name: "Item" },
        { id: 2, name: "Name" },
      ],
    },
  ]);
  const handleReorder = (id) => {
    // console.log(id);
  };
  const l = (d) => {
    console.log(d);
  };
  return (
    <div className={styles.container}>
      <MyModal
        openBtnName="create Task"
        UploadImage={UploadImage}
        Icon={PlusCircleOutlined}
      />

      <div className={styles.content}>
        <ReOrderableListGroup
          //The name for this group must be unique as this serves as the identifier
          //when validating if the item should be transfered to the list or not.
          //Items can only be transferred to the list with the same group name.
          name="uniqueGroupName"
          //group data
          group={groups}
          //update list group
          onListGroupUpdate={(newList) => setGroup(newList)}
        >
          {groups.map((list, index) => (
            //here we use the path property to access the list array from the object

            <ReOrderableList key={`list-${index}`} path={`${index}.tasks`}>
              <p
                className={styles.orderList_name}
                style={{
                  border: "2px solid gray",
                  padding: "4px 10px",
                  borderRadius: "5px",
                  margin: "0px",
                }}
              >
                {list.name}
              </p>

              {list.tasks.map((data, index) => (
                <ReOrderableItem
                  onItemDragEnd={() => l(data)}
                  key={`item-${index}`}
                >
                  <div
                    style={{
                      backgroundColor: "",
                    }}
                  >
                    <h4
                      onClick={() => handleReorder(data)}
                      style={{
                        cursor: "pointer",
                        padding: "4px",
                        border: "1px solid gray",
                        width: "90%",
                        margin: "0 auto",
                        borderRadius: "6px",
                        color: "white",
                        marginTop: "9px",
                      }}
                    >
                      {data.name}
                    </h4>
                  </div>
                </ReOrderableItem>
              ))}
            </ReOrderableList>
          ))}
        </ReOrderableListGroup>
      </div>
    </div>
  );
};

export default taskBoard;
