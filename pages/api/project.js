import connectDb from "../../utils/connectDb";
import formidable from "formidable";
import cloudinary from "cloudinary";
import Project from "../../utils/models/project_model";
export const config = {
  api: {
    bodyParser: false,
  },
};

const projectHandler = async (req, res) => {
  cloudinary.config({
    cloud_name: "jmart-clowd",
    api_key: "411327712868453",
    api_secret: "F77m1qUXiX-GxILfTwjoZsHNF6U",
  });
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
        const {
          projectName,
          taskpriority,
          taskStartDate,
          taskEndDate,
          teamLead,
          teamMember,
          totalhours,
          totalcost,
        } = fields;
        if (err) {
          return res.send("something wrong!");
        } else {
          try {
            console.log("CLODUNARY before");
            cloudinary.v2.uploader.upload(
              files.image.filepath,
              {
                folder: "dashboard/project",
              },
              async (err, result) => {
                console.log("CLODUNARY REWS after");
                if (err) {
                  return res.status(404).json({ message: err.message });
                } else {
                  console.log("HELLO ELSE BLOCK");
                  const project = await Project.create({
                    projectName,
                    taskpriority,
                    taskStartDate,
                    taskEndDate,
                    teamLead,
                    teamMember,
                    totalhours,
                    totalcost,
                    image: result.url,
                  });

                  console.log("save db result", project);
                  return res.status(200).json(project);
                }
              }
            );
          } catch (error) {
            return res.status(400).json(error.message);
          }
        }
      });
      return res.status(200).json({});
    } catch (error) {
      console.log("errr", error.message);
      return res.status(200).json({ error });
    }
  }
};

export default projectHandler;
