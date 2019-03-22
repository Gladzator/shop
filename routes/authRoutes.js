const keys = require("../config/keys");
const mongoose = require("mongoose");
const bcrypt = require("bcrypt");

const User = mongoose.model("users");

module.exports = app => {
  app.post("/create", async (req, res) => {
    const { userName, userPassword, userEmail } = req.body;

    const hashedPassword = await bcrypt.hash(userPassword, 8);

    await new User({
      userName,
      userPassword: hashedPassword,
      userEmail
    }).save();

    res.send({});
  });

  app.post("/login", async (req, res) => {
    const { userName, userPassword } = req.body;
    try {
      const userPass = await User.findOne({
        userName
      }).select({
        userPassword
      });

      const isMatch = await bcrypt.compare(userPassword, userPass.userPassword);

      let user = {};
      if (isMatch) {
        user = await User.findOne({
          userName
        }).select({
          userName,
          userPassword
        });
        res.send(user);
      } else {
        res.send(null);
      }
    } catch (e) {
      res.status(404).send(e);
    }
  });

  app.get("/logout", async (req, res) => {
    res.send(null);
  });
};
