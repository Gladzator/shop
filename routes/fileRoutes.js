const mongoose = require("mongoose");
const Product = mongoose.model("products");

module.exports = app => {
  app.post("/upload", async (req, res) => {
    const { productId, imageName } = req.body;
    const product = await Product.findOneAndUpdate(
      {
        _id: productId
      },
      { $set: { productimage: imageName } },
      { new: true }
    );
    res.send(product);
  });
};
