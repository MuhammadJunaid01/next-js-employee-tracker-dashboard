import connectDb from "../../utils/connectDb";
import Timer from "tiny-timer";
import Task from "../../utils/models/tasks_models";

const taskHandler = async (req, res) => {
  const timer = new Timer({ interval: 1000, stopwatch: false });
  await connectDb;
  console.log("DB connent");
  if (req.method === "POST") {
    console.log("hello hitted");
    const {
      projectName,
      tasks,
      taskStartDate,
      taskEndDate,
      teamLead,
      teamMember,
    } = req.body;
    // console.log("req body", req.body);
    try {
      const data = await Task.create({
        projectName,
        tasks,
        taskStartDate,
        taskEndDate,
        teamLead,
        teamMember,
      });
      console.log("data save db", data);
      if (data) {
        res.json("task save successfully", data);
      }
    } catch (error) {
      res.json("something went wrong!", error.message);
    }
  }
  if (req.method === "GET") {
    timer.on("tick", (ms) => console.log("tick", ms));
    timer.on("done", () => console.log("done!"));
    timer.on("statusChanged", (status) => console.log("status:", status));
    timer.start(60000); // run for 5 seconds
    res.send("hello send");
  }
};

export default taskHandler;
