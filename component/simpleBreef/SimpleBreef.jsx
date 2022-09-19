import React from "react";

const SimpleBreef = ({ Icon, count, title }) => {
  // console.log((Icon = "hello icon undifine"), title, count);

  return (
    <div
      style={{
        backgroundColor: "#16191C",
        display: "flex",
        alignItems: "center",
        justifyContent: "space-between",
        padding: "10px",
        color: "white",
        width: "100%",
      }}
    >
      <div>
        <p
          style={{
            color: "white",
            height: "60px",
            width: "60px",
            borderRadius: "50%",
            backgroundColor: "#453323",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            margin: "0px",
            padding: "0px",
          }}
        >
          {<Icon />}
        </p>
      </div>
      <div>
        <p style={{ color: "white", margin: "0px", padding: "0px" }}>{count}</p>
        <p style={{ color: "white", margin: "0px", padding: "0px" }}>{title}</p>
      </div>
    </div>
  );
};

export default SimpleBreef;
