import styles from "../styles/login.module.css";
import PasswordMask from "react-password-mask";
import { useState } from "react";
import { useForm, SubmitHandler } from "react-hook-form";
import { useDispatch } from "react-redux";
import { useAddUserMutation } from "../redux/reducers/auth";
const login = () => {
  const dispatch = useDispatch();
  const [addUser, { data: user, error, isSuccess }] = useAddUserMutation();
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
    console.log(user);
    addUser(user);
    // if (user) {
    //   reset();
    // }
  };
  console.log("user", user);
  return (
    <div className={styles.container}>
      <div className={styles.content}>
        <div className={styles.header}>
          <h2>Login</h2>
          <h5 style={{ color: "white" }}>Access to our dashboard</h5>
        </div>

        <form onSubmit={submit(handleSubmit)}>
          <p
            style={{
              padding: "0px",
              margin: "10px 0px",
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
    </div>
  );
};

export default login;
