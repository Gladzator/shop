const mongoose = require("mongoose");
const { Schema } = mongoose;
const AndroidSchema = require("./CategoryModels/Android");

const productSchema = new Schema({
  user_id: {
    type: String,
    required: true
  },
  productname: {
    type: String,
    required: true,
    trim: true
  },
  productprice: {
    type: Number,
    required: true,
    trim: true
  },
  description: {
    type: String,
    required: true,
    trim: true,
    lowercase: true
  },
  productSpecific: AndroidSchema,
  productimage: {
    type: String,
    default: null,
    trim: true
  }
});

mongoose.model("products", productSchema);
