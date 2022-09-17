import { Schema, model, models } from "mongoose";
const testsSchema = Schema({
  Name: {
    type: String,
    required: true,
  },
  email: {
    type: String,
    required: true,
  },
});
const Test = models.Test || model("Test", testsSchema);
export default Test;
