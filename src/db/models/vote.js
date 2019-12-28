export default function buildVoteModel({ mongoose, Schema, uuid }) {
  const voteSchema = new Schema({
    pollId: {
      type: Schema.Types.ObjectId,
      ref: "Poll",
      required: true
    },
    username: {
      type: String,
      required: true
    },
    option: {
      type: String, // option _id or id??
      required: true
    }
  });

  return mongoose.model("Vote", voteSchema, "votes");
}
