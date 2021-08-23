import mongoose from "mongoose";

const postSchema = mongoose.Schema({
  title: String,
  caption: String,
  creator: String,
  tags: [String],
  selectedFile: String,
  likeCount: {
    type: Number,
    default: 0,
  },
  createdOn: {
    type: String,
    default: new Date(),
  },
});

//converting schema into model
const artwork = mongoose.model("artwork", postSchema);
export default artwork;
