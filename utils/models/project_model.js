import { Schema, model, models } from "mongoose";
const projectSchema = Schema({
  projectName: {
    type: String,
    required: true,
  },
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
  teamLead: {
    type: Array,
    required: true,
  },
  teamMember: {
    type: Array,
    required: true,
  },
  totalhours: {
    type: String,
    required: true,
  },
  totalcost: {
    type: String,
    required: true,
  },
  image: {
    type: String,
    required: true,
  },
});
const Project = models.Project || model("Project", projectSchema);
export default Project;
