export default function buildPollModel({ mongoose, Schema, uuid }) {
  const PollOption = new Schema({
    _id: {
      type: String,
      default: () => uuid.uuid(),
    },

    label: {
      type: String,
      required: true
    }
  });

  const pollSchema = new Schema({
    question: {
      type: String,
      required: true
    },
    details: {
      type: String,
      required: true
    },
    options: [PollOption]
  });

  return mongoose.model("Poll", pollSchema, "polls");
}
