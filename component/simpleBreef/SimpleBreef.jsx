import React from "react";

const SimpleBreef = ({ Icon, title, count }) => {
  // console.log((Icon = "hello icon undifine"), title, count);

  return (
    <div
      style={{
        backgroundColor: "#16191C",
        display: "flex",
        alignItems: "center",
        justifyContent: "space-around",
        padding: "10px",
        color: "white",
      }}
    >
      <div>
        <p
          style={{
            color: "white",
            height: "80px",
            width: "80px",
            borderRadius: "50%",
            backgroundColor: "#453323",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          {<Icon />}
        </p>
      </div>
      <div>
        <p style={{ color: "white" }}>{title}</p>
        <p style={{ color: "white" }}>{count}</p>
      </div>
    </div>
  );
};

export default SimpleBreef;
