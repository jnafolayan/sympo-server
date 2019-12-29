export default function buildUpvoteModel({ mongoose, Schema, uuid }) {
  const upvoteSchema = new Schema({
    voter: {
      type: Schema.Types.ObjectId,
      ref: "User",
      required: true
    },
    comment: {
      type: Schema.Types.ObjectId,
      ref: "Comment",
      required: true
    }
  });

  return mongoose.model("Upvote", upvoteSchema, "upvotes");
}
