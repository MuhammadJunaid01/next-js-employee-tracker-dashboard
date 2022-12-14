import connectDb from "../../utils/connectDb";
import ApplyForLeave from "../../utils/models/apply-leave-model";

const applyForLeaveHandler = async (req, res) => {
  const db = await connectDb();

  const { reason, multipleDate, employee } = req.body;
  if (!db) {
    return res.status(404).json({ message: "db connect problem" });
  }
  if (req.method === "POST") {
    try {
      const leave = await ApplyForLeave.create({
        reason: reason,
        employee: employee,
        date: multipleDate,
      });
      if (leave) {
        res.status(200).json({ leave: leave, isOK: true });
      }
    } catch (error) {
      console.log(error);
      res.status(200).json({ message: error.message, isOK: false });
    }
  }
  if (req.method === "GET") {
    try {
      const apply = await ApplyForLeave.find({});

      if (apply) {
        return res.status(200).json(apply);
      }
    } catch (error) {
      return res.status(200).json({ message: error.message, isOK: false });
    }
  }
};

export default applyForLeaveHandler;
