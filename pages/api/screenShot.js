import screenshot from "screenshot-desktop";
const screenHandler = (req, res) => {
  const random = Math.floor(Math.random() * 100000);
  screenshot({ filename: `./shot/screen${random}.jpg` })
    .then((imgPath) => {
      console.log("imgpath", imgPath);
    })
    .catch((error) => console.log(error));

  res.send("loadin...........");
};

export default screenHandler;
