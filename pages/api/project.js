import connectDb from "../../utils/connectDb";
import formidable from "formidable";

export const config = {
  api: {
    bodyParser: false,
  },
};
const projectHandler = async (req, res) => {
  const db = await connectDb();
  console.log("DB CONNECTED");
  if (!db) {
    return res.send("something was wrong!!");
  }
  if (req.method === "GET") {
    return res.status(200).json({ msg: " cvnds vcds vbd" });
  }
  if (req.method === "POST") {
    const form = new formidable.IncomingForm();
    try {
      form.parse(req, (err, fields, files) => {
        if (err) {
          return res.send("something wrong!");
        }
        console.log("files", files.image.filepath);
        console.log("teamMember", fields.teamMember);
      });
      return res.status(200).json({});
    } catch (error) {
      console.log("errr", error.message);
      return res.status(200).json({ error });
    }
  }
};

export default projectHandler;
