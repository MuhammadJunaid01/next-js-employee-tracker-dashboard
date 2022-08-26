import styles from "../styles/login.module.css";
import PasswordMask from "react-password-mask";
import { useState } from "react";
import { EyeInvisibleOutlined, EyeTwoTone } from "@ant-design/icons";
import { Input, Space } from "antd";

const login = () => {
  const [password, setPassword] = useState("");
  const [toggle, setToggle] = useState(false);
  const [email, setEmail] = useState("");
  const isAdmin = false;
  const toggleHandle = () => {
    setToggle((prev) => !prev);
  };
  const handleSubmit = async () => {
    const res = await fetch("  http://localhost:3004/users", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ email, password, isAdmin }),
    });
    const data = await res.json();
    console.log("data", data);
  };
  return (
    <div className={styles.container}>
      <div className={styles.content}>
        <div className={styles.header}>
          <h2>Login</h2>
          <h5 style={{ color: "white" }}>Access to our dashboard</h5>
        </div>
        <div style={{ padding: "0px", marginBottom: "15px " }}>
          <p
            style={{
              padding: "0px",
              marginBottom: "2px",
              marginLeft: "5px",
              fontSize: "18px",
            }}
          >
            Email Address
          </p>
          <input
            onBlur={(e) => setEmail(e.target.value)}
            style={{ padding: "10px 6px" }}
            className={styles.input}
            type="text"
          />
        </div>
        <div>
          <p
            style={{
              marginBottom: "2px",
              marginLeft: "5px",
              fontSize: "18px",
            }}
          >
            Password
          </p>
          <div>
            <input
              onBlur={(e) => setPassword(e.target.value)}
              type="password"
              style={{ padding: "10px 6px" }}
              className={styles.input}
            />
          </div>
        </div>
        <div className={styles.btn}>
          <button onClick={handleSubmit}>Login</button>
        </div>
      </div>
    </div>
  );
};

export default login;
