export default function buildVoteModel({ mongoose, Schema, uuid }) {
  const voteSchema = new Schema({
    poll: {
      type: Schema.Types.ObjectId,
      ref: "Poll",
      required: true
    },
    user: {
      type: Schema.Types.ObjectId,
      ref: "User",
      required: true
    },
    optionId: {
      type: String, // option _id
      required: true
    }
  });

  return mongoose.model("Vote", voteSchema, "votes");
}
