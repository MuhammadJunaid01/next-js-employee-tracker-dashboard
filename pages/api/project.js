import connectDb from "../../utils/connectDb";
import multiparty from "multiparty";

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
    const form = new multiparty.Form();
    try {
      form.parse(req, function (err, fields, files) {
        if (err) {
          console.log(err.message);
          res.status(404).json({ message: err.message });
          return;
        } else {
          const { projectName } = fields;
          console.log("projectName", projectName);
          const msg = { name: "hjkhjkhk" };
          //   return res.status(200).json({ msg });
          console.log("else block");
        }
        //   console.log("post fields", fields);
        //   console.log("files", files);
      });
      const msg = { name: "hjkhjkhk" };
      console.log("MKJEDVKJFV KF VK FDJS VKFS VK ");
      return res.status(200).json({ msg });
    } catch (error) {
      console.log("errr", error.message);
      return res.status(200).json({ error });
    }
  }
};

export default projectHandler;
