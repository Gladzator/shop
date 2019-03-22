const mongoose = require("mongoose");
const { Schema } = mongoose;

const androidSchema = new Schema({
  ram: {
    type: String,
    trim: true,
    lowercase: true
  },
  Manufacturer: {
    type: String,
    trim: true
  },
  modelnumber: {
    type: Number,
    trim: true
  },
  colour: {
    type: String,
    trim: true,
    lowercase: true
  },
  battery: {
    type: Number,
    trim: true
  },
  weight: {
    type: Number,
    trim: true
  },
  category: {
    type: String,
    trim: true,
    lowercase: true
  }
});

module.exports = androidSchema;
