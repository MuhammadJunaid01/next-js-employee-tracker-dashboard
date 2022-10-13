import { Schema, model, models } from "mongoose";
const ApplyForLeaveSchema = Schema({
  reason: {
    type: String,
    required: true,
  },
  employee: {
    type: String,
    required: true,
  },
  date: {
    type: Array,
    required: true,
  },
});
const ApplyForLeave =
  models.ApplyForLeave || model("ApplyForLeave", ApplyForLeaveSchema);
export default ApplyForLeave;
