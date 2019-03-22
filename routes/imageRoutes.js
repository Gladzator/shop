const _ = require("lodash");
const GridFs = require("../services/GridFs");
const GridFsStorage = require("multer-gridfs-storage");
const multer = require("multer");
const Grid = require("gridfs-stream");
const mongoose = require("mongoose");

module.exports = (app, gfs) => {
  app.post("/upload_image", (req, res) => {
    let file;
    GridFs.upload(req, res, () => {
      res.send(res.req.file.filename);
    });
  });

  app.get("/images", (req, res) => {
    gfs.files.find().toArray((err, files) => {
      if (!files || files.length === 0) {
        return res.status(404).send("No file exists");
      } else {
        _.map(files, file => {
          if (
            file.contentType === "image/jpeg" ||
            file.contentType === "image/png"
          ) {
            let readStream = gfs.createReadStream(file.filename);
            readStream.pipe(res);
            file.isImage = true;
          } else {
            file.isImage = false;
          }
        });
        res.send(files);
      }
    });
  });

  app.get("/image/:filename", (req, res) => {
    gfs.files.findOne({ filename: req.params.filename }, (err, file) => {
      if (!file || file.length === 0) {
        return res.status(404).send("No file exists");
      }

      let readStream = gfs.createReadStream(file.filename);
      readStream.pipe(res);
    });
  });
};
