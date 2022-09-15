import { useRouter } from "next/router";
import { useEffect } from "react";
import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import Login from "../pages/login";
const AuthCheck = ({ children }) => {
  const [user, setUser] = useState(undefined);
  useEffect(() => {
    if (typeof window !== "undefined") {
      const userHard = JSON.parse(localStorage.getItem("user"));
      setUser(userHard);
    }
  }, []);
  const router = useRouter();
  // const user = false;
  if (!user) {
    return <Login />;
  } else {
    return children;
  }
};

export default AuthCheck;
