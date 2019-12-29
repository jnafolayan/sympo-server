export default function buildCommentModel({ mongoose, Schema, uuid }) {
  const commentSchema = new Schema({
    poll: {
      type: Schema.Types.ObjectId,
      ref: "Poll",
      required: true
    },
    author: {
      type: Schema.Types.ObjectId,
      ref: "User",
      required: true
    },
    message: {
      type: String,
      required: true
    },
    upvotes: {
      type: Number,
      required: true,
      default: 0
    }
  }, { timestamps: true });

  return mongoose.model("Comment", commentSchema, "comments");
}
