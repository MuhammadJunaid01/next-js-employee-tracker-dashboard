import connectDb from "../../utils/connectDb";
import Timer from "tiny-timer";
import Task from "../../utils/models/tasks_models";
import Test from "../../utils/test";

const taskHandler = async (req, res) => {
  const db = await connectDb;
  if (!db) {
    return res.send("db probleb");
  }
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
      // console.log("req body", req.body);

      // const user = await Task.create({
      //   projectName,
      //   tasks,
      //   taskStartDate,
      //   taskEndDate,
      //   teamLead,
      //   teamMember,
      // });
      const g = await Test.create({
        Name: "junaid",
        email: "junaid@.j.com",
      });
      console.log("data save db", g);
      if (g) {
        res.json("task save successfully", data);
      }
    } catch (error) {
      res.json("something went wrong!", error.message);
    }
  }
  if (req.method === "GET") {
    await connectDb;
    // const timer = new Timer({ interval: 1000, stopwatch: false });
    // timer.on("tick", (ms) => console.log("tick", ms));
    // timer.on("done", () => console.log("done!"));
    // timer.on("statusChanged", (status) => console.log("status:", status));
    // timer.start(60000); // run for 5 seconds
    const g = await Test.create({
      Name: "junaid",
      email: "junaid@.j.com",
    });
    console.log("data save db", g);
    if (g) {
      res.json("task save successfully", data);
    }
    res.send("hello send", g);
  }
};

export default taskHandler;
