const mongoose = require("mongoose");

const courseCarSchema = new mongoose.Schema({
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

const CourseCar = mongoose.model("CORCAR", courseCarSchema);

module.exports = CourseCar;
