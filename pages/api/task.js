import connectDb from "../../utils/connectDb";
import Timer from "tiny-timer";

const taskHandler = (req, res) => {
  const timer = new Timer({ interval: 1000, stopwatch: false });

  if (req.method === "POST") {
    res.json("hello post request");
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
