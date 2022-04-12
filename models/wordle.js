import mongoose from "mongoose";

const Schema = mongoose.Schema;

const wordleSchema = new Schema({
  originalWord: String,
  encryptedWord: String,
});

export default mongoose.models.Wordle || mongoose.model("Wordle", wordleSchema);
