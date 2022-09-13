import mongoose from "mongoose";
const connectDb = () =>
  mongoose.connect(
    "mongodb+srv://junaid:qK47f1z6007lJF5Q@cluster0.whoksax.mongodb.net/dash_board_tracker=true&w=majority"
  );

export default connectDb;
