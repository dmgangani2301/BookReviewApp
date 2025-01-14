const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const bookSchema = new Schema({
  title: {
    type: String,
    required: true,
  },
  author: {
    type: String,
    required: true,
  },
  releaseDate: {
    type: Date,
    required: true,
  },
  numberOfPages: {
    type: Number,
    required: true,
  },
  reviews: [
    {
      type: String,
    },
  ],
});

module.exports = mongoose.model("Book", bookSchema);
