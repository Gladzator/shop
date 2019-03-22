const mongoose = require("mongoose");
const validator = require("validator");
const { Schema } = mongoose;

const userSchema = new Schema({
  userName: {
    type: String,
    required: true,
    trim: true,
    unique: true
  },
  userPassword: {
    type: String,
    required: true,
    trim: true
  },
  userEmail: {
    type: String,
    required: true,
    trim: true,
    lowercase: true,
    validate(value) {
      if (!validator.isEmail(value)) {
        throw new Error("Email is invalid");
      }
    }
  }
});

mongoose.model("users", userSchema);
