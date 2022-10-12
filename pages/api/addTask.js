import { message } from "antd";
import formidable from "formidable";
import connectDb from "../../utils/connectDb";
import AddTask from "../../utils/models/addTask-model";
import cloudinary from "cloudinary";

export const config = {
  api: {
    bodyParser: false,
  },
};

const addTaskHandler = async (req, res) => {
  const db = await connectDb();
  cloudinary.config({
    cloud_name: "jmart-clowd",
    api_key: "411327712868453",
    api_secret: "F77m1qUXiX-GxILfTwjoZsHNF6U",
  });
  if (!db) {
    return res.status(404).json({ message: "something wrong! " });
  }
  if (req.method === "POST") {
    const form = new formidable.IncomingForm();
    try {
      form.parse(req, (err, fields, files) => {
        /* Checking if there is an error in the form.parse() method. */
        const { employee, description, end, start } = fields;
        if (err) {
          return res.status(404).json({ message: err.message });
        } else {
          console.log("mndjncj", description, employee, end, start);
          try {
            cloudinary.v2.uploader.upload(
              files.pngFile.filepath,
              {
                folder: "dashboard/task",
              },
              async (err, result) => {
                if (err) {
                  return res.status(404).json({ message: err.message });
                }
                const task = await AddTask.create({
                  description,
                  employee,
                  endDate: end,
                  startDate: start,
                  image: result.url,
                });
                return res.status(200).json({ isOK: true, data: task });
              }
            );
          } catch (error) {
            return res.status(404).json({ message: error.message });
          }
        }
      });
    } catch (error) {
      return res.status(404).json({ message: error.message });
    }
  }
};

export default addTaskHandler;
