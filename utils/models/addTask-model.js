import { Schema, model, models } from "mongoose";
const addTaskSchema = Schema({
  description: {
    type: String,
    required: true,
  },
  employee: {
    type: String,
    required: true,
  },
  endDate: {
    type: String,
    required: true,
  },
  startDate: {
    type: String,
    required: true,
  },

  image: {
    type: String,
    required: true,
  },
});
const AddTask = models.AddTask || model("AddTask", addTaskSchema);
export default AddTask;
