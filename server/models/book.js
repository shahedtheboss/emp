const mongoose = require("mongoose");

const bookSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
  },

  image: {
    type: String,
    required: true,
  },

  serial: {
    type: String,
    required: true,
  },

  writer: {
    type: String,
    required: true,
  },

  price: {
    type: String,
    required: true,
  },
});

const Book = mongoose.model("LIBRARYBOOK", bookSchema);

module.exports = Book;
