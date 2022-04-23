const mongoose = require("mongoose");

const hotCoursesSchema = new mongoose.Schema({
  img: {
    type: String,
    required: true,
  },
  name: {
    type: String,
    required: true,
  },

  link: {
    type: String,
    required: true,
  },
});

const HotCourse = mongoose.model("HOTCOURSES", hotCoursesSchema);

module.exports = HotCourse;
