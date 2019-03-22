const express = require("express");
const mongoose = require("mongoose");
const bodyParser = require("body-parser");
const keys = require("./config/keys");
const Grid = require("gridfs-stream");
require("./models/User");
require("./models/Product");

mongoose.Promise = global.Promise;
mongoose.connect(keys.mongoURI);
const conn = mongoose.createConnection(keys.mongoURI);
const app = express();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

let gfs;
conn.once("open", () => {
  gfs = Grid(conn.db, mongoose.mongo);
  gfs.collection("uploads");
  require("./routes/imageRoutes")(app, gfs);
});

require("./routes/authRoutes")(app);
require("./routes/fileRoutes")(app);
require("./routes/productRoutes")(app);

if (process.env.NODE_ENV === "production") {
  app.use(express.static("client/build"));

  const path = require("path");
  app.get("*", (req, res) => {
    res.sendFile(path.resolve(__dirname, "client", "build", "index.html"));
  });
}

const PORT = process.env.PORT || 5000;
app.listen(5000);
