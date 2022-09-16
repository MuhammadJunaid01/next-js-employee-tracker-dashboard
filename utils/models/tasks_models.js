import { Schema, model, models } from "mongoose";
const tasksSchema = Schema({
  projectName: {
    type: String,
    required: true,
  },
  tasks: [],
  taskpriority: {
    type: String,
    required: true,
  },
  taskStartDate: {
    type: String,
    required: true,
  },
  taskEndDate: {
    type: String,
    required: true,
  },
  teamLead: [],
  teamMember: [],
});
const Task = models.Task || model("Task", tasksSchema);
export default Task;
