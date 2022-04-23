const mongoose = require("mongoose");

const shopCarSchema = new mongoose.Schema({
  img1: {
    type: String,
    required: true,
  },
  img2: {
    type: String,
    required: true,
  },
  img3: {
    type: String,
    required: true,
  },
  link1: {
    type: String,
    required: true,
  },
  link2: {
    type: String,
    required: true,
  },
  link3: {
    type: String,
    required: true,
  },
});

const ShopCar = mongoose.model("SHOPCAR", shopCarSchema);

module.exports = ShopCar;
