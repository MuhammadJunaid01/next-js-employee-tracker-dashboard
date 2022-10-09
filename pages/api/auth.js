import connectDb from "../../utils/connectDb";
import User from "../../utils/models/auth_model";

const authHandler = async (req, res) => {
  await connectDb();
  console.log("DB Connent Succesfull! ");

  if (req.method === "POST") {
    const { name, email, password, isAdmin } = req.body;
    // console.log("hello req body", req.body);
    try {
      const userExist = await User.findOne({ email: email });
      if (userExist) {
        console.log("USER EXIST", userExist);
        return res.status(404).json({ message: "something was wrong!" });
      } else {
        const user = await User.create({
          name,
          email,
          password,
          isAdmin,
        });
        console.log(user);
        if (user) {
          return res.send({ user });
        } else {
        }
      }
    } catch (error) {
      res.send(error.message);
    }
  }
};

export default authHandler;
