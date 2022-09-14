import connectDb from "../../utils/connectDb";
import User from "../../utils/models/auth_model";

const authHandler = async (req, res) => {
  await connectDb();
  console.log("DB Connent Succesfull! ");

  const { name, email, password, isAdmin } = req.body;
  // console.log("hello req body", req.body);
  try {
    const user = await User.create({
      name,
      email,
      password,
      isAdmin,
    });
    console.log(user);
    if (user) {
      res.send({ user });
    } else {
    }
  } catch (error) {
    res.send(error.message);
  }
};

export default authHandler;
