import React, { useState } from "react";
import {
  ReOrderableItem,
  ReOrderableList,
  ReOrderableListGroup,
} from "react-reorderable-list";
import "react-reorderable-list/dist/index.css";
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
    <div>
      <h1>hello task board</h1>
      <div style={{ display: "flex", gap: "20px" }}>
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
              <p style={{ border: "2px solid gray" }}>{list.name}</p>
              {list.tasks.map((data, index) => (
                <ReOrderableItem
                  onItemDragEnd={() => l(data)}
                  key={`item-${index}`}
                >
                  <div style={{ backgroundColor: "" }}>
                    <h1
                      onClick={() => handleReorder(data)}
                      style={{ cursor: "pointer" }}
                    >
                      {data.name}
                    </h1>
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
