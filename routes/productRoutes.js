const keys = require("../config/keys");
const mongoose = require("mongoose");
const bcrypt = require("bcrypt");

const Product = mongoose.model("products");

module.exports = app => {
  app.post("/product_submit", async (req, res) => {
    const {
      user_id,
      productname,
      productprice,
      description,
      ram,
      Manufacturer,
      modelnumber,
      colour,
      battery,
      weight,
      category
    } = req.body;

    const product = await new Product({
      user_id,
      productname,
      productprice,
      description,
      productSpecific: {
        ram,
        Manufacturer,
        modelnumber,
        colour,
        battery,
        weight,
        category
      }
    }).save();

    res.send(product);
  });

  app.post("/fetch_products", async (req, res) => {
    const { user_id } = req.body;
    try {
      const product = await Product.find({
        user_id
      });
      if (product.constructor !== Array) {
        product = [product];
      }
      res.send(product);
    } catch (e) {
      res.send(e);
    }
  });
};
