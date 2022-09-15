const puppeteer = require("puppeteer");
import screenshot from "screenshot-desktop";
import path from "path";
const screenHandler = (req, res) => {
  screenshot({ filename: "shot.jpg" })
    .then((imgPath) => {
      console.log("imgpath", imgPath);
    })
    .catch((error) => console.log(error));
  res.send("loadin...........");
};

export default screenHandler;
