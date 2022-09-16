const puppeteer = require("puppeteer");
import screenshot from "screenshot-desktop";
import path from "path";
const screenHandler = (req, res) => {
  const random = Math.floor(Math.random() * 100000);
  screenshot({ filename: `screen${random}.jpg` })
    .then((imgPath) => {
      console.log("imgpath", imgPath);
    })
    .catch((error) => console.log(error));
  res.send("loadin...........");
};

export default screenHandler;
