const Gfs = require("../index.js");
const crypto = require("crypto");
const path = require("path");
const GridFsStorage = require("multer-gridfs-storage");
const multer = require("multer");
const Grid = require("gridfs-stream");

const keys = require("../config/keys");

const storage = new GridFsStorage({
  url: keys.mongoURI,
  file: (req, file) => {
    return new Promise((resolve, reject) => {
      crypto.randomBytes(16, (err, buf) => {
        if (err) {
          return reject(err);
        }
        const filename = buf.toString("hex") + path.extname(file.originalname);
        const fileInfo = {
          filename: filename,
          bucketName: "uploads"
        };
        resolve(fileInfo);
      });
    });
  }
});
const upload = multer({ storage }).single("file");
//name of file field(file in this case)
module.exports = { upload };
