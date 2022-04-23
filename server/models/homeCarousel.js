const mongoose = require("mongoose");

const homeCarSchema = new mongoose.Schema({
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

const HomeCar = mongoose.model("HOMECAR", homeCarSchema);

module.exports = HomeCar;
