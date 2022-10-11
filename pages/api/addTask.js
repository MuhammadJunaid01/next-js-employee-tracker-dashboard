import { message } from "antd";
import formidable from "formidable";
import connectDb from "../../utils/connectDb";
import AddTask from "../../utils/models/addTask-model";

export const config = {
  api: {
    bodyParser: false,
  },
};

const addTaskHandler = async (req, res) => {
  const db = await connectDb();
  console.log("db connect successfull");
  if (!db) {
    return res.status(404).json({ message: "something wrong! " });
  }
  if (req.method === "POST") {
    console.log("req body", req.body);
    const form = new formidable.IncomingForm();
    try {
      form.parse(req, (err, fields, files) => {
        if (err) {
          return res.status(404).json({ message: "something wrong" });
        }
        const { employee, desc, end, start } = fields;
        console.log("mndjncj", desc, end, start);
      });
      return res.status(200).json({ name: "junaid" });
    } catch (error) {}
  }
};

export default addTaskHandler;
