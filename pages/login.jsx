import styles from "../styles/login.module.css";
import PasswordMask from "react-password-mask";
import { useState } from "react";
import { useForm, SubmitHandler } from "react-hook-form";
import { useDispatch } from "react-redux";
import { useAddUserMutation } from "../redux/reducers/api/auth";
import { useEffect } from "react";
import { useRouter } from "next/router";
import loginLogo from "../public/apply-for-leave.gif";
import Image from "next/image";
import WelcomeLogo from "../public/loginAnimationFile.gif";
import { Col, Row } from "antd";
const Login = () => {
  const dispatch = useDispatch();
  const router = useRouter();
  const [addUser, { data: userDaTa, error, isSuccess }] = useAddUserMutation();
  const { register, handleSubmit: submit, reset } = useForm();
  // const onSubmit = (data) => console.log(data);
  const [password, setPassword] = useState("");
  const [toggle, setToggle] = useState(false);
  const [email, setEmail] = useState("");
  const [name, setName] = useState("");
  const isAdmin = true;
  const toggleHandle = () => {
    setToggle((prev) => !prev);
  };
  const handleSubmit = async (data) => {
    console.log("auth data", data);
    const user = { ...data, isAdmin };
    if (password === "" || name === "" || email === "") {
      alert("Please fill all Form");
      return;
    }
    console.log(user);
    addUser(user);
  };
  useEffect(() => {
    if (userDaTa) {
      localStorage.setItem("user", JSON.stringify(userDaTa));
    }
    console.log("userDaTa", userDaTa);
  }, [userDaTa]);

  return (
    <div className={styles.container}>
      <Row>
        <Col xs={24} md={12}>
          <div style={{ width: "100%", overflow: "hidden" }}>
            <Image src={WelcomeLogo} width={500} height={500}></Image>
          </div>
        </Col>
        <Col xs={24} md={10}>
          <div className={styles.content}>
            <div className={styles.header}>
              <h2>Login</h2>
              <h5 style={{ color: "white", margin: "0px", padding: "0px" }}>
                Access to our dashboard
              </h5>
            </div>

            <form onSubmit={submit(handleSubmit)}>
              <p
                style={{
                  padding: "0px",
                  margin: "0px 0px",
                  marginBottom: "8px",
                  marginLeft: "5px",
                  fontSize: "18px",
                }}
              >
                Name
              </p>
              <input
                style={{ padding: "10px 6px" }}
                className={styles.input}
                {...register("name", { required: true })}
              />
              <p
                style={{
                  padding: "0px",
                  margin: "10px 0px",
                  marginLeft: "5px",
                  fontSize: "18px",
                }}
              >
                Email Address
              </p>
              <input
                style={{ padding: "10px 6px" }}
                className={styles.input}
                type="email"
                {...register("email", { required: true })}
              />
              <p
                style={{
                  padding: "0px",
                  margin: "10px 0px",
                  marginLeft: "5px",
                  fontSize: "18px",
                }}
              >
                Password
              </p>
              <input
                style={{ padding: "10px 6px" }}
                className={styles.input}
                type="password"
                {...register("password", { required: true })}
              />
              <input className={styles.btn} type="submit" />
            </form>
          </div>
        </Col>
        <Col xs={24} md={12}></Col>
      </Row>
    </div>
  );
};

export default Login;
