import mongoose from "mongoose";

const Schema = mongoose.Schema;

const wordleSchema = new Schema({
  title: String,
  description: String,
  imgUrl: String,
  authorId: String,
});

module.exports = mongoose.model("Wordle", wordleSchema);
