export default function buildPollModel({ mongoose, Schema, uuid }) {
  const PollOption = new Schema({
    // TODO: check if _id is attached on instance
    label: {
      type: String,
      required: true
    }
  });

  const pollSchema = new Schema({
    uuid: {
      type: String,
      default: uuid
    },
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
