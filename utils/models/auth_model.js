import { Schema, model, models } from "mongoose";
const authSchema = Schema({
  name: {
    type: String,
    required: true,
  },
  email: {
    type: String,
    required: true,
    unique: true,
  },
  password: {
    type: String,
    required: true,
  },
  isAdmin: {
    type: Boolean,
  },
});
const User = models.User || model("User", authSchema);
export default User;
